import styles from "./ViewContactPage.module.css";
const ViewContactPage = ({ id, contacts }) => {
  const contact = contacts.find(contact => contact.id == id)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <i className="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      <ul className={styles.information}>
        <li>Name: {contact.name}</li>
        <li>Email: {contact.email}</li>
        <li>Phone: {contact.phone}</li>
        <li>Job: {contact.job}</li>
      </ul>
      <div className={styles.footer}>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ViewContactPage;