import { useCallback, useState } from "react";

export default (initialValue, validateFunc, setErrors) => {
    const [inputs, setInputs] = useState(initialValue);

    const handleChangeInputs = useCallback(
        (e) => {
            const { name, value, checked } = e.target;
            const error = validateFunc(name, value);

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

            // Check Box => 여행 태그
            else if (name === "tourTags") {
                setInputs((state) => ({
                    ...state,
                    tourTags: {
                        ...state.tourTags,
                        [name]: checked,
                    },
                }));
            }

            // // 오디오 세부 유/무
            // else if (name === "hasAudio" && value === "no") {
            //     setAudioList([]);
            // }
            // // 오디오 메인 유/무
            // else if (name === "hasAudioMain" && value === "no") {
            //     setAudioMain(initialAudioMain);
            // }
        },
        [setErrors, validateFunc]
    );

    return [inputs, setInputs, handleChangeInputs];
};
