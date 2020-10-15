import { USER_GET, USER_SIGN_IN, USER_SIGN_UP, USER_SIGN_OUT } from "../types";

const localUser = JSON.parse(localStorage.getItem("user"));
const initialState = localUser
    ? localUser
    : {
          name: "하경윤",
          email: "gkb10a@naver.com",
      };

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_GET:
            return;

        case USER_SIGN_IN:
            return action.payload;

        case USER_SIGN_UP:
            return action.payload;

        case USER_SIGN_OUT:
            return initialState;

        default:
            return state;
    }
};
