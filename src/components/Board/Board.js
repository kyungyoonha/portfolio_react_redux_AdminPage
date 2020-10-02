import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export const Board = ({
    headerList,
    data,
    selectedItem,
    handleSelectedItem,
}) => {
    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    {headerList.map((item) => (
                        <th key={item} scope="col">
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => (
                    <tr key={idx} onClick={() => handleSelectedItem(item)}>
                        <td>
                            <input
                                type="checkbox"
                                aria-label="Checkbox"
                                checked={item.id === selectedItem.id}
                                onChange={() => handleSelectedItem(item)}
                            />
                        </td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.country}</td>
                        <td>{item.history.length}건</td>
                        <td>{item.cs.length} 건</td>
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
