import ContactForm from "@/components/ContactForm/ContactForm";
import { ContactsContext } from "@/components/context/ContactsContext";
import { ModalContext } from "@/components/context/ModalContext";
import { ToastContext } from "@/components/context/ToastContext";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContactPage = () => {
  const { showModal } = useContext(ModalContext);
  const { showToast } = useContext(ToastContext);
  const { contacts, setContacts, setFavorites } = useContext(ContactsContext);

  const { contactId } = useParams();
  const navigate = useNavigate();

  const contact = contacts.find((contact) => contact.id == contactId);

  const editHandler = (editedValues) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === contact.id ? { ...c, ...editedValues } : c))
    );
    setFavorites((prev) =>
      prev.map((c) => (c.id === contact.id ? { ...c, ...editedValues } : c))
    );
    navigate(`/view-contact/${contactId}`);
    showToast("Contact edited successfully", "success");
  };

  const renderModal = (editedValues) => {
    showModal(
      `Edit Contact`,
      "Are you sure you want to edit this contact?",
      "Edit",
      () => editHandler(editedValues)
    );
  };
  return (
    <ContactForm
      initialValues={{
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        job: contact.job,
      }}
      onSubmit={renderModal}
      onCancel={() => navigate(`/view-contact/${contactId}`)}
      buttonText="Edit"
      title="Edit"
    />
  );
};

export default EditContactPage;
