import React from "react";
import useOpen from "../../Hooks/useOpen";
import ModalNumRange from "../Modal/ModalNumRange";

const InputNumRange = ({ value, onChange, errors = {}, disabled }) => {
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const handleChangeInput = (value) => {
        onChange({
            target: {
                name: "tourmember",
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
                    isOpen={isOpen}
                    onClickClose={onClickClose}
                    onChange={handleChangeInput}
                />
            </td>
        </tr>
    );
};

export default InputNumRange;
