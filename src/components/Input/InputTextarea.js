import React from "react";

const InputTextarea = ({
    label,
    name,
    value,
    rows,
    onChange,
    disabled,
    errors = {},
}) => {
    return (
        <tr>
            <th>
                <label>※ {label}</label>
            </th>
            <td>
                <textarea
                    className={`form-control ${errors[name] && "is-invalid"}`}
                    rows={rows}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    disabled={disabled}
                ></textarea>
                {errors[name] && (
                    <div className="invalid-feedback">{errors[name]}</div>
                )}
            </td>
        </tr>
    );
};
export default InputTextarea;
