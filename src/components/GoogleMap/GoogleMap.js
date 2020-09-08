import React from "react";
import styled from "styled-components";

const GoogleMap = () => {
    const CardTmp = styled.div`
        background: white;
        height: 100px;
        border: 1px solid red;
    `;

    return (
        <div>
            <div className="row">
                <CardTmp className="col-md-6">1</CardTmp>
                <CardTmp className="col-md-6">2</CardTmp>
            </div>
        </div>
    );
};

export default GoogleMap;
