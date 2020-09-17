import React from "react";
import styled from "styled-components";
import MainNav from "./TemplateNav";

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

const Template = ({
    title,
    navCtg,
    handleClickInsert,
    handleClickDelete,
    children,
}) => {
    return (
        <Container className="card">
            <div className="card-header bg-white">
                <i className="fas fa-user-cog"></i>
                {title}
            </div>
            <div className="card-body bg-white">
                <MainNav navCtg={navCtg} />
                {children}
            </div>
            {/* Footer */}
            <div className="card-footer bg-white">
                <ButtonContainer>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleClickDelete}
                    >
                        삭제하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClickInsert}
                    >
                        추가하기
                    </button>
                </ButtonContainer>
            </div>
        </Container>
    );
};

export default Template;
