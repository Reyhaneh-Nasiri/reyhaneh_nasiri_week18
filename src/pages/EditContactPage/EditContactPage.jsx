import ContactForm from "@/components/ContactForm/ContactForm";

const EditContactPage = ({
  setCurrentPage,
  editId,
  contacts,
  setContacts,
  showToast,
  showModal,
  setFavorites,
}) => {
  const contact = contacts.find((contact) => contact.id == editId);

  const editHandler = (editedValues) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === contact.id ? { ...c, ...editedValues } : c))
    );
    setFavorites((prev) =>
      prev.map((c) => (c.id === contact.id ? { ...c, ...editedValues } : c))
    );
    setCurrentPage("view-contact");
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
      onCancel={() => setCurrentPage("view-contact")}
      buttonText="Edit"
      title="Edit"
    />
  );
};

export default EditContactPage;
