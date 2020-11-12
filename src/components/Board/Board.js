import React from "react";
import { changeDataFormat, getHeaderList } from "../../util/helperFunc";
import BoardTop222 from "./BoardTop222";
import BoardFooter from "./BoardFooter";
import "./Board.scss";
import InfoTop from "./InfoTop";

const Board = ({
    pathname,
    data,
    selectedId,
    onClickRow,
    pages,
    pageCount,
    noStyle,
}) => {
    const headers = getHeaderList(pathname);
    const filters = headers.filter((item) => item.filter);
    const makeRowData = (item) => {
        return headers.map((col) => (
            <td key={col.key}>{changeDataFormat(col.key, item[col.key])}</td>
        ));
    };

    return (
        <div className={`boardLayout ${noStyle && "noStyle"}`}>
            <BoardTop222 pathname={pathname} filters={filters} />
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
            <BoardFooter pageCount={pageCount} pages={pages} />
        </div>
    );
};

export default Board;
