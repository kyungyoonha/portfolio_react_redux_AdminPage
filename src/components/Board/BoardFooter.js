import React from "react";
import ReactPaginate from "react-paginate";

const BoardFooter = ({ totalPage, currentPage, handleChangePageCtrl }) => {
    const onChangePageCtrl = (e) => {
        const { name, value } = e.target;
        handleChangePageCtrl(name, value);
    };
    return (
        <div>
            <div className=" float-left mr-3" style={{ width: "150px" }}>
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

export default BoardFooter;
