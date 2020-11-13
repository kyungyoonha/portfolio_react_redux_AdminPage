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
        width: "1000px",
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
    isOpen,
    modalStyle = defaultStyle,
    onClick,
    onClickClose,
    onAfterOpen,
    children,
}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            contentLabel="Minimal Modal Example"
            style={modalStyle}
            onRequestClose={onClickClose}
            onAfterOpen={onAfterOpen}
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
