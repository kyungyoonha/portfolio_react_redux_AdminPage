import React from "react";
const InputRatioMulti = ({ label, name, value, onChange, max, options }) => {
    const handleChange = (e) => {
        const { checked } = e.target;
        const length = Object.keys(value).filter((key) => value[key]).length;
        if (length >= max && checked) {
            alert("3개까지만 선택 가능합니다");
        } else {
            onChange(e);
        }
    };

    return (
        <tr>
            <th>
                <label className="col-form-label">※ {label}</label>
            </th>

            <td>
                {options.map((option, i) => (
                    <div key={i} className="form-check form-check-inline mr-5">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name={name}
                            value={option.key}
                            checked={value[option.key] || false}
                            onChange={handleChange}
                            id={name + option.key}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={name + option.key}
                        >
                            {option.title}
                        </label>
                    </div>
                ))}
            </td>
        </tr>
    );
};

export default React.memo(InputRatioMulti);
