import React from "react";
import "./FormSectionAudio.scss";

import FormSection from "./FormSection";
import ModalButtonAudio from "../Modal/ModalButtonAudio";

const FormSectionAudio = ({ label, data, onChange, handleDeleteAudio }) => {
    return (
        <FormSection full>
            <tr className="formSectionAudio">
                <th>
                    {" "}
                    {label && `※ ${label}`}
                    <ModalButtonAudio
                        title="오디오 추가하기(+)"
                        onChange={onChange}
                    />
                </th>
                <td>
                    <div className="formSectionAudio__container">
                        {data.map((item, idx) => (
                            <div key={idx} className="formSectionAudio__item">
                                {idx + 1 + " " + item.scripttitle}
                                <span className="badge badge-success ml-1 mr-1">
                                    {item.audiolanguage}
                                </span>
                                {item.mainaudioYN === "Y" && (
                                    <span className="badge badge-primary ml-1 mr-1">
                                        대표
                                    </span>
                                )}
                                <button
                                    type="button"
                                    className="btn btn-outline-danger btn-sm float-right mt-1"
                                    onClick={() => handleDeleteAudio(idx)}
                                >
                                    삭제
                                </button>
                            </div>
                        ))}
                    </div>
                </td>
            </tr>
        </FormSection>
    );
};

export default FormSectionAudio;
