import React from "react";
import "./FormImageList.scss";
import noImg from "../../img/no-img.jpg";

const FormImageList = ({ images, children }) => {
    return (
        <React.Fragment>
            <tr className="formImageList__mainImg">
                <th rowSpan="3" className="formImageList__title">
                    <label className="col-form-label">※ 사진 관리</label>
                </th>
                <td colSpan="3">
                    <h3 className="formImageList__label">
                        <span className="badge badge-danger">대표사진</span>
                    </h3>
                    <img
                        src={
                            images[0]
                                ? URL.createObjectURL(images[0].filepath)
                                : noImg
                        }
                        alt="대표사진"
                    />
                </td>
            </tr>
            <tr className="formImageList__subImg">
                {[...new Array(4)].map((_, idx) => {
                    return idx === 0 ? null : (
                        <td key={idx}>
                            <img
                                src={
                                    images[idx]
                                        ? URL.createObjectURL(
                                              images[idx].filepath
                                          )
                                        : noImg
                                }
                                alt="대표사진"
                            />
                        </td>
                    );
                })}
            </tr>
            <tr>
                <td colSpan="3">{children}</td>
            </tr>
        </React.Fragment>
    );
};

export default FormImageList;
