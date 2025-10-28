import { useState } from "react";

export default function useModal() {
  const [modal, setModal] = useState(null);

  const showModal = (title, desc, action, onConfirm) => {
    setModal({ title, desc, action, onConfirm });
  };

  const removeModal = () => {
    setModal(null);
  };

  return { modal, showModal, removeModal };
}