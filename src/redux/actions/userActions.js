import { USER_SIGN_IN, USER_SIGN_UP } from "../types";

export const userAction_signIn = (data) => {
    const { email, name } = data;

    // handle validate

    return {
        type: USER_SIGN_IN,
        payload: {
            email,
            name,
        },
    };
};

export const userAction_signUp = (data) => {
    const { email, name } = data; // pw

    // handle validate

    return {
        type: USER_SIGN_UP,
        payload: {
            email,
            name,
        },
    };
};
