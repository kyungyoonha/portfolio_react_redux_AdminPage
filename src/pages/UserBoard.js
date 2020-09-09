import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BoardTable from "../components/BoardTable";

const Container = styled.div`
    flex: 1;
    padding: 15px;
    background: #eeeeee;
    & > div > i {
        margin-right: 10px;
    }
`;

const SubNav = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;
    height: 80px;
    line-height: 80px;
    border-bottom: 2px solid #eeeeee;

    & a {
        position: relative;
        float: left;
        padding: 0 80px;
        margin: 0 50px;
        height: 100%;
        color: black;

        &:hover {
            border-bottom: 4px solid #f4ac19;
            transition: 0.2s;
        }
        &.active {
            color: #2196f3;
            border-bottom: 4px solid #2196f3;
        }
    }
`;

const ButtonContainer = styled.div`
    float: right;
    & > button {
        margin-right: 10px;
    }
`;

const UserBoard = ({ match }) => {
    console.log(match);
    return (
        <Container className="card">
            <div className="card-header bg-white">
                <i className="fas fa-user-cog"></i>
                회원 정보
            </div>
            <div className="card-body bg-white">
                <SubNav>
                    <NavLink to="/member/customer" activeClassName="active">
                        일반 회원
                    </NavLink>
                    <NavLink to="/member/driver" activeClassName="active">
                        기사 회원
                    </NavLink>
                    <NavLink to="/member/manager" activeClassName="active">
                        관리자
                    </NavLink>
                </SubNav>
                <BoardTable />
            </div>
            <div className="card-footer bg-white">
                <ButtonContainer>
                    <button type="button" className="btn btn-outline-secondary">
                        삭제하기
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        추가하기
                    </button>
                </ButtonContainer>
            </div>
        </Container>
    );
};

export default UserBoard;
