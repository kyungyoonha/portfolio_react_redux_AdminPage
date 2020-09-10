import React, { useState } from "react";

const MemberTableTop = ({
    handleCountryCtg,
    handlePageSize,
    handleSearchKeyword,
}) => {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    const onClick = () => {
        handleSearchKeyword(input);
        setInput("");
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearchKeyword(input);
            setInput("");
        }
    };

    return (
        <div>
            <div className=" float-left" style={{ width: "250px" }}>
                <select
                    className="custom-select"
                    id="validationCustom04"
                    required
                >
                    <option value="">국적별 분류</option>
                    <option value="1">...</option>
                </select>
            </div>
            <div className=" float-left ml-3" style={{ width: "150px" }}>
                <select
                    className="custom-select"
                    id="validationCustom04"
                    required
                >
                    <option value="">8건 노출</option>
                    <option value="1">...</option>
                </select>
            </div>
            <div>
                <div
                    className="input-group mb-3 float-right"
                    style={{ width: "300px" }}
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                        value={input}
                    />
                    <div className="input-group-prepend" onClick={onClick}>
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberTableTop;
