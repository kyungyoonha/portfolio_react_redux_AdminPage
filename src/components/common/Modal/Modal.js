import React from "react";
import ReactModal from "react-modal";

const modalStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "65%",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
    },
};

ReactModal.setAppElement("#root");

const Modal = ({ isModalOpen, handleModalClose, children }) => {
    return (
        <ReactModal
            isOpen={isModalOpen}
            contentLabel="Minimal Modal Example"
            style={modalStyle}
            onRequestClose={handleModalClose}
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
