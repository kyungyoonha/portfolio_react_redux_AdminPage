import React from "react";
const InputSelect = ({
    label,
    name,
    value,
    onChange,
    error = "",
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
                    className={`custom-select ${error && "is-invalid"}`}
                    disabled={disabled}
                >
                    {options.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.title}
                        </option>
                    ))}
                </select>
                {error && <div className="invalid-feedback">{error}</div>}
            </td>
        </tr>
    );
};
export default React.memo(InputSelect);
