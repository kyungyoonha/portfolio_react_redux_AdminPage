import React, { useState } from "react";
import styled from "styled-components";
import PlaceCodeFormModal from "./PlaceCodeFormModal";
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
    text-align: center;
    padding: 5px;
    img {
        width: 100%;
        height: 360px;
        object-fit: cover;
    }
`;

const SubImg = styled.div`
    display: flex;
    flex-wrap: wrap;
    img {
        flex: 1;
        padding: 5px;
        height: 150px;
        object-fit: cover;
    }
`;

const ButtonContainer = styled.div`
    padding: 5px;
    height: 40px;
    line-height: 40px;
`;

const PlaceCodeFormImages = ({ uploadImgs, handleUploadImgs }) => {
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
                    <img
                        src={uploadImgs[0] ? uploadImgs[0].src : noImg}
                        alt="대표사진"
                    />
                </MainImg>
                <SubImg>
                    {[...new Array(4)].map((_, idx) => {
                        if (idx === 0) {
                            return null;
                        } else {
                            return (
                                <img
                                    key={idx}
                                    src={
                                        uploadImgs[idx]
                                            ? uploadImgs[idx].src
                                            : noImg
                                    }
                                    alt="대표사진"
                                />
                            );
                        }
                    })}
                </SubImg>
                <ButtonContainer>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-md btn-block"
                        onClick={handleModalOpen}
                    >
                        사진 편집하기
                    </button>
                    <PlaceCodeFormModal
                        isModalOpen={isModalOpen}
                        handleModalClose={handleModalClose}
                        uploadImgs={uploadImgs}
                    ></PlaceCodeFormModal>
                </ButtonContainer>
            </Container>
        </React.Fragment>
    );
};

export default PlaceCodeFormImages;
