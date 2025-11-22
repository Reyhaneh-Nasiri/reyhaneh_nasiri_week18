import { useState } from "react";
import styles from "./ContactForm.module.css";
import { validateContact } from "@/utils/validation";
const inputs = [
  { id: "name", label: "Name", icon: "fa-user" },
  { id: "email", label: "Email", icon: "fa-envelope" },
  { id: "phone", label: "Phone", icon: "fa-phone" },
  { id: "job", label: "Job", icon: "fa-briefcase" },
];
const ContactForm = ({
  initialValues,
  onSubmit,
  onCancel,
  buttonText,
  title,
}) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const isActive = Object.values(formValues).some(
    (value) => value.trim() !== ""
  );


  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    const errors = validateContact(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      onSubmit(formValues);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3 className={styles.form__title}>{title} Contact</h3>
        <div className={`${styles.form__inputs} ${isActive && styles.active}`}>
          {inputs.map(({ id, label, icon }) => (
            <div key={id} className={styles.form__input}>
              <label htmlFor={id} className={styles.form__label}>
                {label}
              </label>
              <input
                id={id}
                name={id}
                type="text"
                value={formValues[id]}
                onChange={changeHandler}
              />
              <i className={`fa-solid ${icon}`}></i>
              <p className={styles.form__message}>{formErrors[id]}</p>
            </div>
          ))}
        </div>
        <div className={styles.form__buttons}>
          <button className={styles.form__button} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.form__button} onClick={submitHandler}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
