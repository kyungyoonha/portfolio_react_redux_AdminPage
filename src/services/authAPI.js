import defaultAPI from "./defaultAPI";

// 로그인 성공시 토큰반환
// user = { email: '', name: '', token: ''}
export const authAPI = {
    async login(inputs) {
        const res = await defaultAPI.post("/auth/login", inputs);
        const user = res.data;

        defaultAPI.defaults.headers.common["Authorization"] =
            "Bearer " + user.token;

        localStorage.setItem("user", JSON.stringify(user));
        return user;
    },
};
