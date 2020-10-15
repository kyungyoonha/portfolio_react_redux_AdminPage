import { useCallback, useState } from "react";

export default (initialValue, validateFunc, setErrors) => {
    const [inputs, setInputs] = useState(initialValue);

    const handleChangeInputs = useCallback(
        (e) => {
            const { name, value, type, checked } = e.target;
            const error = validateFunc(name, value);

            if (type === "checkbox") {
                setInputs((state) => ({
                    ...state,
                    [name]: {
                        ...state[name],
                        [value]: checked,
                    },
                }));
            } else {
                setInputs((state) => ({ ...state, [name]: value }));
                setErrors((state) => ({ ...state, [name]: error }));

                if (name === "nationtype") {
                    setInputs((state) => ({
                        ...state,
                        nationcode: value === "1" ? "KOREA" : "",
                    }));
                }
                // 소속
                // else if (name === "businesstype") {
                //     setInputs((state) => ({
                //         ...state,
                //         companyName: "",
                //     }));
                // }

                // 오디오 세부 유/무
                else if (name === "subaudioYN" && value === "N") {
                    setInputs((state) => ({
                        ...state,
                        audioList: [],
                    }));
                }

                // 오디오 메인 유/무
                else if (name === "mainaudioYN" && value === "N") {
                    setInputs((state) => ({
                        ...state,
                        audioMain: {
                            korea: { title: "", script: "", files: [] },
                            english: { title: "", script: "", files: [] },
                            japan: { title: "", script: "", files: [] },
                            china: { title: "", script: "", files: [] },
                        },
                    }));
                }
                // 투어 일수 당일 / 기간 설정
                else if (name === "tourDayCntCheck") {
                    setInputs((state) => ({
                        ...state,
                        tourDayCnt: value === "one" ? "1" : "",
                    }));
                }
            }
        },
        [setErrors, validateFunc]
    );

    return [inputs, setInputs, handleChangeInputs];
};
