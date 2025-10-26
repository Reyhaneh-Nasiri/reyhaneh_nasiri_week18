import { useEffect, useState } from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Modal from "./components/Modal/Modal";
import ViewContactPage from "./pages/ViewContactPage/ViewContactPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("contact-list");
  const [viewId, setViewId] = useState(null);
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts") || "[]")
  );
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState("");
  const [isOk, setIsOk] = useState(false);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const removeToast = () => {
    setToast(null);
  };

  const showModal = (title, desc, action) => {
    setModal({ title, desc, action });
  };

  const removeModal = () => {
    setModal(null);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      {modal && (
        <Modal
          title={modal.title}
          desc={modal.desc}
          action={modal.action}
          removeModal={removeModal}
          setIsOk={setIsOk}
        />
      )}
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
          isOk={isOk}
          onViewClick={(id) => {
            setViewId(id);
            setCurrentPage("view-contact");
          }}
        />
      )}
      {currentPage === "add-contact" && (
        <AddContactPage
          setCurrentPage={setCurrentPage}
          setContacts={setContacts}
          showToast={showToast}
        />
      )}

      {currentPage === "view-contact" && <ViewContactPage id={viewId} contacts={contacts} setCurrentPage={setCurrentPage} setContacts={setContacts} showToast={showToast}  />}
    </>
  );
};

export default App;
