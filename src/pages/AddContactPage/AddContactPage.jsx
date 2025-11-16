import ContactForm from "@/components/ContactForm/ContactForm";
import { ContactsContext } from "@/components/context/ContactsContext";
import { useModal } from "@/hooks/useModal";
import { useToast } from "@/hooks/useToast";
import axios from "axios";
import { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AddContactPage = () => {
  const { showModal } = useModal();
  const { showToast } = useToast();
  const { setContacts } = useContext(ContactsContext);
  const navigate = useNavigate();

  const addHandler = async (newContact) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/contacts",
        {...newContact, isFavorite: false}
      );
      setContacts((prev) => [...prev, res.data]);
      navigate("/contact-list");
      showToast("Contact added successfully", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const renderModal = (newContact) => {
    showModal(
      `Save Contact`,
      "Are you sure you want to save this contact?",
      "Save",
      () => addHandler(newContact)
    );
  };

  return (
    <ContactForm
      initialValues={{ name: "", email: "", phone: "", job: "" }}
      onSubmit={renderModal}
      onCancel={() => navigate("/contact-list")}
      buttonText="Save"
      title="Add"
    />
  );
};

export default memo(AddContactPage);
