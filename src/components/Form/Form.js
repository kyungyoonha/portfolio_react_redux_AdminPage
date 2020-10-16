import React, { useRef, useState, useEffect } from "react";
import "./Form.scss";
import noImg from "../../img/no-img.jpg";
import ReactDatePicker from "react-datepicker";
import Map from "../Google/Map";
import ReactModal from "react-modal";
import moment from "moment";
import TimePicker from "../TimePicker/TimePicker";

export const FormLayout = ({ children }) => {
    return <form className="formLayout">{children}</form>;
};

export const FormSection = ({ size, title, children }) => {
    return (
        <React.Fragment>
            <div className={`formSection ${size}`}>
                <table className="table">
                    {title && (
                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th
                                    colSpan="2"
                                    style={{
                                        background: "#343a40",
                                        color: "white",
                                    }}
                                >
                                    [{title}]
                                </th>
                            </tr>
                        </thead>
                    )}
                    <tbody>{children}</tbody>
                </table>
            </div>
        </React.Fragment>
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
                <div className="input-group">
                    <input
                        name={name}
                        type={type}
                        value={value}
                        className={`form-control ${
                            errors[name] && "is-invalid"
                        }`}
                        onChange={onChange}
                        autoComplete="off"
                        disabled={disabled}
                    />
                    <div className="input-group-append">{children}</div>
                    {errors[name] && (
                        <div className="invalid-feedback">{errors[name]}</div>
                    )}
                </div>
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

export const Textarea = ({
    label,
    name,
    value,
    rows,
    onChange,
    disabled,
    errors = {},
}) => {
    return (
        <tr>
            <th>
                <label>※ {label}</label>
            </th>
            <td>
                <textarea
                    className={`form-control ${errors[name] && "is-invalid"}`}
                    rows={rows}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    disabled={disabled}
                ></textarea>
                {errors[name] && (
                    <div className="invalid-feedback">{errors[name]}</div>
                )}
            </td>
        </tr>
    );
};

export const FileUpload = ({ label, name, value, onChange, ctg, disabled }) => {
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
                        disabled={disabled}
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
                        onClick={() => inputFileRef.current.click()}
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

export const FileSingle2 = ({
    label,
    name,
    filename,
    path,
    handleChangeFile,
}) => {
    const inputFileRef = useRef(null);

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
                        src={path || noImg}
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
                        onChange={handleChangeFile}
                    />

                    <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={() => inputFileRef.current.click()}
                        style={{ marginRight: "15px" }}
                    >
                        이미지 찾기
                    </button>
                    {filename}
                </td>
            </tr>
        </React.Fragment>
    );
};

export const InputDate = ({ label, name, value, onChange, errors }) => {
    const handleChangeDate = (date) => {
        onChange({
            target: { name, value: date },
        });
    };
    return (
        <tr>
            <th>
                <label className="col-form-label">
                    {label && `※ ${label}`}
                </label>
            </th>

            <td className="">
                <div className={`input-group ${errors[name] && "is-invalid"}`}>
                    <ReactDatePicker
                        locale="ko"
                        selected={value}
                        className={`custom-select ${
                            errors[name] && "is-invalid"
                        }`}
                        onChange={handleChangeDate}
                        dateFormat="yyyy-MM-dd"
                        peekNextMonth
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                    />
                </div>
                {errors[name] && (
                    <div className="invalid-feedback">{errors[name]}</div>
                )}
            </td>
        </tr>
    );
};

export const InputAddress = ({
    label,
    name,
    value,
    type = "text",
    onChange,
    setInputs,
    errors = {},
    disabled,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleChangeInput = (address) => {
        const { addr, lat, lng } = address;
        setInputs((state) => ({
            ...state,
            address: addr,
            lat,
            lng,
        }));
    };

    const handleClickOpen = () => {
        setModalOpen(true);
        handleChangeInput({ addr: "", lat: "", lng: "" });
    };

    return (
        <tr>
            <th>
                <label className="col-form-label">※ {label}</label>
            </th>
            <td>
                <div className="input-group">
                    <input
                        name={name}
                        type={type}
                        value={value}
                        className={`form-control ${
                            errors[name] && "is-invalid"
                        }`}
                        onChange={onChange}
                        autoComplete="off"
                        disabled={disabled}
                        onClick={handleClickOpen}
                    />
                    <div
                        className="input-group-append"
                        onClick={handleClickOpen}
                    >
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                        >
                            <i className="fas fa-map-marked-alt "></i>
                        </button>
                    </div>
                    {errors[name] && (
                        <div className="invalid-feedback">{errors[name]}</div>
                    )}
                </div>

                <Map
                    id="myMap"
                    modalOpen={modalOpen}
                    handleCloseModal={() => setModalOpen(false)}
                    onChange={handleChangeInput}
                    options={{
                        center: {
                            lat: 37.4967345,
                            lng: 126.9779135,
                        },
                        zoom: 11,
                        mapTypeControl: false,
                    }}
                />
            </td>
        </tr>
    );
};

export const InputTimeRange = ({
    value,

    onChange,
    errors = {},
    disabled,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleChangeInput = (value) => {
        onChange({
            target: {
                name: "operatingtime",
                value,
            },
        });
    };

    const handleClickOpen = () => {
        setModalOpen(true);
        handleChangeInput("");
    };

    return (
        <tr>
            <th>
                <label className="col-form-label">※ 운영시간</label>
            </th>
            <td>
                <div className="input-group">
                    <input
                        name="operatingtime"
                        type="text"
                        value={value}
                        className={`form-control ${
                            errors["operatingtime"] && "is-invalid"
                        }`}
                        onChange={onChange}
                        autoComplete="off"
                        disabled={disabled}
                        onClick={handleClickOpen}
                    />
                    <div
                        className="input-group-append"
                        onClick={handleClickOpen}
                    >
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                        >
                            <i className="fas fa-clock "></i>
                        </button>
                    </div>
                    {errors["operatingtime"] && (
                        <div className="invalid-feedback">
                            {errors["operatingtime"]}
                        </div>
                    )}
                </div>

                <TimePicker
                    modalOpen={modalOpen}
                    handleCloseModal={() => setModalOpen(false)}
                    onChange={handleChangeInput}
                />
            </td>
        </tr>
    );
};
