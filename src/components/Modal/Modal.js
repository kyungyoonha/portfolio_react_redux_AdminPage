import React from "react";
import ReactModal from "react-modal";

const defaultStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        marginBottom: "50px",
        transform: "translate(-50%, -50%)",
        width: "65%",
        height: "800px",
        overflowY: "scroll",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "5",
    },
};

ReactModal.setAppElement("#root");

const Modal = ({
    isModalOpen,
    modalStyle = defaultStyle,
    handleModalClose,
    children,
}) => {
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
