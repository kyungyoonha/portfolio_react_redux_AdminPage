import React from "react";
import { changeDataFormat, getHeaderList } from "../../util/helperFunc";
import BoardTop from "./BoardTop";
import BoardFooter from "./BoardFooter";
import "./Board.scss";

const Board = ({
    searchOnly,
    data,
    pages,
    pageCount,
    pathname,
    selectedId,
    onClickRow,
    onClickSearch,
}) => {
    const headers = getHeaderList(pathname);
    const filters = headers.filter((item) => item.filter);
    const makeRowData = (item) => {
        return headers.map((col) => (
            <td key={col.key}>{changeDataFormat(col.key, item[col.key])}</td>
        ));
    };
    console.log(data);
    return (
        <div className={`boardLayout ${searchOnly && "noStyle"}`}>
            {!searchOnly && (
                <BoardTop
                    pathname={pathname}
                    filters={filters}
                    onClick={onClickSearch}
                />
            )}
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
                            <td>
                                <input
                                    type="checkbox"
                                    aria-label="Checkbox"
                                    checked={item.idx === selectedId}
                                    onChange={() => onClickRow(item.idx)}
                                />
                            </td>
                            {makeRowData(item)}
                        </tr>
                    ))}
                </tbody>
            </table>
            {!searchOnly && <BoardFooter pageCount={pageCount} pages={pages} />}
        </div>
    );
};

export default Board;
