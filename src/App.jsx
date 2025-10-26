import { useEffect, useState } from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [currentPage, setCurrentPage] = useState("contact-list");
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts") || "[]")
  );
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState("");


  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const removeToast = () => {
    setToast(null);
  };

  const showModal = (title, desc, action) => {
    setModal({title, desc, action})
  }

  const removeModal = () => {
    setModal(null);
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      {modal && <Modal title={modal.title} desc={modal.desc} action={modal.action} removeModal={removeModal} />}
      {toast && (
        <ToastMessage
          message={toast.message}
          type={toast.type}
          onClose={removeToast}
        />
      )}
      {currentPage === "contact-list" && (
        <ContactListPage
          setCurrentPage={setCurrentPage}
          setContacts={setContacts}
          contacts={contacts}
          setSearch={setSearch}
          search={search}
          showToast={showToast}
          showModal={showModal}
        />
      )}
      {currentPage === "add-contact" && (
        <AddContactPage
          setCurrentPage={setCurrentPage}
          setContacts={setContacts}
          showToast={showToast}
        />
      )}
    </>
  );
};

export default App;
