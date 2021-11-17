import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "../styles/Nav.module.css";

const Nav = () => {
    const router = useRouter();
    return (
      <div className={styles.main}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          Tech News
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <div onClick={() => router.push("/")}>Welcome</div>
            </li>
            <li>
              <div onClick={() => router.push("/feed/1")}>News</div>
            </li>
            <li>
              <div onClick={() => router.push("/dom")}>Cyber Owl</div>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Nav;
