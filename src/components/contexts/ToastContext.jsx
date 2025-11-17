import { createContext } from "react";
import ToastMessage from "../ToastMessage/ToastMessage";
import useToastLogic from "@/hooks/useToastLogic";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const { toast, showToast, removeToast } = useToastLogic();

  return (
    <ToastContext.Provider value={{ showToast }}>
      {toast && (
        <ToastMessage
          message={toast.message}
          type={toast.type}
          onClose={removeToast}
        />
      )}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
