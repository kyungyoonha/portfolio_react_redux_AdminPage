import React from "react";
import "./FormImageList.scss";
import noImg from "../../img/no-img.jpg";
import TourModalImage from "../Modal/TourModalImage";

const FormImageList = ({ images, onChange }) => {
    const mainSrc = images[0] ? URL.createObjectURL(images[0].filepath) : noImg;

    return (
        <React.Fragment>
            <tr className="formImageList__mainImg">
                <td colSpan="3">
                    <div className="formImageList__label">
                        <h3>
                            <span className="badge badge-danger">대표사진</span>
                        </h3>
                        <img src={mainSrc} alt="대표사진" />
                    </div>
                </td>
            </tr>
            <tr className="formImageList__subImg">
                {[...new Array(4)].map((_, idx) => {
                    let image = images[idx];
                    let subSrc = image
                        ? URL.createObjectURL(image.filepath)
                        : noImg;

                    return idx === 0 ? null : (
                        <td key={idx}>
                            <img src={subSrc} alt="대표사진" />
                        </td>
                    );
                })}
            </tr>
            <tr>
                <td colSpan="3">
                    <TourModalImage images={images} onChange={onChange} />
                </td>
            </tr>
        </React.Fragment>
    );
};

export default FormImageList;
