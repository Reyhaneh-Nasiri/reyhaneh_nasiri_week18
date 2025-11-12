import { useState } from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import ViewContactPage from "./pages/ViewContactPage/ViewContactPage";
import EditContactPage from "./pages/EditContactPage/EditContactPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactsProvider from "./components/context/ContactsContext";
import ModalProvider from "./components/context/ModalContext";
import ToastProvider from "./components/context/ToastContext";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <ToastProvider>
        <ModalProvider>
          <ContactsProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/contact-list" />} />
              <Route
                path="/contact-list"
                element={
                  <ContactListPage setSearch={setSearch} search={search} />
                }
              />
              <Route path="/add-contact" element={<AddContactPage />} />
              <Route
                path="/view-contact/:contactId"
                element={<ViewContactPage />}
              />
              <Route
                path="/edit-contact/:contactId"
                element={<EditContactPage />}
              />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </ContactsProvider>
        </ModalProvider>
      </ToastProvider>
    </>
  );
};

export default App;
