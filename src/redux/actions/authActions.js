import {
    AUTH_SIGN_IN,
    AUTH_SIGN_UP,
    AUTH_SIGN_OUT,
    AUTH_ERRORS,
} from "../types";
import api from "../../services";

export const authAction_logIn = (data) => async (dispatch) => {
    try {
        const user = (await api.authAPI.login(data)) || {};
        dispatch({
            type: AUTH_SIGN_IN,
            payload: user,
        });
    } catch (e) {
        dispatch({
            type: AUTH_ERRORS,
            payload: e.response.data.errors,
        });
    }
};

export const authAction_logOut = () => {
    localStorage.removeItem("user");
    return { type: AUTH_SIGN_OUT };
};

export const userAction_signUp = (data) => {
    const { email, name } = data; // pw

    // handle validate

    return {
        type: AUTH_SIGN_UP,
        payload: {
            email,
            name,
        },
    };
};

export const authAction_errors = (errors) => {
    return {
        type: AUTH_ERRORS,
        payload: errors,
    };
};
