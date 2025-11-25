import axios from "axios";
import { useEffect, useMemo, useReducer } from "react";
import ContactsContext from "./ContactsContext";
const initialState = {
  loading: true,
  contacts: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, contacts: action.payload };
    case "FETCH_CONTACT_SUCCESS":
      return { ...state, loading: false };
    case "ADD_CONTACT_SUCCESS":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "EDIT_CONTACT_SUCCESS":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id
            ? Object.assign({}, contact, action.payload.data)
            : contact
        ),
      };
    case "DELETE_CONTACT_SUCCESS":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "FAVORITE_CONTACT_SUCCESS":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id
            ? Object.assign({}, contact, action.payload)
            : contact
        ),
      };
    case "MULTIPLE_DELETE_CONTACT_SUCCESS":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      throw new Error("Invalid Action!");
  }
};
const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    const fetchContacts = async () => {
      try {
        const res = await axios(import.meta.env.VITE_BASE_URL);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchContacts();
  }, []);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
