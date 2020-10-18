import React from "react";
import "./DashBoard.scss";
import ChartsRegion from "./components/ChartsRegion";
import GoogleMap from "./components/GoogleMap";
import ChartsWeekly from "./components/ChartsWeekly";
import ChartsMonthly from "./components/ChartsMonthly";
import CSTable from "./components/CSBoard";

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
