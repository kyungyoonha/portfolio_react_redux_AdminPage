import React from "react";
import headerObj from "./boardHeader.json";

const Board = ({ headerCtg, data }) => {
    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    {headerObj[headerCtg].map((item) => (
                        <th key={item} scope="col">
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => (
                    <tr key={idx}>
                        <th scope="row">{idx}</th>
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

export default Board;
