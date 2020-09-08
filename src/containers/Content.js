import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
    margin: 10px;
    background: white;

    flex: 1;
`;

const Content = ({ children }) => {
    return <StyledContent>{children}</StyledContent>;
};

export default Content;
