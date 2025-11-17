import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import ViewContactPage from "./pages/ViewContactPage/ViewContactPage";
import EditContactPage from "./pages/EditContactPage/EditContactPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactsProvider from "./components/contexts/ContactsProvider";
import ModalProvider from "./components/contexts/ModalContext";
import ToastProvider from "./components/contexts/ToastContext";
import PageNotFound from "./pages/404/404";

const App = () => {
  return (
    <>
      <ToastProvider>
        <ModalProvider>
          <ContactsProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/contact-list" />} />
              <Route path="/contact-list" element={<ContactListPage />} />
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
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </ContactsProvider>
        </ModalProvider>
      </ToastProvider>
    </>
  );
};

export default App;
