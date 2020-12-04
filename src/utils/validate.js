import pageConfig from "../siteConfig/pageConfig.json";
import errorMessageObj from "../siteConfig/errorMessageObj";

export const validateAll = (pageId, inputs) => {
    let isValid = false;
    let checkedErrors = {};

    Object.keys(inputs).forEach((key) => {
        if (key === "pwCheck") {
            if (inputs.pw !== inputs.pwCheck) {
                checkedErrors["pwCheck"] = "비밀번호가 일치하지 않습니다.";
            }
        }

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

        case "sendEmail":
        case "email":
            return checkEmail(value) && "이메일 형식에 맞게 작성해주세요.";

        case "contents":
            return value.length > 50 && "50자까지 입력 가능합니다.";

        case "grade":
            if (checkNumber(value)) {
                return "숫자만 입력 가능합니다.";
            } else if (value < 0 || value > 5) {
                return "0 ~ 5까지만 입력 가능합니다.";
            } else {
                return;
            }
        case "telnumber":
        case "contactNumber":
            if (checkNumber(value)) {
                return "숫자만 입력 가능합니다.";
            } else if (value.length < 10) {
                return "10자 이상입력해주세요";
            } else {
                return;
            }

        case "code3":
            return value.length >= 4 && "3자리까지 입력 가능합니다.";
        case "code2":
            return value.length >= 3 && "2자리까지 입력 가능합니다.";
        case "touridx":
        case "tourmember":
        case "target":
        case "tourdays":
        case "price":
        case "admissionfee":
            return checkNumber(value) && "숫자만 입력 가능합니다.";

        default:
            return;
    }
};

export const isEmpty = (input) => {
    return String(input).trim() === "" ? true : false;
};

export const checkNumber = (input) => {
    const regexp = /^[0-9]*$/;
    return !regexp.test(input) ? true : false;
};

// true 일때 에러 / false
export const checkEmail = (input) => {
    if (!input) return false;
    const regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    return !regexp.test(input) ? true : false;
};

export const checkRegPassword = (password) => {
    const numbers = /[0-9]/;
    const spellings = /[a-zA-Z]/;
    const specialCharacters = /[~!@#$%&*]/;

    return !numbers.test(password) ||
        !spellings.test(password) ||
        !specialCharacters.test(password) ||
        password.length < 8 ||
        password.length > 16
        ? true
        : false;
    // if (
    //     !numbers.test(password) ||
    //     !spellings.test(password) ||
    //     !specialCharacters.test(password) ||
    //     password.length < 8 ||
    //     password.length > 16
    // ) {
    //     return true;
    // } else {
    //     return false;
    // }
};
