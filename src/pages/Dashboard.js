import React from "react";
import styled from "styled-components";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import CardContainer from "../components/common/CardContainer";
import ChartsRegion from "../components/ChartsRegion";

const Container = styled.div`
    background: #eeeeee;
    flex: 1;
    padding: 15px;
`;

const StyledContent = styled.div`
    margin: 24px;
    flex: 1;
`;

const data = [
    {
        id: "대한민국",
        label: "대한민국",
        value: 443,
        color: "hsl(348, 70%, 50%)",
    },
    {
        id: "태국",
        label: "태국",
        value: 477,
        color: "hsl(248, 70%, 50%)",
    },
    {
        id: "베트남",
        label: "베트남",
        value: 570,
        color: "hsl(178, 70%, 50%)",
    },
    {
        id: "이집트",
        label: "이집트",
        value: 159,
        color: "hsl(142, 70%, 50%)",
    },
    {
        id: "미안마",
        label: "미안마",
        value: 270,
        color: "hsl(249, 70%, 50%)",
    },
];

const Dashboard = () => {
    return (
        <Container className="row no-Gutter">
            <CardContainer>
                <div className="card-header bg-white">지역별 예약현황</div>
                <div className="card-body bg-white">Content</div>
                {/* <div className="card-footer bg-white">Footer</div> */}
            </CardContainer>
            <CardContainer>
                <div className="card-header bg-white">지역별 그래프</div>
                <div className="card-body bg-white">
                    <ChartsRegion data={data} />
                </div>
            </CardContainer>
            <CardContainer>
                <div className="card-header bg-white">월간 예약건</div>
                <div className="card-body bg-white">Content</div>
            </CardContainer>
            <CardContainer>
                <div className="card-header bg-white">주간 예약건</div>
                <div className="card-body bg-white">Content</div>
            </CardContainer>
        </Container>
    );
};

export default Dashboard;
