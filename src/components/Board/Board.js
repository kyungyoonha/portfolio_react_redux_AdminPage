import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import pageDataMap from "../../json/pageDataMap.json";
import ReactSelect from "../Select/ReactSelect";

export const Board = ({ pageId, data, selectedId, handleSelectedId }) => {
    const headerList = pageDataMap[pageId].headerList;

    const makeRowData2 = (item) => {
        return (
            <React.Fragment>
                <td>
                    <input
                        type="checkbox"
                        aria-label="Checkbox"
                        checked={item.idx === selectedId}
                        onChange={() => handleSelectedId(item.idx)}
                    />
                </td>
                {headerList.map((col) => {
                    if (
                        col.key === "purchase" ||
                        col.key === "question" ||
                        col.key === "drivercomplain" ||
                        col.key === "trabus"
                    ) {
                        return (
                            <td key={col.key}>
                                {item[col.key] ? item[col.key].length : 0}건
                            </td>
                        );
                    }
                    // area
                    else if (
                        col.key === "info" ||
                        col.key === "description" ||
                        col.key === "kr" ||
                        col.key === "en"
                    ) {
                        return (
                            <td key={col.key}>{item[col.key] ? "O" : "X"}</td>
                        );
                    }

                    return <td key={col.key}>{item[col.key]}</td>;
                })}
            </React.Fragment>
        );
    };

    return (
        <table className="table table-hover table-bordered board">
            <thead>
                <tr>
                    <th>#</th>
                    {headerList.map((item) => (
                        <th key={item.key}>{item.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => (
                    <tr key={idx} onClick={() => handleSelectedId(item.idx)}>
                        {makeRowData2(item)}
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

    const onChangePageCtrl = (e) => {
        const { name, value } = e.target;
        handleChangePageCtrl(name, value);
    };

    //
    const [nation, setNation] = useState("");
    const handleChange = (e) => {
        console.log(e);
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

export const BoardFooter = ({
    totalPage,
    currentPage,
    handleChangePageCtrl,
}) => {
    const onChangePageCtrl = (e) => {
        const { name, value } = e.target;
        handleChangePageCtrl(name, value);
    };
    return (
        <div>
            <div
                className=" float-left mr-3"
                style={{ width: "150px", marginBottom: "50px" }}
            >
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
            <div className="float-right">
                <ReactPaginate
                    initialPage={currentPage}
                    previousLabel={"이전"}
                    nextLabel={"다음"}
                    pageCount={totalPage}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={({ selected }) =>
                        handleChangePageCtrl("currentPage", selected)
                    }
                    containerClassName={"pagination"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
};
