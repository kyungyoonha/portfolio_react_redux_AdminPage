import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 30px;
`;

const DashboardTable = () => {
    return (
        <div className="col-md-12">
            <div className="card" style={{ height: "500px" }}>
                <div className="card-header bg-white">
                    문의 및 신고 게시판 현황
                </div>
                <div className="card-body bg-white">
                    <Container>
                        <table className="table table-hover table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" style={{ width: "50px" }}>
                                        #
                                    </th>
                                    <th scope="col">제목</th>
                                    <th scope="col" style={{ width: "100px" }}>
                                        날짜
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>예약확인 부탁드립니다.</td>
                                    <td>2020.09.09</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>비행기 일정이 변경되었습니다.</td>
                                    <td>2020.09.09</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>일정 확인해주세요.</td>
                                    <td>2020.09.09</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>숙소를 변경하고 싶습니다.</td>
                                    <td>2020.09.09</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>금액 문의</td>
                                    <td>2020.09.09</td>
                                </tr>
                            </tbody>
                        </table>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default DashboardTable;
