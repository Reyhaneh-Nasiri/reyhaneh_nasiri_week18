import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import styles from "./ViewContactPage.module.css";
import { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import { useToast } from "@/hooks/useToast";
import axios from "axios";
import { useContacts } from "@/hooks/useContacts";
import Loader from "@/components/Loader/Loader";
const ViewContactPage = () => {
  const { showModal } = useModal();
  const { showToast } = useToast();
  const { state, dispatch } = useContacts();

  const { contactId } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({});
  const values = Object.keys(contact);

  useEffect(() => {
    dispatch({type: "FETCH_START"})
    axios(`${import.meta.env.VITE_BASE_URL}${contactId}`).then((res) =>{
    dispatch({type: "FETCH_CONTACT_SUCCESS"})
      setContact(res.data)

    }

    );
  }, []);
  const deleteHandler = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}${contactId}`
      );
      if (res.status == 200) {
        dispatch({ type: "DELETE_CONTACT_SUCCESS", payload: res.data.id });
        navigate("/contact-list");
        showToast("Contact deleted", "success");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderModal = () => {
    showModal(
      `Delete Contact`,
      "Are you sure you want to delete this contact?",
      "Delete",
      () => deleteHandler()
    );
  };

  const favoriteHandler = () => {
    axios
      .patch(`${import.meta.env.VITE_BASE_URL}${contactId}`, {
        isFavorite: !contact.isFavorite,
      })
      .then((res) => {
        setContact(res.data);
        dispatch({ type: "FAVORITE_CONTACT_SUCCESS", payload: res.data });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {state.loading ? <Loader />: (
        <div className={styles.container}>
          <div className={styles.header}>
            <i
              onClick={() => navigate("/contact-list")}
              className="fa-solid fa-arrow-left"
            ></i>
            <i
              className="fa-solid fa-pen-to-square"
              onClick={() => navigate(`/edit-contact/${contactId}`)}
            ></i>
          </div>
          <button
            className={`${styles.favorite} ${
              contact.isFavorite && styles.active
            }`}
            onClick={favoriteHandler}
          >
            {contact.isFavorite ? (
              <i className="fa-solid fa-star"></i>
            ) : (
              <i className="fa-regular fa-star"></i>
            )}
          </button>
          <ul className={styles.information}>
            {values.map((value) => {
              if (value !== "id" && value !== "isFavorite") {
                return (
                  <li key={value}>
                    {capitalizeFirstLetter(value)}:{" "}
                    {contact[value.toLowerCase()]}
                  </li>
                );
              }
            })}
          </ul>
          <div className={styles.footer}>
            <button onClick={renderModal}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(ViewContactPage);
