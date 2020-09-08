import React from "react";
import styled from "styled-components";

// containers
import Sidebar from "./Sidebar";
import Header from "./Header";

const Container = styled.div`
    background: #ebedef;
`;

const BodyContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: stretch;
`;

const Home = ({ children }) => {
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

export default Home;
