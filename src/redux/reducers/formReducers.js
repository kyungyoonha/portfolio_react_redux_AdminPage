import { FORM_INIT, FORM_CHANGE, FORM_INITIALIZE, FORM_ERRORS } from "../types";

const initialState = {
    apiurl: "",
    inputs: {},
    errors: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FORM_INIT:
            return action.payload;

        case FORM_CHANGE:
            return {
                ...state,
                inputs: action.payload,
            };

        case FORM_INITIALIZE:
            // return {
            //     ...state,
            //     inputs: action.payload,
            // };
            return initialState;

        case FORM_ERRORS:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    ...action.payload,
                },
            };

        default:
            return state;
    }
};
