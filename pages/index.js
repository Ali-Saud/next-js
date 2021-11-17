import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        <span>News</span> Tech
      </h1>
      <p className={styles.description}>
        over than 80000 sources of news, all in one place for you 24/7!
      </p>
      <button>
        <a href="/feed/1">Start Reading</a>
      </button>
    </div>
  );
}
