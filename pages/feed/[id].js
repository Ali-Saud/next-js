import styles from '../../styles/Feed.module.css';
import Paginator from '../../components/Paginator'

export const Feed = ({ articles, pageNumber }) => {

    //console.log({ articles, pageNumber });


    return (
      <>
        <Paginator pageNumber={pageNumber} />
        <div className={styles.main}>
          {articles.map((article, index) => (
            <div key={index} className={styles.post}>
              <h1 onClick={() => (window.location.href = article.url)}>
                {article.title}
              </h1>
              <p>{article.description}</p>
              {!!article.urlToImage && <img src={article.urlToImage} />}
            </div>
          ))}
        </div>
        <Paginator pageNumber={pageNumber} />
      </>
    );
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.id;

    if (!pageNumber || pageNumber < 1 || pageNumber > 7) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            },
        };
    }


    const apiResponse = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&page=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        },
      }
    );
    
    const json = await apiResponse.json();
    const { articles } = json;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber),
        },
    };
};


export default Feed;