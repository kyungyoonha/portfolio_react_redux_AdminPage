import { AUTH_GET, AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERRORS } from "../types";

const initialState = {
    user: {},
    errors: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_GET:
            return {
                ...state,
                user: action.payload,
            };

        case AUTH_SIGN_IN:
            return {
                ...state,
                user: action.payload,
            };

        case AUTH_ERRORS:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    ...action.payload,
                },
            };

        case AUTH_SIGN_OUT:
            return initialState;

        default:
            return state;
    }
};
