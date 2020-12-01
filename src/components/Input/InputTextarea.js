import React from "react";

const InputTextarea = ({
    label,
    name,
    value,
    rows,
    onChange,
    disabled,
    error = "",
}) => {
    return (
        <tr>
            <th>
                <label>※ {label}</label>
            </th>
            <td>
                <textarea
                    className={`form-control ${error && "is-invalid"}`}
                    rows={rows}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    disabled={disabled}
                ></textarea>
                {error && <div className="invalid-feedback">{error}</div>}
            </td>
        </tr>
    );
};
export default React.memo(InputTextarea);
