import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IProps {
  open: boolean;
  children: ReactNode;
}

const Modal = ({ open, children }: IProps) => {
  if (!open) return null; // Don't render anything if modal is closed

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex justify-center z-40 items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">{children}</div>
    </div>,
    document.getElementById("portal")!
  );
};

export default Modal;
