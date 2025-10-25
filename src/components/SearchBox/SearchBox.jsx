import styles from "./SearchBox.module.css";
const SearchBox = ({ setSearch, search }) => {
  const clearSearchHandler = () => {
    setSearch("");
  }
  return (
    <div className={styles.searchBox}>
      <button>
        <i className="fa-solid fa-search"></i>
      </button>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search && <i className={`${styles.clearButton} fa-solid fa-x`} onClick={clearSearchHandler}></i>}
    </div>
  );
};

export default SearchBox;
