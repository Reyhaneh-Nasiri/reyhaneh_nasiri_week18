import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import ContactsContext from "./ContactsContext";

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      axios("http://localhost:3000/contacts").then((res) =>
        setContacts(res.data)
      );
    };
    fetchContacts();
  }, [contacts]);

  const value = useMemo(
    () => ({
      contacts,
      setContacts,
    }),
    [contacts]
  );
  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
