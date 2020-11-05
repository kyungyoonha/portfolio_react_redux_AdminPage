import {
    AUTH_GET,
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT,
    AUTH_ERRORS,
    FORM_INITIALIZE,
} from "../types";
import api from "../../services";
import history from "../../history";
import { toast } from "react-toastify";

export const authAction_getMyInfo = () => async (dispatch) => {
    try {
        const user = await api.authAPI.getMyInfo();
        dispatch({
            type: AUTH_GET,
            payload: user,
        });
    } catch (e) {
        e.response && toast.error(e.response.data.error);
    }
};

export const authAction_logIn = (data) => async (dispatch) => {
    try {
        const user = (await api.authAPI.login(data)) || {};
        dispatch({
            type: AUTH_SIGN_IN,
            payload: user,
        });
        history.push("/");
    } catch (e) {
        toast.error(e.response.data.error);
    }
};

export const authAction_logout = () => async (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: FORM_INITIALIZE });
    dispatch({ type: AUTH_SIGN_OUT });
    history.push("/login");
};

export const authAction_errors = (errors) => {
    return {
        type: AUTH_ERRORS,
        payload: errors,
    };
};
