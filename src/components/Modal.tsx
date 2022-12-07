import React from "react";

type TModal = {
  children?: React.ReactNode;
};

const Modal = ({ children }: TModal) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
