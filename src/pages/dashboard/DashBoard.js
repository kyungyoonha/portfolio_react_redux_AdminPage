import React from "react";
import styled from "styled-components";
import ChartsRegion from "./components/ChartsRegion";
import GoogleMap from "./components/GoogleMap";
import ChartsWeekly from "./components/ChartsWeekly";
import ChartsMonthly from "./components/ChartsMonthly";
import CSTable from "./components/CSBoard";

const Container = styled.div`
    background: #eeeeee;
    flex: 1;
    padding: 15px;
    .card {
        height: 500px;
    }
`;

const Dashboard = () => {
    return (
        <Container className="row no-Gutter">
            <GoogleMap />
            <ChartsRegion />
            <ChartsMonthly />
            <ChartsWeekly />
            <CSTable size="full" />
        </Container>
    );
};

export default Dashboard;
