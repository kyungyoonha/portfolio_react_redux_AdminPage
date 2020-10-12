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
        case "user_id":
            return value.length < 4 && "5자 이상 입력해주세요";

        case "password":
            return (
                checkRegPassword(value) &&
                "비밀번호는 8자이상이며 숫자, 영어, 특수문자가 포함되어야 합니다."
            );
        case "name":
            return isEmpty(value) && "이름을 입력해주세요.";

        case "birth":
            return isEmpty(value) && "생년월일을 선택해주세요.";

        case "contactNumber":
            if (isEmpty(value)) return "전화번호를 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        case "nickname":
            return isEmpty(value) && "별명을 입력해주세요.";

        case "tourCnt":
            return checkNumber(value) && "숫자만 입력해주세요.";

        case "email":
            return checkEmail(value) && "이메일을 확인해주세요.";

        default:
            return;
    }
};

export const validateDriver = (name, value) => {
    switch (name) {
        case "driver_id":
            return value.length < 4 && "5자 이상 입력해주세요";

        case "country":
            return isEmpty(value) && "국가를 선택해주세요.";

        case "state":
            return isEmpty(value) && "시/도를 입력해주세요.";

        case "city":
            return isEmpty(value) && "지역을 입력해주세요.";

        case "name":
            return isEmpty(value) && "이름을 입력해주세요.";

        case "contactNumber":
            if (isEmpty(value)) return "전화번호를 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        case "licenseNumber":
            return checkNumber(value) && "숫자만 입력 가능합니다.";

        default:
            return;
    }
};

export const validateManager = (name, value) => {
    switch (name) {
        case "manager_id":
            return value.length < 4 && "5자 이상 입력해주세요";

        case "password":
            return (
                checkRegPassword(value) &&
                "비밀번호는 8자이상이며 숫자, 영어, 특수문자가 포함되어야 합니다."
            );

        case "name":
            return isEmpty(value) && "이름을 입력해주세요.";

        case "contactNumber":
            if (isEmpty(value)) return "전화번호를 입력해주세요.";
            if (checkNumber(value)) return "숫자만 입력 가능합니다.";
            return;

        case "email":
            if (isEmpty(value)) return "이메일을 입력해주세요.";
            if (checkEmail(value)) return "이메일을 확인해주세요.";
            return;

        default:
            return;
    }
};

export const validateArea = (name, value) => {
    switch (name) {
        case "country":
        case "city":
        case "state":
            return isEmpty(value) && "선택해주세요";

        case "place":
            return isEmpty(value) && "관광지 코드를 입력해주세요.";

        case "address":
            return isEmpty(value) && "주소를 입력해주세요.";

        case "placeName":
            return isEmpty(value) && "관광지 이름을 입력해주세요.";

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
            if (checkEmail(value)) return "이메일을 확인해주세요.";
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