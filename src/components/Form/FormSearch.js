import React from "react";

const FormSearch = ({ value, onChange, onClick }) => {
    return (
        <tr>
            <td className="input-group">
                <input
                    type="input"
                    value={value}
                    className="form-control"
                    onChange={onChange}
                />
                <div className="input-group-append" onClick={onClick}>
                    <button className="btn btn-outline-primary" type="button">
                        검색 <i className="fas fa-map-search "></i>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default FormSearch;
