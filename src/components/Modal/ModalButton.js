import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const ModalButton = ({ label, modalStyle, children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <React.Fragment>
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleModalOpen}
                >
                    {label}
                </button>
            </div>
            <ReactModal
                isOpen={true}
                contentLabel="Minimal Modal Example"
                style={modalStyle}
                onRequestClose={handleModalClose}
            >
                {children}
            </ReactModal>
        </React.Fragment>
    );
};

export default ModalButton;
