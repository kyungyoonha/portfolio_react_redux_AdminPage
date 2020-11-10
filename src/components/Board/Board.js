import React from "react";
import { changeDataFormat, getHeaderList } from "../../util/helperFunc";

const Board = ({ pathname, data, selectedId, onClickRow }) => {
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

export default Board;
