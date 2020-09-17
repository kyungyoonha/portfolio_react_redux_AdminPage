import React, { useRef } from "react";

export const Input = ({
    label,
    name,
    value,
    type = "text",
    onChange,
    errors,
    children,
}) => {
    // errors["placeCode"] = "Fewfew";
    return (
        <tr>
            <th>
                <label className="col-form-label">※ {label}</label>
            </th>

            <td style={{ display: "flex" }}>
                <input
                    name={name}
                    type={type}
                    value={value}
                    className={`form-control ${errors[name] && "is-invalid"}`}
                    onChange={onChange}
                    autoComplete="off"
                    style={{ flex: 1, marginRight: "10px" }}
                />
                {children}

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
                        className="form-check form-check-inline mr-5"
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
                <th rowSpan="2" style={{ verticalAlign: "middle" }}>
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

export const FileuploadManyCard = ({ label, src, onChange, ctg }) => {
    const inputFileRef = useRef(null);

    const handleBtnClick = () => {
        inputFileRef.current.click();
    };
    return (
        <React.Fragment>
            <tr>
                <th
                    rowSpan="3"
                    style={{ verticalAlign: "middle", width: "20%" }}
                >
                    <label>※ {label}</label>
                </th>
                <td colSpan="3" className="text-center">
                    <img
                        src={src}
                        alt={label}
                        style={{
                            height: "250px",
                            maxWidth: "60%",
                            objectFit: "contain",
                        }}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <img
                        src={src}
                        alt={label}
                        style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "contain",
                        }}
                    />
                </td>
                <td>
                    <img
                        src={src}
                        alt={label}
                        style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "contain",
                        }}
                    />
                </td>
                <td>
                    <img
                        src={src}
                        alt={label}
                        style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "contain",
                        }}
                    />
                </td>
            </tr>
            <tr>
                <td colSpan="3">
                    <input
                        ref={inputFileRef}
                        type="file"
                        hidden
                        onChange={(e) => onChange(e, ctg)}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-md btn-block"
                        onClick={handleBtnClick}
                    >
                        사진 편집하기
                    </button>
                </td>
            </tr>
        </React.Fragment>
    );
};
