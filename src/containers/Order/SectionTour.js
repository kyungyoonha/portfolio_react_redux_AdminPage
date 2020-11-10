import React from "react";
import Input from "../../components/Form/Input";

const SectionTour = ({ purchasetour, errors = {}, children }) => {
    return (
        <React.Fragment>
            <tr>
                <td colSpan="2">{children}</td>
            </tr>
            {purchasetour.map((item, idx) => (
                <Input
                    key={item.idx}
                    label={`${idx + 1}번째 관광지명`}
                    name="tourname"
                    value={item.tourname}
                    onChange={() => {}}
                    errors={errors}
                />
            ))}
            {/* {!purchasetour.length && (
                <Input
                    label="1번째 관광지명"
                    placeholder="관광지를 추가해주세요"
                    disabled
                />
            )} */}
            {purchasetour.length < 3 &&
                [...new Array(3 - purchasetour.length)].map((_, idx) => (
                    <Input
                        key={idx}
                        label={`${purchasetour.length + idx + 1}번째 관광지명`}
                        disabled
                    />
                ))}
        </React.Fragment>
    );
};

export default SectionTour;
