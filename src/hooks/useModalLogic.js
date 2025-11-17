import { useState } from "react";

export default function useModalLogic() {
  const [modal, setModal] = useState(null);

  const showModal = (title, desc, action, onConfirm) => {
    setModal({ title, desc, action, onConfirm });
  };

  const removeModal = () => {
    setModal(null);
  };

  return { modal, showModal, removeModal };
}