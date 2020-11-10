import React, { useRef } from "react";
import noImg from "../../img/no-img.jpg";

export const filetypeObj = {
    image: `image/*`,
    audio: "audio/*",
    video: "video/*",
    all: "/*",
};

const InputFileWithImage = ({
    label,
    name,
    value,
    filename,
    filepath,
    onChange,
    filetype,
}) => {
    const inputFileRef = useRef(null);
    const imageUrl = value[0]
        ? window.URL.createObjectURL(value[0])
        : filepath
        ? process.env.REACT_APP_BACKEND_URL + filepath
        : noImg;

    return (
        <React.Fragment>
            <tr>
                <th
                    rowSpan="2"
                    style={{
                        verticalAlign: "middle",
                        borderBottom: "1px solid #dee2e6",
                    }}
                >
                    <label>※ {label}</label>
                </th>
                <td className="text-center">
                    <img
                        src={imageUrl}
                        alt={label}
                        style={{
                            height: "300px",
                            width: "100%",
                            objectFit: "contain",
                        }}
                    />
                </td>
            </tr>

            <tr style={{ borderBottom: "1px solid #dee2e6" }}>
                <td>
                    <input
                        ref={inputFileRef}
                        name={name}
                        type="file"
                        hidden
                        onChange={onChange}
                        accept={filetypeObj[filetype]}
                    />

                    <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={() => inputFileRef.current.click()}
                        style={{ marginRight: "15px" }}
                    >
                        이미지 찾기
                    </button>
                    {value ? value[0].name : filename ? filename : ""}
                </td>
            </tr>
        </React.Fragment>
    );
};

export default InputFileWithImage;
