import React from "react";
import styled from "styled-components";
import ChartsRegion from "./components/ChartsRegion";
import GoogleMap from "./components/GoogleMap";
import ChartsWeekly from "./components/ChartsWeekly";
import ChartsMonthly from "./components/ChartsMonthly";
import CSTable from "./components/CSBoard";

const Card = ({ children }) => {
    return (
        <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="card" style={{ height: "500px" }}>
                {children}
            </div>
        </div>
    );
};

const Container = styled.div`
    background: #eeeeee;
    flex: 1;
    padding: 15px;
`;

const Dashboard = () => {
    return (
        <Container className="row no-Gutter">
            <Card>
                <GoogleMap />
            </Card>
            <Card>
                <ChartsRegion />
            </Card>
            <Card>
                <ChartsMonthly />
            </Card>
            <Card>
                <ChartsWeekly />
            </Card>
            <Card>
                <CSTable />
            </Card>
        </Container>
    );
};

export default Dashboard;
