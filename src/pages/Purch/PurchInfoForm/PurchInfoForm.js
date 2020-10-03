import React, { useState } from "react";
import history from "../../../history";
import Template from "../../../components/Template/Template";
import validateInput from "../../../util/validateInput";
import {
    FormLayout,
    Input,
    Select,
    RatioMulti,
    RatioSingle,
    Textarea,
} from "../../../components/Form/Form";
import {
    optionsCity,
    optionsCountry,
    optionsRegion,
} from "../../../util/options";

const PurchInfoForm = () => {
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        user_id: "",
        password: "",
        name: "",
        birth: "",
        contactNumber: "",
        nickname: "",
        email: "",
        address: "",
        tourCnt: "",
        characteristic: "",
        tourTags: {},
        recieveEmail: "수신",
        recieveMessage: "수신",
        etc: "",
    });

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;

        setInputs((state) => ({
            ...state,
            [name]: value,
        }));

        // 국적선택 시
        if (name === "countryCtg" && value === "KOREA") {
            setInputs((state) => ({
                ...state,
                country: "KOREA",
            }));
        }

        // 유효값 체크
        const error = validateInput(name, value);
        setErrors((state) => ({
            ...state,
            [name]: error,
        }));
    };

    const handleClickInsert = () => {};

    return (
        <Template title="구매정보 관리 추가" navCtg="purch">
            <div className="template__top">
                <h4 className="mb-4">추가하기</h4>
                <div>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClickInsert}
                    >
                        추가하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        뒤로가기
                    </button>
                </div>
            </div>
            <form style={{ margin: "0 15px" }}>
                <div className="no-Gutter2 row">
                    <FormLayout size="half">
                        <Input
                            label="투어 이름"
                            name="tourName"
                            value={inputs.tourName}
                            onChange={handleChangeInputs}
                            errors={errors}
                        />

                        <RatioSingle
                            label="국가"
                            name="countryCtg"
                            value={inputs.countryCtg}
                            onChange={handleChangeInputs}
                            options={[
                                { value: "KOREA", title: "국내" },
                                { value: "OVERSEAS", title: "국외" },
                            ]}
                        />
                        {inputs.countryCtg !== "KOREA" && (
                            <Select
                                label=""
                                name="country"
                                value={inputs.country}
                                onChange={handleChangeInputs}
                                errors={errors}
                                options={optionsCountry(inputs.countryCtg)}
                            />
                        )}
                        <Select
                            label="시/도"
                            name="state"
                            value={inputs.state}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsCity(inputs.state)}
                        />
                        <Select
                            label="지역"
                            name="city"
                            value={inputs.city}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsRegion(inputs.city)}
                        />

                        <RatioSingle
                            label="투어 구분"
                            name="tourCtg"
                            value={inputs.tourCtg}
                            onChange={handleChangeInputs}
                            options={[
                                { value: "taxi", title: "택시 투어" },
                                { value: "nomal", title: "일반 투어" },
                            ]}
                        />
                        <RatioSingle
                            label="투어 일수"
                            name="tourDayCntCheck"
                            value={inputs.tourDayCntCheck}
                            onChange={handleChangeInputs}
                            options={[
                                { value: false, title: "당일" },
                                { value: true, title: "기간설정" },
                            ]}
                        />
                        {inputs.tourDayCntCheck && (
                            <Input
                                label=""
                                name="tourDayCnt"
                                value={inputs.tourDayCnt}
                                onChange={handleChangeInputs}
                                errors={errors}
                            />
                        )}
                    </FormLayout>

                    <FormLayout size="half">
                        <Input
                            label="누적투어수"
                            name="tourCnt"
                            value={inputs.tourCnt}
                            onChange={handleChangeInputs}
                            errors={errors}
                        />
                        <Select
                            label="외향/내향"
                            name="characteristic"
                            value={inputs.characteristic}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={[
                                { value: "", title: "선택해주세요." },
                                { value: "외향", title: "외향" },
                                { value: "내향", title: "내향" },
                            ]}
                        />

                        <RatioMulti
                            label="여행태그"
                            name="tourTags"
                            value={inputs.tourTags}
                            onChange={handleChangeInputs}
                            options={[
                                { value: "tiger", title: "호랑이" },
                                { value: "dog", title: "강아지" },
                                { value: "monkey", title: "원숭이" },
                                { value: "bear", title: "곰돌이" },
                            ]}
                        />

                        <RatioSingle
                            label="이메일 수신"
                            name="recieveEmail"
                            value={inputs.recieveEmail}
                            onChange={handleChangeInputs}
                            options={[
                                { value: "agree", title: "수신" },
                                { value: "disagree", title: "미수신" },
                            ]}
                        />

                        <RatioSingle
                            label="문자 수신"
                            name="recieveMessage"
                            value={inputs.recieveMessage}
                            onChange={handleChangeInputs}
                            options={[
                                { value: "agree", title: "수신" },
                                { value: "disagree", title: "미수신" },
                            ]}
                        />

                        <Textarea
                            label="기타"
                            name="etc"
                            value={inputs.ect}
                            onChange={handleChangeInputs}
                            rows={6}
                        />
                    </FormLayout>
                </div>
            </form>
        </Template>
    );
};

export default PurchInfoForm;
