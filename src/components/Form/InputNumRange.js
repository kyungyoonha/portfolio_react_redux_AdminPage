import React, { useState } from "react";
import ModalNumRange from "../Modal/ModalNumRange";

const InputNumRange = ({ value, onChange, errors = {}, disabled }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleChangeInput = (value) => {
        onChange({
            target: {
                name: "tourmember",
                value,
            },
        });
    };

    const handleClickOpen = () => {
        setModalOpen(true);
        handleChangeInput("");
    };

    return (
        <tr>
            <th>
                <label className="col-form-label">※ 투어 인원수</label>
            </th>
            <td>
                <div className="input-group">
                    <input
                        name="tourmember"
                        type="text"
                        value={value}
                        className={`form-control ${
                            errors["tourmember"] && "is-invalid"
                        }`}
                        onChange={onChange}
                        autoComplete="off"
                        disabled={disabled}
                        onClick={handleClickOpen}
                    />
                    <div
                        className="input-group-append"
                        onClick={handleClickOpen}
                    >
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                        >
                            <i className="fas fa-users "></i>
                        </button>
                    </div>
                    {errors["tourmember"] && (
                        <div className="invalid-feedback">
                            {errors["tourmember"]}
                        </div>
                    )}
                </div>

                <ModalNumRange
                    modalOpen={modalOpen}
                    handleCloseModal={() => setModalOpen(false)}
                    onChange={handleChangeInput}
                />
            </td>
        </tr>
    );
};

export default InputNumRange;
