import { useEffect, useState } from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Modal from "./components/Modal/Modal";
import ViewContactPage from "./pages/ViewContactPage/ViewContactPage";
import EditContactPage from "./pages/EditContactPage/EditContactPage";
import useModal from "./hooks/useModal";
import useToast from "./hooks/useToast";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [currentPage, setCurrentPage] = useState("contact-list");
  const [viewId, setViewId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  const [search, setSearch] = useState("");
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [contacts, favorites]);

  const { modal, showModal, removeModal } = useModal();
  const { toast, showToast, removeToast } = useToast();
  return (
    <>
      {modal && (
        <Modal
          title={modal.title}
          desc={modal.desc}
          action={modal.action}
          removeModal={removeModal}
          onConfirm={modal.onConfirm}
        />
      )}
      {toast && (
        <ToastMessage
          message={toast.message}
          type={toast.type}
          onClose={removeToast}
        />
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/contact-list"
            element={
              <ContactListPage
                setCurrentPage={setCurrentPage}
                setContacts={setContacts}
                contacts={contacts}
                setSearch={setSearch}
                search={search}
                showToast={showToast}
                showModal={showModal}
                favorites={favorites}
                setFavorites={setFavorites}
                onViewClick={(id) => {
                  setViewId(id);
                  setCurrentPage("view-contact");
                }}
              />
            }
          />
          <Route
            path="add-contact"
            element={
              <AddContactPage
                setCurrentPage={setCurrentPage}
                setContacts={setContacts}
                showToast={showToast}
                showModal={showModal}
              />
            }
          />
          <Route
            path="view-contact"
            element={
              <ViewContactPage
                id={viewId}
                contacts={contacts}
                setCurrentPage={setCurrentPage}
                setContacts={setContacts}
                showToast={showToast}
                setEditId={setEditId}
                showModal={showModal}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />
          <Route
            path="edit-contact"
            element={
              <EditContactPage
                setCurrentPage={setCurrentPage}
                contacts={contacts}
                editId={editId}
                setContacts={setContacts}
                showToast={showToast}
                showModal={showModal}
                setFavorites={setFavorites}
              />
            }
          />
          <Route
            path="favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                setCurrentPage={setCurrentPage}
                onViewClick={(id) => {
                  setViewId(id);
                  setCurrentPage("view-contact");
                }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
