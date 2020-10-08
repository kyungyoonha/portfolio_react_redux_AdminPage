import React, { useState } from "react";
import "./FormImg.scss";
import FormImgModal from "./FormImgModal";
import noImg from "../../../../img/no-img.jpg";

const FormImg = ({ imageList, handleChangeImageList }) => {
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
            <div className="formImg">
                <div className="formImg__imgMain">
                    <h3>
                        <span className="badge badge-danger">대표사진</span>
                    </h3>
                    <img
                        src={imageList[0] ? imageList[0].src : noImg}
                        alt="대표사진"
                    />
                </div>
                <div className="formImg__imgSub">
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
                </div>
                <div className="formImg__buttonContainer">
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-md btn-block"
                        onClick={handleModalOpen}
                    >
                        사진 편집하기
                    </button>
                    <FormImgModal
                        isModalOpen={isModalOpen}
                        handleChangeImageList={handleChangeImageList}
                        handleModalClose={handleModalClose}
                        imageList={imageList}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default FormImg;
