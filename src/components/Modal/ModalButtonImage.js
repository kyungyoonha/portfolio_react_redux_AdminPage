import React, { useState, useRef, useEffect } from "react";

import "./ModalButtonImage.scss";
import Slider from "../Slider/Slider";
import Modal from "./Modal";
import noImg from "../../img/no-img.jpg";
import useOpen from "../../Hooks/useOpen";

// ### 제출시 파일도 한번에 업로드
const ModalButtonImage = ({ onChange, images }) => {
    const inputFileRef = useRef(null);
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const [showIdx, setShowIdx] = useState(0);
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        if (images[0]) {
            const sorted = images.sort((a, b) => a - b);
            setImageList(sorted);
        }
    }, [images]);

    // 이미지 보기
    const handleClickImg = (idx) => {
        setShowIdx(idx);
    };

    // 이미지 추가
    const handleInsertImg = (e) => {
        const files = e.target.files;
        const filesList = [...new Array(files.length)].map((_, i) => {
            return {
                idx: "",
                touridx: "",
                mainpicYN: "N",
                seq: { i },
                file: files,
                filename: files[i].name,
                filepath: files[i],
            };
        });
        const newImageList = [...imageList].concat(filesList);

        if (newImageList.length > 4) {
            alert("최대 4개까지 추가됩니다.");
            setImageList(newImageList.slice(0, 4));
        } else {
            setImageList(newImageList);
        }
    };

    // 이미지 삭제 및 정렬
    const handleChangeImg = (type) => {
        const copy = [...imageList];

        // 이미지 삭제
        if (type === "delete") {
            setImageList((state) => state.filter((_, i) => i !== showIdx));
        }
        // 제일 앞으로 이동
        else if (type === "first") {
            setImageList([
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
                setImageList(copy);
                setShowIdx(showIdx - 1);
            }
        }
        // 한칸 뒤로 이동
        else if (type === "down") {
            if (showIdx !== imageList.length - 1) {
                copy.splice(showIdx, 1);
                copy.splice(showIdx + 1, 0, imageList[showIdx]);
                setImageList(copy);
                setShowIdx(showIdx + 1);
            }
        }
        // 제일 뒤로 이동
        else if (type === "last") {
            setImageList([
                ...copy.filter((img, i) => i !== showIdx),
                imageList[showIdx],
            ]);
            setShowIdx(imageList.length - 1);
        }
    };

    // 이미지 저장
    const handleClickSave = () => {
        const result = imageList.map((image, i) => ({ ...image, seq: i }));
        if (!result.length) return alert("이미지를 추가해주세요.");

        result[0].mainpicYN = "Y";
        onChange(result);
        onClickClose();
    };

    return (
        <>
            <Modal
                title="이미지 추가"
                isOpen={isOpen}
                onClick={handleClickSave}
                onClickClose={onClickClose}
            >
                <div className="modalButtonImage">
                    <div className="left">
                        <img
                            src={
                                imageList[showIdx]
                                    ? URL.createObjectURL(
                                          imageList[showIdx].filepath
                                      )
                                    : noImg
                            }
                            alt=""
                        />

                        <Slider>
                            {[...new Array(4)].map((_, idx) => (
                                <div className="innerImg" key={idx}>
                                    <h4>
                                        <span className="badge badge-danger">
                                            {idx === 0 ? "대표" : idx + 1}
                                        </span>
                                    </h4>
                                    <img
                                        src={
                                            imageList[idx]
                                                ? URL.createObjectURL(
                                                      imageList[idx].filepath
                                                  )
                                                : noImg
                                        }
                                        alt=""
                                        onClick={() => handleClickImg(idx)}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="right">
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
                            onClick={() => handleChangeImg("delete")}
                        >
                            사진 삭제
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark btn-sm btn-block"
                            onClick={() => handleChangeImg("first")}
                        >
                            대표사진 설정
                        </button>
                        <br />
                        <br />
                        <h3>정렬</h3>
                        <button
                            type="button"
                            className="btn btn-outline-dark btn-sm btn-block"
                            onClick={() => handleChangeImg("first")}
                        >
                            제일 앞으로 이동
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark btn-sm btn-block"
                            onClick={() => handleChangeImg("last")}
                        >
                            제일 뒤로 이동
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark btn-sm btn-block"
                            onClick={() => handleChangeImg("up")}
                        >
                            한칸 앞으로 이동
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark btn-sm btn-block"
                            onClick={() => handleChangeImg("down")}
                        >
                            한칸 뒤로 이동
                        </button>
                    </div>
                </div>
            </Modal>
            <button
                type="button"
                className="btn btn-outline-primary btn-md btn-block"
                onClick={onClickOpen}
            >
                사진 편집하기
            </button>
        </>
    );
};

export default ModalButtonImage;
