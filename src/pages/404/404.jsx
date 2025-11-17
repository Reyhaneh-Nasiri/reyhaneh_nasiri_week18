import { Link } from "react-router-dom";

import styles from "./404.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
        <h1>404</h1>
        <Link to="/">
          <i className="fa-solid fa-arrow-left"></i>home
        </Link>
    </div>
  );
};

export default PageNotFound;
