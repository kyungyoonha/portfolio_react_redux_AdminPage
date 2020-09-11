import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import history from "../../history";

import MemberNav from "./MemberNav";
import MemberTableTop from "./MemberTableTop";

const headerObj = {
    user: [
        "#",
        "id",
        "이름",
        "전화번호",
        "이메일",
        "국적",
        "구매내역",
        "문의사항",
    ],
    driver: [
        "#",
        "id",
        "이름",
        "전화번호",
        "이메일",
        "국적",
        "운행내역",
        "문의사항",
    ],
    manager: [
        "#",
        "id",
        "이름",
        "전화번호",
        "이메일",
        "국적",
        "구매내역",
        "문의사항",
    ],
};

const Container = styled.div`
    flex: 1;
    padding: 15px;
    background: #eeeeee;
    & > div > i {
        margin-right: 10px;
    }
`;

const ButtonContainer = styled.div`
    float: right;
    & > button {
        margin-right: 10px;
    }
`;

const MemberTable = ({ match }) => {
    const id = match.url.split("/")[2];

    const header = headerObj[id];
    const [data, setData] = useState([]);

    const [pageCtrl, setPageCtrl] = useState({
        pageSize: 4,
        currentPage: 1,
        countryCtg: "",
        searchKeyword: "",
        sort: "",
    });

    useEffect(() => {
        const getFetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/json/${id}.json`
                    //     ?pageSize=${pageCtrl.pageSize}
                    //     &currentPage=${pageCtrl.currentPage}
                    //     &countryCtg=${pageCtrl.countryCtg}
                    //     &searchKeyword=${pageCtrl.searchKeyword}
                    //     &sort=${pageCtrl.sort}
                );
                setData(response.data);
            } catch (err) {
                console.error("DataboardTable Fecth error:", err);
            }
        };
        getFetchData();
    }, [id, pageCtrl]);

    const handleCountryCtg = (country) => {
        setPageCtrl((state) => ({
            ...state,
            countryCtg: country,
        }));
    };

    const handlePageSize = (pageSize) => {
        setPageCtrl((state) => ({
            ...state,
            pageSize: pageSize,
        }));
    };

    const handleSearchKeyword = (keyword) => {
        setPageCtrl((state) => ({
            ...state,
            searchKeyword: keyword,
        }));
    };

    const onClickInsertButton = () => {
        history.push(`/member/${id}/insert`);
    };

    return (
        <Container className="card">
            <div className="card-header bg-white">
                <i className="fas fa-user-cog"></i>
                회원 정보
            </div>
            <div className="card-body bg-white">
                <MemberNav />
                <div>
                    <MemberTableTop
                        handleCountryCtg={handleCountryCtg}
                        handlePageSize={handlePageSize}
                        handleSearchKeyword={handleSearchKeyword}
                    />
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                {header.map((item) => (
                                    <th key={item} scope="col">
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, idx) => (
                                <tr key={idx}>
                                    <th scope="row">{idx}</th>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.country}</td>
                                    <td>{item.history.length}건</td>
                                    <td>{item.cs.length} 건</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Footer */}
            <div className="card-footer bg-white">
                <ButtonContainer>
                    <button type="button" className="btn btn-outline-secondary">
                        삭제하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={onClickInsertButton}
                    >
                        추가하기
                    </button>
                </ButtonContainer>
            </div>
        </Container>
    );
};

export default MemberTable;
