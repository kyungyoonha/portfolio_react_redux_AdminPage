import React from "react";
import "./FormTable.scss";

const FormTable = ({ size, children }) => {
    const num = size === "half" ? "6" : "12";

    return (
        <div className={`col-md-${num}`}>
            <table className="formtable__table table table-bordered">
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};

export default FormTable;
