import { useEffect, useState } from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import ToastMessage from "./components/ToastMessage/ToastMessage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("contact-list");
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts") || "[]")
  );
  const [toast, setToast] = useState(null);
  const [search, setSearch] = useState("");

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const removeToast = () => {
    setToast(null);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
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
          contacts={contacts}
          setSearch={setSearch}
          search={search}
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
