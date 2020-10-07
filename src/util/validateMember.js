export const validateAll = (inputs, checkFunc) => {
    let isValid = false;
    let checkedErrors = {};

    Object.keys(inputs).forEach((key) => {
        checkedErrors[key] = checkFunc(key, inputs[key]);
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

        case "contactNumber":
            return isEmpty(value) && "번호를 입력해주세요.";

        case "nickname":
            return isEmpty(value) && "별명을 입력해주세요.";

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
            return isEmpty(value) && "전화번호를 입력해주세요.";

        default:
            return;
    }
};

const isEmpty = (string) => {
    if (string.trim() === "") return true;
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

// const numbers = /[0-9]/;
//     const spellings = /[a-zA-Z]/;
//     const specialCharacters = /[~!@#$%&*]/;
//     const { pw } = this.state;

//     if (
//       !numbers.test(pw) ||
//       !spellings.test(pw) ||
//       !specialCharacters.test(pw) ||
//       pw.length < 8 ||
//       pw.length > 16
//     )
