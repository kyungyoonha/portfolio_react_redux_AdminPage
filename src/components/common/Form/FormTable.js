import React from "react";
import styled from "styled-components";

const Table = styled.table`
    margin: 0 auto;
    thead th {
        height: 50px;
        line-height: 50px;
        background: #303c54;
        color: white;
        font-size: 1.2rem;
        text-align: center;
    }

    tbody th {
        background: #f8f8f8;
    }
`;

const FormTable = ({ size, children }) => {
    const num = size === "half" ? "6" : "12";

    return (
        <div className={`col-md-${num}`}>
            <Table className="table table-bordered">
                <tbody>{children}</tbody>
            </Table>
        </div>
    );
};

export default FormTable;
