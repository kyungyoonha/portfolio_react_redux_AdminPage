import React, { useState } from "react";
import Map from "../Google/Map";

const InputAddress = ({
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

export default InputAddress;
