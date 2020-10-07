import React, { useRef, useState } from "react";
import "./Form.scss";
import noImg from "../../img/no-img.jpg";
import { optionsCountry } from "../../util/options";

export const FormLayout = ({ children }) => {
    return <form className="formLayout">{children}</form>;
};

export const FormSection = ({ size, children }) => {
    return (
        <div className={`formSection ${size}`}>
            <table className="table">
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};

export const Input = ({
    label,
    name,
    value,
    type = "text",
    onChange,
    errors = {},
    disabled,
    children,
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
                    style={{ flex: 1, marginRight: "10px" }}
                    disabled={disabled}
                />
                {children}

                {errors[name] && (
                    <div className="invalid-feedback">{errors[name]}</div>
                )}
            </td>
        </tr>
    );
};

export const Select = ({
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

export const SelectMultiCustom = ({ inputs, onChange, options }) => {
    return (
        <tr className="selectMultiCustom">
            <th>
                <label className="col-form-label">※ 인원</label>
            </th>
            <td>
                <label className="col-form-label">최소:</label>
                <select
                    name="guestNumMin"
                    value={inputs.guestNumMin}
                    onChange={onChange}
                    className="custom-select"
                >
                    {options.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.title}
                        </option>
                    ))}
                </select>
                <label className="col-form-label">최대:</label>
                <select
                    name="guestNumMax"
                    value={inputs.guestNumMax}
                    onChange={onChange}
                    className="custom-select"
                >
                    {options.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </td>
        </tr>
    );
};

export const RatioMulti = ({ label, name, value, onChange, max, options }) => {
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
                            name={option.key}
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

export const RatioSingle = ({
    label,
    name,
    value,
    onChange,
    options,
    children,
}) => {
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
                <div>{children && children}</div>
            </td>
        </tr>
    );
};

export const RatioTypeCheck = ({
    label,
    labelLeft,
    labelRight,
    name,
    value,
    onChange,
}) => {
    return (
        <tr>
            <th>
                <label className="col-form-label">{label}</label>
            </th>

            <td className="d-flex justify-content-between">
                <label className="col-form-label">{labelLeft}</label>
                {[...new Array(7)].map((_, i) => (
                    <div key={i} className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            value={i - 3}
                            checked={value === String(i - 3)}
                            onChange={onChange}
                            id={name + i}
                        />
                        <label className="form-check-label" htmlFor={name + i}>
                            {i - 3}
                        </label>
                    </div>
                ))}
                <label className="col-form-label">※ {labelRight}</label>
            </td>
        </tr>
    );
};

export const Textarea = ({ label, name, value, rows, onChange, disabled }) => {
    return (
        <tr>
            <th>
                <label>※ {label}</label>
            </th>
            <td>
                <textarea
                    className="form-control"
                    rows={rows}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    disabled={disabled}
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

export const FileUploadMany = ({
    label,
    name,
    files,
    onChange,
    multiple,
    disabled,
}) => {
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
                        onChange={onChange}
                        multiple={multiple}
                        disabled={disabled}
                    />
                    <label className="custom-file-label" data-browse={label}>
                        {files.map((file) => file.name)}
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
                <th rowSpan="2" style={{ verticalAlign: "middle" }}>
                    <label>※ {label}</label>
                </th>
                <td className="text-center">
                    <img
                        src={src || noImg}
                        alt={label}
                        style={{
                            height: "300px",
                            width: "100%",
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

export const FileSingle = ({ label, name, file, onChange }) => {
    const inputFileRef = useRef(null);

    const handleBtnClick = () => {
        inputFileRef.current.click();
    };

    return (
        <React.Fragment>
            <tr>
                <th
                    rowSpan="2"
                    style={{
                        verticalAlign: "middle",
                        borderBottom: "1px solid #dee2e6",
                    }}
                >
                    <label>※ {label}</label>
                </th>
                <td className="text-center">
                    <img
                        src={file.src || noImg}
                        alt={label}
                        style={{
                            height: "300px",
                            width: "100%",
                            objectFit: "contain",
                        }}
                    />
                </td>
            </tr>

            <tr style={{ borderBottom: "1px solid #dee2e6" }}>
                <td>
                    <input
                        ref={inputFileRef}
                        name={name}
                        type="file"
                        hidden
                        onChange={(e) => onChange(e)}
                    />

                    <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={handleBtnClick}
                        style={{ marginRight: "15px" }}
                    >
                        이미지 찾기
                    </button>
                    {file.filename}
                </td>
            </tr>
        </React.Fragment>
    );
};
