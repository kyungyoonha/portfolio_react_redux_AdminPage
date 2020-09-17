import React from "react";
import styled from "styled-components";

// containers
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #ebedef;
`;

const BodyContainer = styled.div`
    display: flex;
    flex: 1;
`;

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <BodyContainer>
                <Sidebar />
                {children}
            </BodyContainer>
        </Container>
    );
};

export default Layout;
