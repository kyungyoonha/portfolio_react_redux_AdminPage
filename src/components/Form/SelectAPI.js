import React from "react";
import ReactSelect from "./ReactSelect";

const SelectAPI = ({
    label,
    searchId,
    value,
    searchItems,
    onChange,
    error,
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
                    error={error}
                />
                {error && <div className="errorMessage">{error}</div>}
            </td>
        </tr>
    );
};

export default SelectAPI;
