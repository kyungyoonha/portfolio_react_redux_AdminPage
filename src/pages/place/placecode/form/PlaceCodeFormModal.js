import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import Slider from "../../../../components/common/Slider/Slider";
import noImg from "../../../../img/no-img.jpg";

const modalStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "65%",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
    },
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px 30px;
    > div {
        margin: 0 20px;
        width: 500px;
        height: 500px;
        border: 1px solid #dfdfdf;
    }
`;
const MainImg = styled.div`
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border: 1px solid #dfdfdf;
    }
`;

const InnerImg = styled.div`
    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border: 1px solid #dfdfdf;
    }
`;

const ButtonContainer = styled.div`
    padding: 50px;
    text-align: center;
`;

ReactModal.setAppElement("#root");

const PlaceCodeFormModal = ({
    isModalOpen,
    handleModalClose,
    uploadImgs,
    children,
}) => {
    return (
        <div>
            <ReactModal
                isOpen={isModalOpen}
                contentLabel="Minimal Modal Example"
                style={modalStyle}
                onRequestClose={() => handleModalClose()}
            >
                <Container>
                    <div>
                        <MainImg>
                            <img
                                src={uploadImgs[0] ? uploadImgs[0].src : noImg}
                                alt=""
                            />
                        </MainImg>

                        <Slider>
                            {[...new Array(4)].map((_, idx) => (
                                <InnerImg key={idx}>
                                    <img
                                        src={
                                            uploadImgs[idx]
                                                ? uploadImgs[idx].src
                                                : noImg
                                        }
                                        alt=""
                                    />
                                </InnerImg>
                            ))}
                        </Slider>
                    </div>
                    <ButtonContainer>
                        <h3>설정</h3>
                        <button
                            type="button"
                            class="btn btn-outline-dark btn-sm btn-block"
                        >
                            사진 추가
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-dark btn-sm btn-block"
                        >
                            사진 삭제
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-dark btn-sm btn-block"
                        >
                            대표사진 설정
                        </button>
                        <br />
                        <br />
                        <h3>정렬</h3>
                        <button
                            type="button"
                            class="btn btn-outline-dark btn-sm btn-block"
                        >
                            제일 앞으로 이동
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-dark btn-sm btn-block"
                        >
                            제일 뒤로 이동
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-dark btn-sm btn-block"
                        >
                            한칸 앞으로 이동
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-dark btn-sm btn-block"
                        >
                            한칸 뒤로 이동
                        </button>
                    </ButtonContainer>
                </Container>
            </ReactModal>
        </div>
    );
};

export default PlaceCodeFormModal;
