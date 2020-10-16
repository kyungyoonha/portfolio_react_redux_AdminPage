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

export const validateMember = (name, value) => {
    switch (name) {
        case "username":
            return isEmpty(value) && "이름을 입력해주세요.";

        case "id":
            return value.length < 4 && "5자 이상 입력해주세요";

        case "pw":
            return (
                checkRegPassword(value) &&
                "비밀번호는 8자이상이며 숫자, 영어, 특수문자가 포함되어야 합니다."
            );
        case "birthday":
            return isEmpty(value) && "생년월일을 선택해주세요.";

        case "telnumber":
            if (isEmpty(value)) return "전화번호를 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        case "nickname":
            return isEmpty(value) && "별명을 입력해주세요.";

        // case "tourCnt":
        //     return checkNumber(value) && "숫자만 입력해주세요.";

        case "email":
            return checkEmail(value) && "이메일 형식에 맞게 작성해주세요.";

        default:
            return;
    }
};

export const validateDriver = (name, value) => {
    switch (name) {
        case "drivername":
            return isEmpty(value) && "이름을 입력해주세요.";

        case "id":
            return value.length < 4 && "5자 이상 입력해주세요";

        case "pw":
            return (
                checkRegPassword(value) &&
                "비밀번호는 8자이상이며 숫자, 영어, 특수문자가 포함되어야 합니다."
            );

        case "birthday":
            return isEmpty(value) && "생년월일을 선택해주세요.";

        case "telnumber":
            if (isEmpty(value)) return "전화번호를 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        default:
            return;
    }
};

export const validateManager = (name, value) => {
    switch (name) {
        case "username":
            return isEmpty(value) && "이름을 입력해주세요.";

        case "id":
            return value.length < 4 && "5자 이상 입력해주세요";

        case "pw":
            return (
                checkRegPassword(value) &&
                "비밀번호는 8자이상이며 숫자, 영어, 특수문자가 포함되어야 합니다."
            );
        case "level":
            return isEmpty(value) && "등급을 선택해주세요.";

        default:
            return;
    }
};

export const validateArea = (name, value) => {
    switch (name) {
        case "tourname":
            return isEmpty(value) && "관광지명을 입력해주세요.";

        case "nationcode":
        case "sidocode":
        case "areacode":
        case "tourcode":
        case "operatingtime":
            return isEmpty(value) && "선택해주세요";

        case "address":
            return isEmpty(value) && "주소를 입력해주세요.";

        //////////////
        case "telnumber":
        case "admissionfee":
            if (isEmpty(value)) return "입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        default:
            return;
    }
};

export const validateNation = (name, value) => {
    switch (name) {
        case "koreanname":
            return isEmpty(value) && "국가한국이름을 입력해주세요.";

        case "englishname":
            return isEmpty(value) && "국가영어이름을 입력해주세요.";

        case "code3":
            return isEmpty(value) && "국가코드 3자리를 입력해주세요.";

        case "code2":
            return isEmpty(value) && "국가코드 2자리를 입력해주세요.";
        default:
            return;
    }
};

export const validateRegion = (name, value) => {
    switch (name) {
        case "country":
        case "city":
        case "state":
            return isEmpty(value) && "선택해주세요";

        default:
            return;
    }
};

export const validateInfo = (name, value) => {
    switch (name) {
        case "tourName":
            if (isEmpty(value)) return "투어명을 입력해주세요.";
            return;

        case "country":
        case "city":
        case "state":
            return isEmpty(value) && "선택해주세요";

        case "tourCtg":
            return isEmpty(value) && "투어 종류를 선택해주세요.";

        case "tourDayCnt":
            if (isEmpty(value)) return "투어 일수를 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        case "guestNumMax":
            return isEmpty(value) && "최대 인원수를 입력해주세요.";

        case "price":
            if (isEmpty(value)) return "가격을 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        case "tourStartTime":
            return isEmpty(value) && "투어 시작시간을 선택해주세요.";

        case "guestId":
            return isEmpty(value) && "구매자 Id를 입력해주세요.";

        case "guestName":
            return isEmpty(value) && "구매자명을 입력해주세요.";

        default:
            return;
    }
};

export const validateCode = (name, value) => {
    switch (name) {
        case "tourName":
            if (isEmpty(value)) return "투어명을 입력해주세요.";
            return;

        case "country":
        case "city":
        case "state":
            return isEmpty(value) && "선택해주세요";

        case "tourCtg":
            return isEmpty(value) && "투어 종류를 선택해주세요.";

        case "tourDayCnt":
            if (isEmpty(value)) return "투어 일수를 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        case "guestNumMax":
            return isEmpty(value) && "최대 인원수를 입력해주세요.";

        case "price":
            return isEmpty(value) && "가격을 입력해주세요.";

        case "guestName":
            return isEmpty(value) && "구매자명을 입력해주세요.";

        case "tourStartTime":
            return isEmpty(value) && "투어 시작시간을 선택해주세요.";

        default:
            return;
    }
};

export const validatePush = (name, value) => {
    switch (name) {
        case ("pushName", "content"):
            if (isEmpty(value)) return "입력해주세요.";
            if (value.length > 50) return "50자까지 입력 가능합니다.";
            return;

        default:
            return;
    }
};

export const validateNotice = (name, value) => {
    switch (name) {
        case "title":
            return isEmpty(value) && "제목을 입력해주세요.";

        case "content":
            return isEmpty(value) && "내용을 입력해주세요.";

        default:
            return;
    }
};

export const validateService = (name, value) => {
    switch (name) {
        case "title":
            return isEmpty(value) && "제목을 입력해주세요.";

        case "contactNumber":
            if (isEmpty(value)) return "전화번호를 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        case "sendEmail":
            if (isEmpty(value)) return "이메일을 입력해주세요.";
            if (checkEmail(value)) return "이메일 형식에 맞게 작성해주세요.";
            return;

        case "sendContent":
            return isEmpty(value) && "내용을 입력해주세요.";

        default:
            return;
    }
};

const isEmpty = (input) => {
    if (String(input).trim() === "") return true;
    else return false;
};

const checkNumber = (input) => {
    const regexp = /^[0-9]*$/;
    if (!regexp.test(input)) return true;
    else return false;
};

// true 일때 에러 / false
const checkEmail = (input) => {
    if (!input) return false;
    const regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regexp.test(input)) return true;
    else return false;
};

const checkRegPassword = (password) => {
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
