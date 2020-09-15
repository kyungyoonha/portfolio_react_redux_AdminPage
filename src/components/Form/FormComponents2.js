import React, { useRef } from "react";

export const Input = ({
    label,
    name,
    value,
    type = "text",
    onChange,
    errors,
}) => {
    return (
        <tr>
            <th>
                <label className="col-form-label">※ {label}</label>
            </th>

            <td>
                <input
                    name={name}
                    type={type}
                    value={value}
                    className={`form-control ${errors[name] && "is-invalid"}`}
                    onChange={onChange}
                    autoComplete="off"
                />
                {errors[name] && (
                    <div className="invalid-feedback">{errors[name]}</div>
                )}
            </td>
        </tr>
    );
};

export const Select = ({ label, name, value, onChange, errors, options }) => {
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

export const RatioMulti = ({ label, name, value, onChange, options }) => {
    return (
        <tr>
            <th>
                <label className="col-form-label">※ {label}</label>
            </th>

            <td>
                {options.map((option) => (
                    <div
                        key={option.value}
                        className="form-check form-check-inline"
                    >
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name={option.value}
                            value={option.value}
                            checked={value[option.value] || false}
                            onChange={(e) => onChange(e, name)}
                            id={name + option.value}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={name + option.value}
                        >
                            {option.title}
                        </label>
                    </div>
                ))}
            </td>
        </tr>
    );
};

export const RatioSingle = ({ label, name, value, onChange, options }) => {
    return (
        <tr>
            <th>
                <label className="col-form-label">※ {label}</label>
            </th>

            <td>
                {options.map((option) => (
                    <div
                        key={option.value}
                        className="form-check form-check-inline"
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                            id={name + option.value}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={name + option.value}
                        >
                            {option.title}
                        </label>
                    </div>
                ))}
            </td>
        </tr>
    );
};

export const Textarea = ({ label, name, value, rows, onChange }) => {
    return (
        <tr>
            <th>
                <label>※ {label}</label>
            </th>
            <td>
                <textarea
                    className="form-control"
                    rows={rows}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                ></textarea>
            </td>
        </tr>
    );
};

export const FileUpload = ({ label, name, value, onChange, ctg }) => {
    return (
        <tr>
            <th>
                <label>※ {label}</label>
            </th>
            <td>
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        name={name}
                        onChange={(e) => onChange(e, ctg)}
                    />
                    <label className="custom-file-label" data-browse={label}>
                        {value}
                    </label>
                </div>
            </td>
        </tr>
    );
};

export const FileuploadCard = ({ label, src, onChange, ctg }) => {
    const inputFileRef = useRef(null);

    const handleBtnClick = () => {
        inputFileRef.current.click();
    };
    return (
        <React.Fragment>
            <tr>
                <th rowspan="2" style={{ verticalAlign: "middle" }}>
                    <label>※ {label}</label>
                </th>
                <td className="text-center">
                    <img
                        src={src}
                        alt={label}
                        style={{
                            height: "300px",
                            maxWidth: "60%",
                            objectFit: "contain",
                        }}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <input
                        ref={inputFileRef}
                        type="file"
                        hidden
                        onChange={(e) => onChange(e, ctg)}
                    />
                    <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={handleBtnClick}
                    >
                        이미지 찾기
                    </button>
                </td>
            </tr>
        </React.Fragment>
    );
};
