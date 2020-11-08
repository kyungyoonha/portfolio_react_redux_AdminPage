import pageConfig from "../siteConfig/pageConfig.json";

const errorMessageObj = {
    username: "이름을 입력해주세요.",
    id: "아이디를 입력해주세요.",
    pw: "비밀번호를 입력해주세요.",
    pqssword: "비밀번호를 입력해주세요.",
    birthday: "생년월일을 입력해주세요.",
    telnumber: "전화번호를 입력해주세요.",
    nickname: "별명을 입력해주세요.",
    email: "이메일을 입력해주세요.",
    drivername: "기사이름을 입력해주세요.",
    level: "등급을 선택해주세요.",
    nationcodeidx: "국가타입을 선택해주세요.",
    areacodeidx: "지역코드를 선택해주세요.",
    tourcode: "투어코드를 선택해주세요",
    operatingtime: "영업시간을 선택해주세요.",
    address: "주소를 입력해주세요",
    admissionfee: "입장료를 입력해주세요.",
    koreanname: "국가한국이름을 입력해주세요.",
    englishname: "국가영어이름을 입력해주세요.",
    code3: "국가코드 3자리를 입력해주세요.",
    code2: "국가코드 2자리를 입력해주세요.",
    tourtype: "투어 종류를 선택해주세요.",
    touridx: "관광지코드를 입력해주세요.",
    tourdays: "투어 일수를 입력해주세요.",
    tourstartday: "투어 시작일을 입력해주세요.",
    purchasedate: "구매일자를 선택해주세요",
    purchasetype: "구매방식을 선택해주세요",
    price: "금액을 입력해주세요.",
    purchaseuser: "구매자id를 입력해주세요",
    title: "제목을 입력해주세요",
    contents: "내용을 입력해주세요.",
    contactNumber: "전화번호를 입력해주세요",
    sendContent: "내용을 입력해주세요.",
    sidocode: "시도 코드를 입력해주세요",
    sidoname: "시도 이름을 입력해주세요",
    areacode: "지역 코드를 입력해주세요",
    areaname: "지역 이름을 입력해주세요.",
    sendEmail: "이메일을 입력해주세요.",
};

export const validateAll = (inputs, checkFunc) => {
    let isValid = false;
    let checkedErrors = {};

    Object.keys(inputs).forEach((key) => {
        if (checkFunc(key, inputs[key])) {
            checkedErrors[key] = checkFunc(key, inputs[key]);
        }
    });

    if (Object.keys(checkedErrors).length === 0) {
        isValid = true;
    }

    return { isValid, checkedErrors };
};

export const validateAll222 = (apiurl, inputs) => {
    const pageId = apiurl.split("/")[2];
    let isValid = false;
    let checkedErrors = {};

    Object.keys(inputs).forEach((key) => {
        let errorMessage = validate(pageId, key, inputs[key]);
        if (errorMessage) {
            checkedErrors[key] = errorMessage;
        }
    });

    if (Object.keys(checkedErrors).length === 0) {
        isValid = true;
    }

    return { isValid, checkedErrors };
};

export const validate = (pageId, name, value) => {
    if (!pageId) return;

    const checkList = pageConfig[pageId].validate;

    if (checkList.indexOf(name) > -1 && isEmpty(value)) {
        return errorMessageObj[name];
    }

    // 필수 체크
    switch (name) {
        case "password":
        case "pw":
            return (
                checkRegPassword(value) &&
                "비밀번호는 8자이상이며 숫자, 영어, 특수문자가 포함되어야 합니다."
            );

        case "email":
            return checkEmail(value) && "이메일 형식에 맞게 작성해주세요.";

        case "contents":
            return value.length > 50 && "50자까지 입력 가능합니다.";

        case "grade":
            return (value < 0 || value > 5) && "0 ~ 5까지만 입력 가능합니다.";

        case "target":
        case "contactNumber":
        case "tourdays":
        case "price":
        case "admissionfee":
        case "telnumber":
            return checkNumber(value) && "숫자만 입력 가능합니다.";

        default:
            return;
    }
};

export const validateTour = (name, value) => {
    switch (name) {
        case "tourname":
            return isEmpty(value) && "관광지명을 입력해주세요.";

        case "nationcodeidx":
        case "areacodeidx":
        case "tourcode":
        case "operatingtime":
            return isEmpty(value) && "선택해주세요";

        case "address":
            return isEmpty(value) && "주소를 입력해주세요.";

        case "telnumber":
        case "admissionfee":
            if (isEmpty(value)) return "입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        default:
            return;
    }
};

export const validateInfo = (name, value) => {
    switch (name) {
        case "tourtype":
            return isEmpty(value) && "투어 종류를 선택해주세요.";

        case "touridx":
            return isEmpty(value) && "관광지코드를 입력해주세요.";

        case "tourdays":
            if (isEmpty(value)) return "투어 일수를 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        case "tourstartday":
            return isEmpty(value) && "투어 시작일을 입력해주세요.";
        default:
            return;
    }
};

export const validateAudio = (name, value) => {
    switch (name) {
        default:
            return;
    }
};

export const isEmpty = (input) => {
    if (String(input).trim() === "") return true;
    else return false;
};

export const checkNumber = (input) => {
    const regexp = /^[0-9]*$/;
    if (!regexp.test(input)) return true;
    else return false;
};

// true 일때 에러 / false
export const checkEmail = (input) => {
    if (!input) return false;
    const regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regexp.test(input)) return true;
    else return false;
};

export const checkRegPassword = (password) => {
    const numbers = /[0-9]/;
    const spellings = /[a-zA-Z]/;
    const specialCharacters = /[~!@#$%&*]/;

    if (
        !numbers.test(password) ||
        !spellings.test(password) ||
        !specialCharacters.test(password) ||
        password.length < 8 ||
        password.length > 16
    ) {
        return true;
    } else {
        return false;
    }
};
