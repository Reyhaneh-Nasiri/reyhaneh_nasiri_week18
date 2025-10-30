import styles from "./SortButtons.module.css";
const SortButtons = ({ sortBy, setSortBy }) => {
  return (
    <div className={styles.sortButtons}>
      <p>Sort by: </p>
      <button
        className={`${sortBy == "latest-added" && styles.active}`}
        onClick={() => setSortBy("latest-added")}
      >
        Latest Added
      </button>
      <button
        className={`${sortBy == "alphabet" && styles.active}`}
        onClick={() => setSortBy("alphabet")}
      >
        Alphabet
      </button>
      <button
        className={`${sortBy == "first-added" && styles.active}`}
        onClick={() => setSortBy("first-added")}
      >
        First Added
      </button>
    </div>
  );
};

export default SortButtons;
