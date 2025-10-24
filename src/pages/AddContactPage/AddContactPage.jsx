import { useState } from "react";
import styles from "./AddContactPage.module.css";
const AddContactPage = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const saveHandler = () => {
    console.log(formValues);
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
          <button className={styles.form__button}>Cancel</button>
          <button className={styles.form__button} onClick={saveHandler}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContactPage;
