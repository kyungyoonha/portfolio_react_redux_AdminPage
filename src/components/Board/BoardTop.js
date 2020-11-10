import React, { useState } from "react";
import ReactSelect from "../Form/ReactSelect";

const BoardTop = ({ handleChangePageCtrl }) => {
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

    const [nation, setNation] = useState("");
    const handleChange = (e) => {
        console.log(e);
        setNation("");
    };

    return (
        <div>
            <div className=" float-left" style={{ width: "250px" }}>
                <ReactSelect
                    value={nation}
                    onChange={handleChange}
                    searchId="nationcode"
                    searchItems={["koreanname", "code2"]}
                    placeholder="국가 코드"
                />
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

export default BoardTop;
