import React from "react";
import ReactSelect from "./ReactSelect";

const SelectAPI = ({
    label,
    searchId,
    value,
    searchItems,
    onChange,
    errors = {},
    disabled,
}) => {
    return (
        <tr>
            <th>
                <label className="col-form-label">
                    {label && `※ ${label}`}
                </label>
            </th>
            <td>
                <ReactSelect
                    value={value}
                    searchId={searchId}
                    searchItems={searchItems}
                    onChange={onChange}
                    placeholder={label}
                    disabled={disabled}
                />
                {errors[searchId] && (
                    <div className="errorMessage">{errors[searchId]}</div>
                )}
            </td>
        </tr>
    );
};

export default SelectAPI;
