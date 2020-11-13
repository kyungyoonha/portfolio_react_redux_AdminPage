import React from "react";
import useOpen from "../../Hooks/useOpen";
import TimePicker from "../Timepicker/TimePicker";
import "./inputTimeRange.scss";

const InputTimeRange = ({ label, value, onChange, errors = {}, disabled }) => {
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const handleChangeInput = (value) => {
        onChange({
            target: {
                name: "operatingtime",
                value,
            },
        });
    };

    const handleClickOpen = () => {
        handleChangeInput("");
        onClickOpen();
    };

    return (
        <tr>
            <th>
                <label className="col-form-label">※ {label}</label>
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
                    isOpen={isOpen}
                    onChange={handleChangeInput}
                    onClickClose={onClickClose}
                />
            </td>
        </tr>
    );
};

export default InputTimeRange;
