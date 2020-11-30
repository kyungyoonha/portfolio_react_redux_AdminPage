import React from "react";
import Input from "../../components/Input/Input";
import ModalButtonSearch from "../../components/Modal/ModalButtonSearch";

const FormSectionTour = ({ label, searchPath, data, onChange }) => {
    return (
        <React.Fragment>
            <tr>
                <td colSpan="2">
                    <ModalButtonSearch
                        label={label}
                        searchPath={searchPath}
                        onChange={onChange}
                    />
                </td>
            </tr>
            {data.map((item, idx) => (
                <Input
                    key={item.idx}
                    label={`${idx + 1}번째 관광지명`}
                    name="tourname"
                    value={item.tourname}
                    onChange={() => {}}
                />
            ))}

            {data.length < 3 &&
                [...new Array(3 - data.length)].map((_, idx) => (
                    <Input
                        key={idx}
                        label={`${data.length + idx + 1}번째 관광지명`}
                        disabled
                    />
                ))}
        </React.Fragment>
    );
};

export default FormSectionTour;
