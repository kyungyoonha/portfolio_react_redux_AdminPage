import React from "react";
import TourModalAudio from "../Modal/TourModalAudio";
import "./FormAudioList.scss";

const FormAudioList = ({ label, data, onChange, handleDeleteAudio }) => {
    return (
        <tr className="formList">
            <th>
                {" "}
                {label && `※ ${label}`}
                <TourModalAudio
                    title="오디오 추가하기(+)"
                    onChange={onChange}
                />
            </th>
            <td>
                <div className="formList__container">
                    {data.map((item, idx) => (
                        <div key={idx} className="formList__item">
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
    );
};

export default FormAudioList;
