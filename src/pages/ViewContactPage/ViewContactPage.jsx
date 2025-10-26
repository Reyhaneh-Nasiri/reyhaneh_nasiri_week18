import styles from "./ViewContactPage.module.css";
const ViewContactPage = ({ id, contacts, setCurrentPage, setContacts, showToast }) => {
  const contact = contacts.find(contact => contact.id == id);

  const deleteHandler = () => {
    setContacts(contacts.filter(contact => contact.id != id))
    setCurrentPage("contact-list");
    showToast("Contact deleted", "success")

  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <i onClick={() => setCurrentPage("contact-list")} className="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      <ul className={styles.information}>
        <li>Name: {contact.name}</li>
        <li>Email: {contact.email}</li>
        <li>Phone: {contact.phone}</li>
        <li>Job: {contact.job}</li>
      </ul>
      <div className={styles.footer}>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default ViewContactPage;