import React from "react";
import styled from "styled-components";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import CardContainer from "../components/common/CardContainer";

const Container = styled.div`
    background: #eeeeee;
    flex: 1;
    padding: 15px;
`;

const StyledContent = styled.div`
    margin: 24px;
    flex: 1;
`;

const Dashboard = () => {
    return (
        <Container className="row no-Gutter">
            <CardContainer>
                <div className="card-header bg-white">주간예약건</div>
                <div className="card-body bg-white">Content</div>
                <div className="card-footer bg-white">Footer</div>
            </CardContainer>
            <CardContainer>
                <div className="card-header bg-white">월간 예약건</div>
                <div className="card-body bg-white">Content</div>
                <div className="card-footer bg-white">Footer</div>
            </CardContainer>
            <CardContainer>
                <div className="card-header bg-white">월간 예약건</div>
                <div className="card-body bg-white">Content</div>
                <div className="card-footer bg-white">Footer</div>
            </CardContainer>
            <CardContainer>
                <div className="card-header bg-white">월간 예약건</div>
                <div className="card-body bg-white">Content</div>
                <div className="card-footer bg-white">Footer</div>
            </CardContainer>
        </Container>
    );
};

export default Dashboard;
