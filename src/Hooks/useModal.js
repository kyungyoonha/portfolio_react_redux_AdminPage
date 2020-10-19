import React, { useState, useCallback } from "react";

export default React.memo(() => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = useCallback(() => {
        setModalOpen(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setModalOpen(false);
    }, []);

    return [modalOpen, handleModalOpen, handleModalClose];
});
