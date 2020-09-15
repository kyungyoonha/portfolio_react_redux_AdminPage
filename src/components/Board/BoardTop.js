import React, { useState } from "react";

const MainTableTop = ({ handleChangePageCtrl }) => {
    const [input, setInput] = useState("");

    const onChangeInput = (e) => {
        setInput(e.target.value);
    };

    const onClick = () => {
        handleChangePageCtrl("searchKeyword", input);
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            handleChangePageCtrl("searchKeyword", input);
        }
    };

    const onChangePageCtrl = (e) => {
        const { name, value } = e.target;
        handleChangePageCtrl(name, value);
    };

    return (
        <div>
            <div className=" float-left" style={{ width: "250px" }}>
                <select
                    name="countryCtg"
                    className="custom-select"
                    required
                    onChange={onChangePageCtrl}
                >
                    <option value="KOREA">대한민국</option>
                    <option value="THAILAND">태국</option>
                    <option value="VIETNAM">베트남</option>
                    <option value="EGYPT">이집트</option>
                    <option value="MYANMAR">미안마</option>
                </select>
            </div>
            <div className=" float-left ml-3" style={{ width: "150px" }}>
                <select
                    name="pageSize"
                    className="custom-select"
                    required
                    onChange={onChangePageCtrl}
                >
                    <option value="10">10건 노출</option>
                    <option value="15">15건 노출</option>
                    <option value="20">20건 노출</option>
                    <option value="30">30건 노출</option>
                    <option value="50">50건 노출</option>
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
                        onChange={onChangeInput}
                        onKeyPress={onKeyPress}
                        value={input}
                    />
                    <div className="input-group-prepend" onClick={onClick}>
                        <span className="input-group-text">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainTableTop;
