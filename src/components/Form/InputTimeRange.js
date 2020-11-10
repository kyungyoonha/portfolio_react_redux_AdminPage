import React, { useState } from "react";
import TimePicker from "../Timepicker/TimePicker";
import "./inputTimeRange.scss";

const InputTimeRange = ({ value, onChange, errors = {}, disabled }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleChangeInput = (value) => {
        onChange({
            target: {
                name: "operatingtime",
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
                <label className="col-form-label">※ 운영시간</label>
            </th>
            <td>
                <div className="input-group">
                    <input
                        name="operatingtime"
                        type="text"
                        value={value}
                        className={`form-control ${
                            errors["operatingtime"] && "is-invalid"
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
                            <i className="fas fa-clock "></i>
                        </button>
                    </div>
                    {errors["operatingtime"] && (
                        <div className="invalid-feedback">
                            {errors["operatingtime"]}
                        </div>
                    )}
                </div>

                <TimePicker
                    modalOpen={modalOpen}
                    handleCloseModal={() => setModalOpen(false)}
                    onChange={handleChangeInput}
                />
            </td>
        </tr>
    );
};

export default InputTimeRange;
