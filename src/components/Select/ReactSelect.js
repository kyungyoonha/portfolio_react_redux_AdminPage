import React, { useState } from "react";
import axios from "axios";

import AsyncSelect from "react-select/async";

const ReactSelect = ({
    value,
    searchId,
    searchItems,
    onChange,
    placeholder,
    disabled,
}) => {
    const [options, setOptions] = useState([]);
    // 필터
    const filterOptions = (options, inputValue) => {
        if (!options.length) return;
        return options.filter((item) => {
            return (
                item.value.toLowerCase().includes(inputValue.toLowerCase()) ||
                item.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        });
    };

    const loadOptions = async (inputValue) => {
        const res = await axios.get(
            `http://localhost:3000/json/${searchId}.json`
        );

        const result = res.data.data.map((item) => {
            let label = "";
            searchItems.forEach((key) => {
                label += item[key] + " | ";
            });

            return {
                value: item.idx,
                label,
                //label: `${item[searchItems[0]]} (${item[searchItems[1]]})`,
                name: searchId + "idx",
            };
        });

        setOptions(result);
        return filterOptions(result, inputValue);
    };

    return (
        <div>
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                placeholder={placeholder + " 검색해주세요."}
                isDisabled={disabled}
                value={options.find((item) => item.value === value) || ""}
                onChange={(e) =>
                    onChange({
                        target: e,
                    })
                }
            />
        </div>
    );
};

export default React.memo(ReactSelect);
