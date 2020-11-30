import {
    AUTH_GET,
    AUTH_SIGN_OUT,
    AUTH_ERRORS,
    FORM_INITIALIZE,
} from "../types";
import history from "../../history";
import { toast } from "react-toastify";
import api from "../../services/api";

export const authAction_getMyInfo = (config) => async (dispatch) => {
    try {
        const res = await api.get("/auth/me", config || {});
        console.log(res);
        dispatch({
            type: AUTH_GET,
            payload: res.data.user,
        });
    } catch (e) {
        dispatch(authAction_logout());
        e.response && toast.error(e.response.data.error);
    }
};

export const authAction_logIn = (data) => async (dispatch) => {
    try {
        const resToken = await api.post("/auth/login", data);
        const token = resToken.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        // 토큰 재설정
        dispatch(authAction_getMyInfo(config));
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
