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

                // 국가 선택
                if (name === "countryCtg") {
                    setInputs((state) => ({
                        ...state,
                        country: value === "KOREA" ? "KOREA" : "",
                    }));
                }
                // 소속
                else if (name === "belong") {
                    setInputs((state) => ({
                        ...state,
                        companyName: "",
                    }));
                }

                // 오디오 세부 유/무
                else if (name === "hasAudio" && value === "no") {
                    setInputs((state) => ({
                        ...state,
                        audioList: [],
                    }));
                }

                // 오디오 메인 유/무
                else if (name === "hasAudioMain" && value === "no") {
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
