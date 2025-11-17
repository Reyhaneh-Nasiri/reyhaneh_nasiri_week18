import ContactForm from "@/components/ContactForm/ContactForm";
import { useContacts } from "@/hooks/useContacts";
import { useModal } from "@/hooks/useModal";
import { useToast } from "@/hooks/useToast";
import axios from "axios";
import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContactPage = () => {
  const { showModal } = useModal();
  const { showToast } = useToast();
  const { contacts } = useContacts();

  const { contactId } = useParams();
  const navigate = useNavigate();

  const contact = contacts.find((contact) => contact.id == contactId);

  const editHandler = (editedValues) => {
    axios
      .patch(`http://localhost:3000/contacts/${contactId}`, editedValues)
      .then(() => {
        navigate(`/view-contact/${contactId}`);
        showToast("Contact edited successfully", "success");
      })
      .catch((error) => console.log(error));
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

export default memo(EditContactPage);
