import { useState } from "react";
import { useForm } from "react-hook-form";

import { validationSchema } from "@/utils/validation";

import styles from "./ContactForm.module.css";

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
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: initialValues,
  });
  let [values, setValues] = useState(getValues());
  const [errors, setErrors] = useState({});

  const isActive = Object.values(values).some((value) => value?.trim() !== "");

  const submitHandler = (data) => {
    validationSchema
      .validate(data, { abortEarly: false })
      .then((valid) => {
        onSubmit(valid);
      })
      .catch((error) => {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path.toLowerCase()] = err.message;
        });
        setErrors(newErrors);
      });
  };

  const changeHandler = () => {
    setValues(getValues());
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(submitHandler)}
        onChange={changeHandler}
      >
        <h3 className={styles.form__title}>{title} Contact</h3>
        <div className={`${styles.form__inputs} ${isActive && styles.active}`}>
          {inputs.map(({ id, label, icon }) => (
            <div key={id} className={styles.form__input}>
              <label htmlFor={id} className={styles.form__label}>
                {label}
              </label>
              <input id={id} type="text" {...register(id)} />
              <i className={`fa-solid ${icon}`}></i>
              <p className={styles.form__message}>{errors[id]}</p>
            </div>
          ))}
        </div>
        <div className={styles.form__buttons}>
          <button className={styles.form__button} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.form__button} type="submit">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
