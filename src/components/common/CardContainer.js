import React from "react";
import styled from "styled-components";

const Card = styled.div`
    height: 400px;
`;

const CardContainer = ({ children }) => {
    return (
        <div className="col-md-6 col-sm-6 col-xs-12">
            <Card className="card">{children}</Card>
        </div>
    );
};

export default CardContainer;
