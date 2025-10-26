import styles from "./ViewContactPage.module.css";
const ViewContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <i className="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      <ul className={styles.information}>
        <li>Name: contact1</li>
        <li>Email: contact1@gmail.com</li>
        <li>Phone: 123</li>
        <li>Job: Programmer</li>
      </ul>
      <div className={styles.footer}>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ViewContactPage;
