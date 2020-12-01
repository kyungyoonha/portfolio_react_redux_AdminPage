import React from "react";
import useOpen from "../../Hooks/useOpen";
import ModalTimePicker from "../Modal/ModalTimePicker";
import "./inputTimeRange.scss";

const InputTimeRange = ({
    label,
    name,
    value,
    onChange,
    error = "",
    disabled,
}) => {
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const handleChangeInput = (newValue) => {
        onChange({
            target: {
                name: "operatingtime",
                value: newValue,
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
                        name={name}
                        type="text"
                        value={value}
                        className={`form-control ${error && "is-invalid"}`}
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
                    {error && <div className="invalid-feedback">{error}</div>}
                </div>

                <ModalTimePicker
                    isOpen={isOpen}
                    onChange={handleChangeInput}
                    onClickClose={onClickClose}
                />
            </td>
        </tr>
    );
};

export default React.memo(InputTimeRange);
