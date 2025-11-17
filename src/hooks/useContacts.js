import ContactsContext from "@/components/contexts/ContactsContext.js";
import { useContext } from "react";

export const useContacts = () => useContext(ContactsContext);
