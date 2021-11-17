import styles from '../styles/Dom.module.css';

const DOM = ({ developer }) => {
    console.log(developer)

    return (
        <div className={styles.main}>
            <h1>I build websites!</h1>
            <div className={styles.developerOfTheMonth}>
                <h3>{developer.name}</h3>
                <h6>{developer.position}</h6>
                <img src={developer.image} alt="developer" />
                <p>{developer.description}</p>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/Ali-Saud/next-js/CyberOwl',
    );
    const developer = await apiResponse.json();

    return {
        props: {
            developer,
        },
    };
};

export default DOM
