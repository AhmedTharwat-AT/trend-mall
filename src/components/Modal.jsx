import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useOutsideClicks from "../hooks/useOutsideClicks";

const ModalContext = createContext();

function Modal({ children }) {
  const [open, setOpen] = useState("");
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ modalName, children }) {
  const { setOpen } = useContext(ModalContext);

  function openModal() {
    setOpen(modalName);
  }

  return cloneElement(children, { onClick: openModal });
}

function Window({ modalName, children }) {
  const { open, setOpen } = useContext(ModalContext);
  const { ref } = useOutsideClicks(() => setOpen(""));

  if (open != modalName) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-gray-500 opacity-40 "></div>
      <div
        ref={ref}
        className="relative min-h-[100px]  cursor-pointer rounded-md bg-white px-7 pb-7 pt-14 sm:px-16"
      >
        <span
          onClick={() => setOpen("")}
          className="absolute left-3 top-1 text-4xl"
        >
          &times;
        </span>
        <div>{cloneElement(children, { onCloseModal: () => setOpen("") })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
