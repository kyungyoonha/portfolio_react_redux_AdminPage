import React from "react";
import { filetypeObj } from "./InputFileWithImage";
const InputFile = ({
    label,
    name,
    value,
    filename,
    onChange,
    filetype,
    disabled,
}) => {
    return (
        <tr>
            <th>
                <label>※ {label}</label>
            </th>
            <td>
                <div className="custom-file">
                    <input
                        name={name}
                        type="file"
                        className="custom-file-input"
                        onChange={(e) => onChange(e, filetype)}
                        accept={filetypeObj[filetype]}
                        disabled={disabled}
                    />
                    <label className="custom-file-label" data-browse={label}>
                        {value ? value.name : filename ? filename : ""}
                    </label>
                </div>
            </td>
        </tr>
    );
};

export default InputFile;
