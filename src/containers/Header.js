import React from "react";
import styled from "styled-components";

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

const Breadcrumb = styled.div`
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
    background: white;
    border-bottom: 1px solid #d8dbe0;
    & > span {
        margin: 0 15px;
    }
`;

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
            <Breadcrumb>
                Home
                <span>
                    <i className="fas fa-chevron-right"></i>
                </span>
            </Breadcrumb>
        </div>
    );
};

export default Header;
