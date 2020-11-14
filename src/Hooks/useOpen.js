import { useState, useCallback } from "react";

export default (initialValue) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const onClickOpen = useCallback(() => setIsOpen(true), []);
    const onClickClose = useCallback(() => setIsOpen(false), []);

    return [isOpen, onClickOpen, onClickClose];
};
