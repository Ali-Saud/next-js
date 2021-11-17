import paginatorStyles from '../styles/Paginator.module.css'
import { useRouter } from "next/router";
const Paginator = ({pageNumber}) => {
    const router = useRouter();
    return (
      <div className={paginatorStyles.paginator}>
        <button
          className={
            pageNumber === 1
              ? paginatorStyles.paginator.disabled
              : paginatorStyles.paginator.active
          }
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
        >
          <span>Prev</span>
        </button>
        <div>#{pageNumber}</div>
        <button
          className={
            pageNumber === 7
              ? paginatorStyles.paginator.disabled
              : paginatorStyles.paginator.active
          }
          onClick={() => {
            if (pageNumber < 7) {
              router.push(`/feed/${pageNumber + 1}`);
            }
          }}
        >
          <span>Next</span>
        </button>
      </div>
    );
}

export default Paginator;
