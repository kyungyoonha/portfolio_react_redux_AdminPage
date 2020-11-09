import React from "react";
import "./DashBoard.scss";

import GoogleMap from "../../components/Google/GoogleMap";
import ChartsRegion from "../../components/Charts/ChartsRegion";
import ChartsWeekly from "../../components/Charts/ChartsWeekly";
import ChartsMonthly from "../../components/Charts/ChartsMonthly";
import CSTable from "../../components/Board/CSBoard";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <GoogleMap />
            <ChartsRegion />
            <ChartsMonthly />
            <ChartsWeekly />
            <CSTable full />
        </div>
    );
};

export default Dashboard;
