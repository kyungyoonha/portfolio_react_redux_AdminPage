import React from "react";
import ReactModal from "react-modal";
import "./Modal.scss";

const defaultStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        marginBottom: "50px",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "700px",
        overflowY: "scroll",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "5",
    },
};

ReactModal.setAppElement("#root");

const Modal = ({
    title,
    isModalOpen,
    modalStyle = defaultStyle,
    onClick,
    onClickClose,
    children,
}) => {
    return (
        <ReactModal
            isOpen={isModalOpen}
            contentLabel="Minimal Modal Example"
            style={modalStyle}
            onRequestClose={onClickClose}
        >
            <div className="modal__title">
                <h4>{title}</h4>
                <div>
                    <button
                        className="btn btn-secondary mr-1"
                        type="button"
                        onClick={onClickClose}
                    >
                        닫기
                    </button>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={onClick}
                    >
                        사용하기
                    </button>
                </div>
            </div>
            {children}
        </ReactModal>
    );
};

export default Modal;
