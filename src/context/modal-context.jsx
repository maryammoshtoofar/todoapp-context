import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [showModal, setShowModal] = useState({ isOpen: false, id: null });
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
