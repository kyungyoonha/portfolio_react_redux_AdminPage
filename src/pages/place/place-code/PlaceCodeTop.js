import React, { useState } from "react";

const PlaceCodeTop = ({ handleChangePageCtrl }) => {
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
            <div className=" float-left mr-3" style={{ width: "250px" }}>
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
            <div className=" float-left mr-3" style={{ width: "250px" }}>
                <select
                    name="state"
                    className="custom-select"
                    required
                    onChange={onChangePageCtrl}
                >
                    <option value="state1">주/도1</option>
                    <option value="state2">주/도2</option>
                    <option value="state3">주/도3</option>
                    <option value="state4">주/도4</option>
                    <option value="state5">주/도5</option>
                </select>
            </div>
            <div className=" float-left mr-3" style={{ width: "250px" }}>
                <select
                    name="city"
                    className="custom-select"
                    required
                    onChange={onChangePageCtrl}
                >
                    <option value="city1">시1</option>
                    <option value="city2">시2</option>
                    <option value="city3">시3</option>
                    <option value="city4">시4</option>
                    <option value="city5">시5</option>
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

export default PlaceCodeTop;
