import React from "react";
import styled from "styled-components";
import Breadcrumb from "../components/Breadcrum";

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    height: 50px;
    line-height: 50px;
    color: white;
    background: #2196f3;
    font-size: 1.4rem;
    font-weight: bold;
`;

// const TitleRight = styled.div`
//     font-size: 1rem;
//     font-weight: normal;
//     & li {
//         float: left;
//         margin-right: 15px;
//     }
// `;

const Header = () => {
    return (
        <div>
            <TitleContainer>
                TRIPSODA
                {/* <TitleRight>
                    <ul>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                </TitleRight> */}
            </TitleContainer>
            <Breadcrumb />
        </div>
    );
};

export default Header;
