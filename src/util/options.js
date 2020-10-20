import React, { useMemo } from 'react';
export const optionsCountry = (countryCtg) => {
    switch (countryCtg) {
        case "KOREA":
            return [{ value: "KOREA", title: "국내" }];
        default:
            return [
                { value: "", title: "선택해주세요" },
                { value: "THAILAND", title: "태국" },
                { value: "VIETNAM", title: "베트남" },
                { value: "EGYPT", title: "이집트" },
                { value: "MYANMAR", title: "미안마" },
            ];
    }
};

export const optionsCity = (city) => {
    if (city === "KOREA") {
        return [{ value: "KOREA", title: "국내" }];
    } else {
        return [
            { value: "", title: "선택해주세요" },
            { value: "THAILAND", title: "태국" },
            { value: "VIETNAM", title: "베트남" },
            { value: "EGYPT", title: "이집트" },
            { value: "MYANMAR", title: "미안마" },
        ];
    }
};

export const optionsRegion = (region) => {
    if (region === "KOREA") {
        return [{ value: "KOREA", title: "국내" }];
    } else {
        return [
            { value: "", title: "선택해주세요" },
            { value: "THAILAND", title: "태국" },
            { value: "VIETNAM", title: "베트남" },
            { value: "EGYPT", title: "이집트" },
            { value: "MYANMAR", title: "미안마" },
        ];
    }
};
