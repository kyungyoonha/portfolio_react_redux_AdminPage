import axios from "axios";

// 로그인 성공시 토큰반환
// user = { email: '', name: '', token: ''}
export const authAPI = {
    async getMyInfo() {
        const resUser = await axios.get("/auth/me");
        return resUser.data.user;
    },
    async login(inputs) {
        const resToken = await axios.post("/auth/login", inputs);

        const token = resToken.data.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("token", JSON.stringify(token));

        const user = this.getMyInfo();
        return user;
    },
};
