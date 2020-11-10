import React from "react";
const Select = ({
    label,
    name,
    value,
    onChange,
    errors = {},
    disabled,
    options,
}) => {
    return (
        <tr>
            <th>
                <label className="col-form-label">
                    {label && `※ ${label}`}
                </label>
            </th>
            <td>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`custom-select ${errors[name] && "is-invalid"}`}
                    disabled={disabled}
                >
                    {options.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.title}
                        </option>
                    ))}
                </select>
                {errors[name] && (
                    <div className="invalid-feedback">{errors[name]}</div>
                )}
            </td>
        </tr>
    );
};
export default Select;
