import { useEffect, useState } from "react";
import styles from "./EditContactPage.module.css";

const EditContactPage = ({
  setCurrentPage,
  editId,
  contacts,
  setContacts,
  showToast,
}) => {
  const contact = contacts.find((contact) => contact.id == editId);
  const [isFocus, setIsFocus] = useState(true);

  const [formValues, setFormValues] = useState(
    ({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      job: contact.job,
    } = contact)
  );

  const [formErrors, setFormErrors] = useState({});
  const [isSave, setIsSave] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const EditHandler = () => {
    setFormErrors(validate(formValues));
    setIsSave(true);
  };

  const focusHandler = () => {
    setIsFocus(true);
  };

  const blurHandler = () => {
    if (
      !formValues.name &&
      !formValues.email &&
      !formValues.phone &&
      !formValues.job
    ) {
      setIsFocus(false);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSave) {
      setContacts(
        contacts.map((contact) => {
          if (contact.id == editId) {
            contact.name = formValues.name;
            contact.email = formValues.email;
            contact.phone = formValues.phone;
            contact.job = formValues.job;
          }
          return contact;
        })
      );
      setCurrentPage("view-contact");
      showToast("Contact edited successfully", "success");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email";
    }
    return errors;
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3 className={styles.form__title}>Edit Contact</h3>
        <div className={`${styles.form__inputs} ${isFocus && styles.active}`}>
          <div className={styles.form__input}>
            <label htmlFor="name" className={styles.form__label}>
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              onFocus={focusHandler}
              onBlur={blurHandler}
              value={formValues.name}
              onChange={changeHandler}
            />
            <i className="fa-solid fa-user"></i>
            <p className={styles.form__message}>{formErrors.name}</p>
          </div>
          <div className={styles.form__input}>
            <label htmlFor="email" className={styles.form__label}>
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              onFocus={focusHandler}
              onBlur={blurHandler}
              value={formValues.email}
              onChange={changeHandler}
            />
            <i className="fa-solid fa-envelope"></i>
            <p className={styles.form__message}>{formErrors.email}</p>
          </div>
          <div className={styles.form__input}>
            <label htmlFor="phone" className={styles.form__label}>
              Phone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              onFocus={focusHandler}
              onBlur={blurHandler}
              value={formValues.phone}
              onChange={changeHandler}
            />
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className={styles.form__input}>
            <label htmlFor="job" className={styles.form__label}>
              Job
            </label>
            <input
              id="job"
              type="text"
              name="job"
              onFocus={focusHandler}
              onBlur={blurHandler}
              value={formValues.job}
              onChange={changeHandler}
            />
            <i className="fa-solid fa-briefcase"></i>
          </div>
        </div>
        <div className={styles.form__buttons}>
          <button
            className={styles.form__button}
            onClick={() => setCurrentPage("view-contact")}
          >
            Cancel
          </button>
          <button className={styles.form__button} onClick={EditHandler}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContactPage;
