import defaultAPI from "./defaultAPI";

// 로그인 성공시 토큰반환
// user = { email: '', name: '', token: ''}
export const authAPI = {
    async login(inputs) {
        try {
            const res = await defaultAPI.post("/auth/login", inputs);
            const user = res.data.data;

            defaultAPI.defaults.headers.common["Authorization"] =
                "Bearer " + user.token;

            localStorage.setItem("user", JSON.stringify(user));
            return user;
        } catch (e) {
            alert(e.response.data.message);
            console.error(e.message);
        }
    },
};
