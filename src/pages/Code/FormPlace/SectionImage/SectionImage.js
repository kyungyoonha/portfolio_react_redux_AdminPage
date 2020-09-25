import React, { useState } from "react";
import styled from "styled-components";
import ModalImage from "./ModalImage/ModalImage";
import noImg from "../../../../img/no-img.jpg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    width: 100%;
    height: 570px;
    border: 1px solid #dee2e6;
`;

const MainImg = styled.div`
    position: relative;
    padding: 5px;
    text-align: center;
    img {
        width: 100%;
        height: 360px;
        object-fit: cover;
    }
    h3 {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
    }
`;

const SubImgContainer = styled.div`
    display: flex;

    width: 100%;
    div {
        flex: 1;
    }
    img {
        width: 100%;
        padding: 5px;
        height: 150px;
        object-fit: cover;
        border: 1px solid #dee2e6;
    }
`;

const ButtonContainer = styled.div`
    padding: 5px;
    height: 40px;
    line-height: 40px;
`;

const SectionImage = ({ imageList, handleChangeImageList }) => {
    // 모달
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <React.Fragment>
            <Container>
                <MainImg>
                    <h3>
                        <span className="badge badge-danger">대표사진</span>
                    </h3>
                    <img
                        src={imageList[0] ? imageList[0].src : noImg}
                        alt="대표사진"
                    />
                </MainImg>
                <SubImgContainer>
                    {[...new Array(4)].map((_, idx) => {
                        if (idx === 0) {
                            return null;
                        } else {
                            return (
                                <div key={idx}>
                                    <img
                                        src={
                                            imageList[idx]
                                                ? imageList[idx].src
                                                : noImg
                                        }
                                        alt="대표사진"
                                    />
                                </div>
                            );
                        }
                    })}
                </SubImgContainer>
                <ButtonContainer>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-md btn-block"
                        onClick={handleModalOpen}
                    >
                        사진 편집하기
                    </button>
                    <ModalImage
                        isModalOpen={isModalOpen}
                        handleChangeImageList={handleChangeImageList}
                        handleModalClose={handleModalClose}
                        imageList={imageList}
                    />
                </ButtonContainer>
            </Container>
        </React.Fragment>
    );
};

export default SectionImage;
