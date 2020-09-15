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
        <>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">※ {label}</label>
                <div className="col-sm-9">
                    <input
                        name={name}
                        type={type}
                        value={value}
                        className={`form-control form-control-sm ${
                            errors[name] && "is-invalid"
                        }`}
                        onChange={onChange}
                    />
                    {errors[name] && (
                        <div className="invalid-feedback">{errors[name]}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export const Select = ({ label, name, value, onChange, errors, options }) => {
    return (
        <>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                    {label && `※ ${label}`}
                </label>
                <div className="col-sm-9">
                    <select
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={`custom-select custom-select-sm ${
                            errors[name] && "is-invalid"
                        }`}
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
                </div>
            </div>
        </>
    );
};

export const RatioMulti = ({ label, name, value, onChange, options }) => {
    return (
        <>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">※ {label}</label>
                <div className="col-sm-9">
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
                </div>
            </div>
        </>
    );
};

export const RatioSingle = ({ label, name, value, onChange, options }) => {
    return (
        <>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">※ {label}</label>
                <div className="col-sm-9">
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
                </div>
            </div>
        </>
    );
};

export const Textarea = ({ label, name, value, rows, onChange }) => {
    return (
        <div className="form-group row">
            <label className="col-sm-3">※ {label}</label>
            <div className="col-sm-9">
                <textarea
                    className="form-control"
                    rows={rows}
                    value={value}
                    onChange={onChange}
                ></textarea>
            </div>
        </div>
    );
};

export const FileUpload = ({ label, name, value, onChange, ctg }) => {
    return (
        <div className="form-group row">
            <label className="col-sm-3">※ {label}</label>
            <div className="col-sm-9">
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
            </div>
        </div>
    );
};

export const FileuploadCard = ({ label, src, onChange, ctg }) => {
    const inputFileRef = useRef(null);

    const handleBtnClick = () => {
        inputFileRef.current.click();
    };
    return (
        <div className="card mb-5">
            <img
                src={src}
                className="card-img-top"
                alt={label}
                style={{
                    height: "300px",
                    objectFit: "contain",
                }}
            />
            <div className="card-footer">
                <input
                    ref={inputFileRef}
                    type="file"
                    hidden
                    onChange={(e) => onChange(e, ctg)}
                />
                <button
                    type="button"
                    className="btn btn-secondary btn-md btn-block"
                    onClick={handleBtnClick}
                >
                    {label} 등록
                </button>
            </div>
        </div>
    );
};
