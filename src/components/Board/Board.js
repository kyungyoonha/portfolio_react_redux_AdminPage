import React from "react";

const Board = ({ headerList, data, selectedItem, handleSelectedItem }) => {
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

export default Board;
