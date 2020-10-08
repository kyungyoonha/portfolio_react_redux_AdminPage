import React from "react";
import "./FormImg.scss";
import FormImgModal from "./FormImgModal";
import noImg from "../../../../img/no-img.jpg";

const FormImg = ({ imageList, handleChangeImageList }) => {
    return (
        <div className="formSection formImg">
            <table className="table">
                <tbody>
                    <tr className="formImg__mainImg">
                        <th rowSpan="3" className="formImg__title">
                            <label className="col-form-label">
                                ※ 사진 관리
                            </label>
                        </th>
                        <td colSpan="3">
                            <h3 className="formImg__label">
                                <span className="badge badge-danger">
                                    대표사진
                                </span>
                            </h3>
                            <img
                                src={imageList[0] ? imageList[0].src : noImg}
                                alt="대표사진"
                            />
                        </td>
                    </tr>
                    <tr className="formImg__subImg">
                        {[...new Array(4)].map((_, idx) => {
                            return idx === 0 ? null : (
                                <td key={idx}>
                                    <img
                                        src={
                                            imageList[idx]
                                                ? imageList[idx].src
                                                : noImg
                                        }
                                        alt="대표사진"
                                    />
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <FormImgModal
                                handleChangeImageList={handleChangeImageList}
                                imageList={imageList}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FormImg;
