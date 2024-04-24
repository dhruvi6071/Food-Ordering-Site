import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      dialog.current.showModal();
    }
    return () => modal.close();
  }, [open]);

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose(); // Call the onClose function if it's a function
    }
  };

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={handleClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
