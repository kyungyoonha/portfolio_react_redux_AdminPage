import React from "react";
import styled from "styled-components";
import DashboardChartsRegion from "./DashboardChartsRegion";
import DashboardGoogleMap from "./DashboardGoogleMap";
import DashboardChartsWeekly from "./DashboardChartsWeekly";
import DashboardChartsMonthly from "./DashboardChartsMonthly";
import DashboardCSTable from "./DashboardCSTable";

const Container = styled.div`
    background: #eeeeee;
    flex: 1;
    padding: 15px;
`;

const Dashboard = () => {
    return (
        <Container className="row no-Gutter">
            <DashboardGoogleMap />
            <DashboardChartsRegion />
            <DashboardChartsMonthly />
            <DashboardChartsWeekly />
            <DashboardCSTable />
        </Container>
    );
};

export default Dashboard;
