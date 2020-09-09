import React from "react";
import styled from "styled-components";
import CardContainer from "../components/common/CardContainer";
import ChartsRegion from "../components/ChartsRegion";
import GoogleMap from "../components/GoogleMap";
import ChartsWeeklyReservation from "../components/ChartsWeeklyReservation";
import ChartsMonthlyReservation from "../components/ChartsMonthlyReservation";
import BoardCS from "../components/BoardCS";

const Container = styled.div`
    background: #eeeeee;
    flex: 1;
    padding: 15px;
`;

const Dashboard = () => {
    return (
        <Container className="row no-Gutter">
            <CardContainer>
                <div className="card-header bg-white">지역별 예약현황</div>
                <div className="card-body bg-white">
                    <GoogleMap />
                </div>
                {/* <div className="card-footer bg-white">Footer</div> */}
            </CardContainer>
            <CardContainer>
                <div className="card-header bg-white">지역별 그래프</div>
                <div className="card-body bg-white">
                    <ChartsRegion />
                </div>
            </CardContainer>
            <CardContainer>
                <div className="card-header bg-white">월간 예약건</div>
                <div className="card-body bg-white">
                    <ChartsMonthlyReservation />
                </div>
            </CardContainer>
            <CardContainer>
                <div className="card-header bg-white">주간 예약건</div>
                <div className="card-body bg-white">
                    <ChartsWeeklyReservation />
                </div>
            </CardContainer>
            <div className="col-md-12">
                <div className="card" style={{ height: "500px" }}>
                    <div className="card-header bg-white">
                        문의 및 신고 게시판 현황
                    </div>
                    <div className="card-body bg-white">
                        <BoardCS />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
