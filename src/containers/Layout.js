import React from "react";
import styled from "styled-components";

// containers
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
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
                <Content>{children}</Content>
            </BodyContainer>
        </Container>
    );
};

export default Home;
