import { useState } from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import ViewContactPage from "./pages/ViewContactPage/ViewContactPage";
import EditContactPage from "./pages/EditContactPage/EditContactPage";
import useToast from "./hooks/useToast";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactsProvider from "./components/context/ContactsContext";
import ModalProvider from "./components/context/ModalContext";

const App = () => {
  const [search, setSearch] = useState("");

  const { toast, showToast, removeToast } = useToast();
  return (
    <>
      {toast && (
        <ToastMessage
          message={toast.message}
          type={toast.type}
          onClose={removeToast}
        />
      )}
      <ModalProvider>
        <ContactsProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/contact-list" />} />
            <Route
              path="/contact-list"
              element={
                <ContactListPage
                  setSearch={setSearch}
                  search={search}
                  showToast={showToast}
                />
              }
            />
            <Route
              path="/add-contact"
              element={<AddContactPage showToast={showToast} />}
            />
            <Route
              path="/view-contact/:contactId"
              element={<ViewContactPage showToast={showToast} />}
            />
            <Route
              path="/edit-contact/:contactId"
              element={<EditContactPage showToast={showToast} />}
            />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </ContactsProvider>
      </ModalProvider>
    </>
  );
};

export default App;
