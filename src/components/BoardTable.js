import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const BoardTable = () => {
    return (
        <Container>
            <div class=" float-left" style={{ width: "250px" }}>
                <select class="custom-select" id="validationCustom04" required>
                    <option selected disabled value="">
                        국적별 분류
                    </option>
                    <option>...</option>
                </select>
            </div>
            <div class=" float-left ml-3" style={{ width: "150px" }}>
                <select class="custom-select" id="validationCustom04" required>
                    <option selected disabled value="">
                        8건 노출
                    </option>
                    <option>...</option>
                </select>
            </div>
            <div>
                <div
                    class="input-group mb-3 float-right"
                    style={{ width: "300px" }}
                >
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col">이름</th>
                        <th scope="col">전화번호</th>
                        <th scope="col">이메일</th>
                        <th scope="col">국적</th>
                        <th scope="col">구매내역</th>
                        <th scope="col">문의사항</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>홍길동</td>
                        <td>+82-10-1111-2222</td>
                        <td>info@tripsoda.com</td>
                        <td>KOREA</td>
                        <td>2건</td>
                        <td>2건</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>홍길동</td>
                        <td>+82-10-1111-2222</td>
                        <td>info@tripsoda.com</td>
                        <td>KOREA</td>
                        <td>2건</td>
                        <td>2건</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>홍길동</td>
                        <td>+82-10-1111-2222</td>
                        <td>info@tripsoda.com</td>
                        <td>KOREA</td>
                        <td>2건</td>
                        <td>2건</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>홍길동</td>
                        <td>+82-10-1111-2222</td>
                        <td>info@tripsoda.com</td>
                        <td>KOREA</td>
                        <td>2건</td>
                        <td>2건</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>홍길동</td>
                        <td>+82-10-1111-2222</td>
                        <td>info@tripsoda.com</td>
                        <td>KOREA</td>
                        <td>2건</td>
                        <td>2건</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};

export default BoardTable;
