import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ReactSelect from "../Form/ReactSelect";
import { changeDataFormat, getHeaderList } from "../../util/helperFunc";
import "./Board.scss";

export const BoardLayout = ({ children }) => {
    return <div className="boardLayout">{children}</div>;
};

export const Board = ({ pathname, data, selectedId, onClickRow }) => {
    const headers = getHeaderList(pathname);
    const makeRowData = (item) => {
        return (
            <React.Fragment>
                <td>
                    <input
                        type="checkbox"
                        aria-label="Checkbox"
                        checked={item.idx === selectedId}
                        onChange={() => onClickRow(item.idx)}
                    />
                </td>
                {headers.map((col) => (
                    <td key={col.key}>
                        {changeDataFormat(col.key, item[col.key])}
                    </td>
                ))}
            </React.Fragment>
        );
    };

    return (
        <table className="table table-hover table-bordered board">
            <thead>
                <tr>
                    <th>#</th>
                    {headers.map((item) => (
                        <th key={item.key}>{item.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => (
                    <tr key={idx} onClick={() => onClickRow(item.idx)}>
                        {makeRowData(item)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const BoardTop = ({ handleChangePageCtrl }) => {
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

    // const onChangePageCtrl = (e) => {
    //     const { name, value } = e.target;
    //     handleChangePageCtrl(name, value);
    // };

    //
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
