import { useContext } from "react";
import { ToastContext } from "@/components/contexts/ToastContext";

export const useToast = () => useContext(ToastContext);
