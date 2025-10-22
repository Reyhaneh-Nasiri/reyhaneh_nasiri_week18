import styles from "./SearchBox.module.css"
const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search contacts..." />
      <button><i className="fa-solid fa-search"></i></button>
    </div>
  );
};

export default SearchBox;
