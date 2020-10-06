import React, { useState } from "react";

import { Select } from "../../../components/Form/Form";

const navObj = {
    tour: "관광지",
    driver: "기사",
    hobby: "취미/관심사",
};

const SectionMultiSelect = ({ multiInfo, setMultiInfo }) => {
    const [selected, setSelected] = useState("tour");
    const handleClickNav = (keyword) => {
        setSelected(keyword);
    };

    const handleChangeMultiInfo = (e, seq) => {
        const { value } = e.target;
        setMultiInfo((state) => ({
            ...state,
            [selected]: [
                ...state[selected].map((item) =>
                    item.seq === seq
                        ? {
                              seq: item.seq,
                              value,
                          }
                        : item
                ),
            ],
        }));
    };

    const handleAddRow = () => {
        setMultiInfo((state) => ({
            ...state,
            [selected]: [
                ...state[selected],
                {
                    seq:
                        multiInfo[selected].reduce(
                            (pre, cur) => Math.max(pre, cur.seq),
                            0
                        ) + 1,
                    value: "",
                },
            ],
        }));
    };

    return (
        <React.Fragment>
            <tr>
                <td colSpan="2">
                    <ul className="nav nav-pills nav-fill">
                        {Object.keys(navObj).map((key) => (
                            <li
                                className="nav-item"
                                key={key}
                                // style={{
                                //     border: "1px solid #ced4da",
                                //     borderRadius: "5%",
                                //     marginRight: "10px",
                                // }}
                            >
                                <span
                                    className={`nav-link ${
                                        selected === key && "active"
                                    }`}
                                    onClick={() => handleClickNav(key)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {navObj[key]}
                                </span>
                            </li>
                        ))}
                    </ul>
                </td>
            </tr>

            {multiInfo[selected].map((item) => {
                return (
                    <Select
                        key={item.seq}
                        label={`${item.seq}번째 (${navObj[selected]})`}
                        name="data"
                        value={item.value}
                        onChange={(e) => handleChangeMultiInfo(e, item.seq)}
                        errors={[]}
                        options={[
                            { value: "", title: "선택해주세요" },
                            { value: "code2", title: "코드2" },
                            { value: "code3", title: "코드3" },
                            { value: "S", title: "코드4" },
                        ]}
                    />
                );
            })}
            <tr>
                <td colSpan="2">
                    <button
                        className="btn btn-block btn-outline-primary"
                        type="button"
                        onClick={handleAddRow}
                    >
                        (+)
                    </button>
                </td>
            </tr>
        </React.Fragment>
    );
};

export default SectionMultiSelect;
