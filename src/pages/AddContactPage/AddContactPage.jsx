import ContactForm from "@/components/ContactForm/ContactForm";

const AddContactPage = ({ setCurrentPage, setContacts, showToast }) => {
  const addHandler = (newContact) => {
    const id = Date.now();
    setContacts((prev) => [...prev, { id, ...newContact }]);
    setCurrentPage("contact-list");
    showToast("Contact added successfully", "success");
  };

  return (
    <ContactForm
      initialValues={{ name: "", email: "", phone: "", job: "" }}
      onSubmit={addHandler}
      onCancel={() => setCurrentPage("contact-list")}
      buttonText="Save"
      title="Add"
    />
  );
};

export default AddContactPage;
