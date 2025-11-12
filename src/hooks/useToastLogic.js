import { useState } from "react";

const useToastLogic = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const removeToast = () => {
    setToast(null);
  };
  return { toast, showToast, removeToast };
};

export default useToastLogic;
