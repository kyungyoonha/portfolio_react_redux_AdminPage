import { USER_SIGN_IN, USER_SIGN_UP, USER_SIGN_OUT } from "../types";
import api from "../../services";

export const userAction_logIn = (data) => async (dispatch) => {
    try {
        const user = (await api.authAPI.login(data)) || {};
        dispatch({
            type: USER_SIGN_IN,
            payload: user,
        });
    } catch (e) {
        console.error(e);
    }
};

export const userAction_logOut = () => {
    localStorage.removeItem("user");
    return { type: USER_SIGN_OUT };
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
