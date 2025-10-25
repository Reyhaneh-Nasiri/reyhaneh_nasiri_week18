import styles from "./SearchBox.module.css";
const SearchBox = ({ setSearch, search }) => {
  return (
    <div className={styles.searchBox}>
      <button>
        <i className="fa-solid fa-search"></i>
      </button>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && <i className={`${styles.clearButton} fa-solid fa-x`}></i>}
    </div>
  );
};

export default SearchBox;
