import useToast from "@/hooks/useToast";
import { createContext } from "react";
import ToastMessage from "../ToastMessage/ToastMessage";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const { toast, showToast, removeToast } = useToast();

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
