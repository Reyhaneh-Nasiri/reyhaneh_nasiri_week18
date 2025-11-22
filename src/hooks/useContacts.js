import ContactsContext from "@/contexts/ContactsContext.js";
import { useContext } from "react";

export const useContacts = () => useContext(ContactsContext);
