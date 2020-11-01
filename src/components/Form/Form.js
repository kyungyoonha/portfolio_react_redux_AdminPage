import React, { useRef, useState } from "react";
import "./Form.scss";
import noImg from "../../img/no-img.jpg";
import ReactDatePicker from "react-datepicker";
import Map from "../Google/Map";
//import ReactModal from "react-modal";
import TimePicker from "../TimePicker/TimePicker";
import ModalNumRange from "../Modal/ModalNumRange";
import ReactSelect from "../Select/ReactSelect";

export const FormLayout = ({ children }) => {
    return <form className="formLayout">{children}</form>;
};

export const FormSection = ({ full, center, title, scroll, children }) => {
    return (
        <React.Fragment>
            <div
                className={`formSection ${full && "full"} ${
                    center && "center"
                } ${scroll && "scroll"}`}
            >
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
    placeholder = "",
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
                        placeholder={placeholder}
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

export const SelectAPI = ({
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

export const RadioMulti = ({ label, name, value, onChange, max, options }) => {
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

export const RadioSingle = ({
    label,
    name,
    value,
    onChange,
    options,
    disabled,
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
                            disabled={disabled}
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

export const RadioTypeCheck = ({
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
                <label className="col-form-label">※{" " + label}</label>
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

const filetypeObj = {
    image: `image/*`,
    audio: "audio/*",
    video: "video/*",
    all: "/*",
};
export const File = ({
    label,
    name,
    filename,
    filepath,
    handleChangeFile,
    filetype,
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
                        src={filepath || noImg}
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
                        onChange={(e) => handleChangeFile(e, filetype)}
                        accept={filetypeObj[filetype]}
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
export const File222 = ({ label, name, value, onChange, filetype }) => {
    const inputFileRef = useRef(null);
    const imageUrl = value ? window.URL.createObjectURL(value) : noImg;
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
                        src={imageUrl}
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
                        onChange={onChange}
                        accept={filetypeObj[filetype]}
                    />

                    <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={() => inputFileRef.current.click()}
                        style={{ marginRight: "15px" }}
                    >
                        이미지 찾기
                    </button>
                    {value.name}
                </td>
            </tr>
        </React.Fragment>
    );
};

export const InputFile = ({
    label,
    name,
    filename,
    handleChangeFile,
    filetype,
}) => {
    return (
        <tr>
            <th>
                <label>※ {label}</label>
            </th>
            <td>
                <div className="custom-file">
                    <input
                        name={name}
                        type="file"
                        className="custom-file-input"
                        onChange={(e) => handleChangeFile(e, filetype)}
                        accept={filetypeObj[filetype]}
                    />
                    <label className="custom-file-label" data-browse={label}>
                        {filename}
                    </label>
                </div>
            </td>
        </tr>
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

export const InputTime = ({ label, name, value, onChange, errors }) => {
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
                        dateFormat="h:mm aa"
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
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
    errors = {},
    disabled,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleChangeInput = (address) => {
        const { addr, lat, lng } = address;
        onChange({ target: { name: "address", value: addr } });
        onChange({ target: { name: "lat", value: lat } });
        onChange({ target: { name: "lng", value: lng } });
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

export const InputTimeRange = ({ value, onChange, errors = {}, disabled }) => {
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

export const FormAudioList = ({ data, children, handleDeleteAudio }) => {
    return (
        <tr className="formAudioList">
            <th>※ 오디오 리스트 {children}</th>
            <td>
                <div className="formAudioList__container">
                    {data.map((item, idx) => (
                        <div key={idx} className="formAudioList__item">
                            {idx + 1 + " " + item.scripttitle}
                            <span className="badge badge-success ml-1 mr-1">
                                {item.audiolanguage}
                            </span>
                            {item.mainaudioYN === "Y" && (
                                <span className="badge badge-primary ml-1 mr-1">
                                    대표
                                </span>
                            )}
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm float-right mt-1"
                                onClick={() => handleDeleteAudio(idx)}
                            >
                                삭제
                            </button>
                        </div>
                    ))}
                </div>
            </td>
        </tr>
    );
};

export const FormImageList = ({ images, children }) => {
    return (
        <React.Fragment>
            <tr className="formImageList__mainImg">
                <th rowSpan="3" className="formImageList__title">
                    <label className="col-form-label">※ 사진 관리</label>
                </th>
                <td colSpan="3">
                    <h3 className="formImageList__label">
                        <span className="badge badge-danger">대표사진</span>
                    </h3>
                    <img
                        src={
                            images[0]
                                ? URL.createObjectURL(images[0].filepath)
                                : noImg
                        }
                        alt="대표사진"
                    />
                </td>
            </tr>
            <tr className="formImageList__subImg">
                {[...new Array(4)].map((_, idx) => {
                    return idx === 0 ? null : (
                        <td key={idx}>
                            <img
                                src={
                                    images[idx]
                                        ? URL.createObjectURL(
                                              images[idx].filepath
                                          )
                                        : noImg
                                }
                                alt="대표사진"
                            />
                        </td>
                    );
                })}
            </tr>
            <tr>
                <td colSpan="3">{children}</td>
            </tr>
        </React.Fragment>
    );
};

export const InputNumRange = ({ value, onChange, errors = {}, disabled }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleChangeInput = (value) => {
        onChange({
            target: {
                name: "tourmember",
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
                <label className="col-form-label">※ 투어 인원수</label>
            </th>
            <td>
                <div className="input-group">
                    <input
                        name="tourmember"
                        type="text"
                        value={value}
                        className={`form-control ${
                            errors["tourmember"] && "is-invalid"
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
                            <i className="fas fa-users "></i>
                        </button>
                    </div>
                    {errors["tourmember"] && (
                        <div className="invalid-feedback">
                            {errors["tourmember"]}
                        </div>
                    )}
                </div>

                <ModalNumRange
                    modalOpen={modalOpen}
                    handleCloseModal={() => setModalOpen(false)}
                    onChange={handleChangeInput}
                />
            </td>
        </tr>
    );
};

// 모달 검색 후 추가
// 테이블 형태로 보여줌
export const Purchasetour = ({ purchasetour, errors = {}, children }) => {
    return (
        <React.Fragment>
            {purchasetour.map((item, idx) => (
                <Input
                    key={item.idx}
                    label={`${idx + 1}번째 관광지명`}
                    name="tourname"
                    value={item.tourname}
                    onChange={() => {}}
                    errors={errors}
                />
            ))}
            {/* {!purchasetour.length && (
                <Input
                    label="1번째 관광지명"
                    placeholder="관광지를 추가해주세요"
                    disabled
                />
            )} */}
            <tr>
                <td colSpan="2">{children}</td>
            </tr>
        </React.Fragment>
    );
};

export const Purchasecode = ({ purchasecode, errors = {}, children }) => {
    return (
        <React.Fragment>
            <tr>
                <td colSpan="2">{children}</td>
            </tr>
            <Input
                label="구매코드"
                name="idx"
                value={purchasecode.idx}
                errors={errors}
                disabled={true}
            />
            <Input
                label="구매일자"
                name="purchasedate"
                value={purchasecode.purchasedate}
                errors={errors}
                disabled={true}
            />
            <Select
                label="구매방식"
                name="purchasetype"
                value={purchasecode.purchasetype}
                errors={errors}
                disabled={true}
                options={[
                    { value: "1", title: "직접구매" },
                    { value: "3", title: "관광지 구매" },
                ]}
            />
            <Input
                label="구매코드번호"
                name="codenumber"
                value={purchasecode.codenumber}
                errors={errors}
                disabled={true}
            />
            <Input
                label="가격"
                name="price"
                value={purchasecode.price}
                errors={errors}
                disabled={true}
            />
            <Input
                label="구매자id"
                name="purchaseuser"
                value={purchasecode.purchaseuser}
                errors={errors}
                disabled={true}
            />
        </React.Fragment>
    );
};
