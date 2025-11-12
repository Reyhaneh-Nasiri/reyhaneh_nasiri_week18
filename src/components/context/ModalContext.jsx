import useModal from "@/hooks/useModal";
import Modal from "../Modal/Modal";
import { createContext } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const { modal, showModal, removeModal } = useModal();
  return (
    <ModalContext.Provider value={{ showModal }}>
      {modal && (
        <Modal
          title={modal.title}
          desc={modal.desc}
          action={modal.action}
          removeModal={removeModal}
          onConfirm={modal.onConfirm}
        />
      )}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
