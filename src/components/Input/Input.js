import React from "react";

const Input = ({
    label,
    name,
    value,
    type = "text",
    onChange,
    errors = {},
    placeholder = "",
    disabled,
    children,
}) => {
    return (
        <tr>
            <th>
                <label className="col-form-label">※ {label}</label>
            </th>
            <td>
                <div className="input-group">
                    <input
                        name={name}
                        type={type}
                        value={value}
                        className={`form-control ${
                            errors[name] && "is-invalid"
                        }`}
                        onChange={onChange}
                        placeholder={placeholder}
                        autoComplete="off"
                        disabled={disabled}
                    />
                    <div className="input-group-append">{children}</div>
                    {errors[name] && (
                        <div className="invalid-feedback">{errors[name]}</div>
                    )}
                </div>
            </td>
        </tr>
    );
};

export default Input;
