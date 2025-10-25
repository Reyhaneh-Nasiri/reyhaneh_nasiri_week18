import styles from "./SearchBox.module.css";
const SearchBox = ({ setSearch }) => {
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
    </div>
  );
};

export default SearchBox;
