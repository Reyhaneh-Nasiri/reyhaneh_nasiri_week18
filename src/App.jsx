import { useState } from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("contact-list");
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "contact1",
      email: "contact1@gmail.com",
      phone: "1111",
      job: "",
    },
    {
      id: 2,
      name: "contact2",
      email: "contact2@gmail.com",
      phone: "2222",
      job: "",
    },
    {
      id: 3,
      name: "contact3",
      email: "contact3@gmail.com",
      phone: "3333",
      job: "",
    },
  ]);
  return (
    <>
      {currentPage === "contact-list" && (
        <ContactListPage setCurrentPage={setCurrentPage} contacts={contacts} />
      )}
      {currentPage === "add-contact" && (
        <AddContactPage setCurrentPage={setCurrentPage} setContacts={setContacts} />
      )}
    </>
  );
};

export default App;
