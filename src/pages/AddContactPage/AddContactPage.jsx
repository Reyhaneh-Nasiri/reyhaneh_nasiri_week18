import { useEffect, useState } from "react";
import styles from "./AddContactPage.module.css";
const AddContactPage = ({ setCurrentPage, setContacts }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSave, setIsSave] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const saveHandler = () => {
    setFormErrors(validate(formValues));
    setIsSave(true)
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
    const id = Date.now();
      setContacts((contacts) => [...contacts, { id: id, ...formValues }]);
      setCurrentPage("contact-list");
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
        <h3 className={styles.form__title}>Add Contact</h3>
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
            onClick={() => setCurrentPage("contact-list")}
          >
            Cancel
          </button>
          <button className={styles.form__button} onClick={saveHandler}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContactPage;
