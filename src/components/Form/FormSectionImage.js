import React from "react";
import "./FormSectionImage.scss";
import noImg from "../../img/no-img.jpg";

import FormSection from "./FormSection";
import ModalButtonImage from "../Modal/ModalButtonImage";

const FormSectionImage = ({ images, onChange }) => {
    const mainSrc = images[0] ? URL.createObjectURL(images[0].filepath) : noImg;

    return (
        <FormSection>
            <tr className="formSectionImage__mainImg">
                <td colSpan="3">
                    <div className="formSectionImage__label">
                        <h3>
                            <span className="badge badge-danger">대표사진</span>
                        </h3>
                        <img src={mainSrc} alt="대표사진" />
                    </div>
                </td>
            </tr>
            <tr className="formSectionImage__subImg">
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
                    <ModalButtonImage images={images} onChange={onChange} />
                </td>
            </tr>
        </FormSection>
    );
};

export default FormSectionImage;
