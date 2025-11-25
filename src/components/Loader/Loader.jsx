import { RotatingLines } from "react-loader-spinner";

import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="4"
        strokeColor="#5088b8"
      />
    </div>
  );
};

export default Loader;
