import React from "react";
import "./DashBoard.scss";

import {
    ChartsRegion,
    ChartsWeekly,
    ChartsMonthly,
    ChartsGoogleMap,
    CSBoardOnly,
} from "../../components";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <ChartsGoogleMap />
            <ChartsRegion />
            <ChartsMonthly />
            <ChartsWeekly />
            <CSBoardOnly full />
        </div>
    );
};

export default Dashboard;
