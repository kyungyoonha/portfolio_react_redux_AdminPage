import React, { useState, useRef } from "react";
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
    position: relative;
    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border: 1px solid #dfdfdf;
    }
    h4 {
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px;
    }
`;

const ButtonContainer = styled.div`
    padding: 50px;
    text-align: center;
`;

ReactModal.setAppElement("#root");

const PlaceCodeFormModal = ({
    isModalOpen,
    handleChangeImg,
    handleModalClose,
    imageList,
}) => {
    const [showIdx, setShowIdx] = useState(0);
    const inputFileRef = useRef(null);
    // 이미지 보기
    const handleClickImg = (idx) => {
        setShowIdx(idx);
    };

    // 이미지 추가
    const handleInsertImg = (e) => {
        const files = e.target.files;
        const filesInsert = [...new Array(files.length)].map((_, i) => {
            return {
                src: URL.createObjectURL(files[i]),
                file: files[i],
                fileName: files[i].name,
            };
        });
        const newImageList = [...imageList].concat(filesInsert);

        if (newImageList.length >= 4) {
            alert("최대 4개까지 추가됩니다.");
            handleChangeImg(newImageList.slice(0, 4));
        } else {
            handleChangeImg(newImageList);
        }
    };

    const handleChangeMain = (type) => {
        const copy = [...imageList];

        // 이미지 삭제
        if (type === "delete") {
            handleChangeImg((state) => state.filter((img, i) => i !== showIdx));
        }
        // 제일 앞으로 이동
        else if (type === "first") {
            handleChangeImg([
                imageList[showIdx],
                ...copy.filter((_, i) => i !== showIdx),
            ]);
            setShowIdx(0);
        }
        // 한칸 앞으로 이동
        else if (type === "up") {
            if (showIdx !== 0) {
                copy.splice(showIdx, 1);
                copy.splice(showIdx - 1, 0, imageList[showIdx]);
                handleChangeImg(copy);
                setShowIdx(showIdx - 1);
            }
        }
        // 한칸 뒤로 이동
        else if (type === "down") {
            if (showIdx !== imageList.length - 1) {
                copy.splice(showIdx, 1);
                copy.splice(showIdx + 1, 0, imageList[showIdx]);
                handleChangeImg(copy);
                setShowIdx(showIdx + 1);
            }
        }
        // 제일 뒤로 이동
        else if (type === "last") {
            handleChangeImg([
                ...copy.filter((img, i) => i !== showIdx),
                imageList[showIdx],
            ]);
            setShowIdx(imageList.length - 1);
        }
    };

    return (
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
                            src={
                                imageList[showIdx]
                                    ? imageList[showIdx].src
                                    : noImg
                            }
                            alt=""
                        />
                    </MainImg>

                    <Slider>
                        {[...new Array(4)].map((_, idx) => (
                            <InnerImg key={idx}>
                                <h4>
                                    <span className="badge badge-danger">
                                        {idx === 0 ? "대표" : idx + 1}
                                    </span>
                                </h4>
                                <img
                                    src={
                                        imageList[idx]
                                            ? imageList[idx].src
                                            : noImg
                                    }
                                    alt=""
                                    onClick={() => handleClickImg(idx)}
                                />
                            </InnerImg>
                        ))}
                    </Slider>
                </div>
                <ButtonContainer>
                    <h3>설정</h3>
                    <input
                        ref={inputFileRef}
                        type="file"
                        hidden
                        onChange={handleInsertImg}
                        multiple
                    />
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-block"
                        onClick={() => inputFileRef.current.click()}
                    >
                        사진 추가
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-block"
                        onClick={() => handleChangeMain("delete")}
                    >
                        사진 삭제
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-block"
                        onClick={() => handleChangeMain("first")}
                    >
                        대표사진 설정
                    </button>
                    <br />
                    <br />
                    <h3>정렬</h3>
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-block"
                        onClick={() => handleChangeMain("first")}
                    >
                        제일 앞으로 이동
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-block"
                        onClick={() => handleChangeMain("last")}
                    >
                        제일 뒤로 이동
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-block"
                        onClick={() => handleChangeMain("up")}
                    >
                        한칸 앞으로 이동
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-block"
                        onClick={() => handleChangeMain("down")}
                    >
                        한칸 뒤로 이동
                    </button>
                </ButtonContainer>
            </Container>
        </ReactModal>
    );
};

export default PlaceCodeFormModal;
