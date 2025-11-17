import { useContext } from "react";
import { ModalContext } from "@/components/contexts/ModalContext";

export function useModal() {
  return useContext(ModalContext);
}
