import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({nextPage}) => {
  return (
    <button className={s.loadMoreBtn} onClick={nextPage}>
      Load more
    </button>
  );
}

export default LoadMoreBtn