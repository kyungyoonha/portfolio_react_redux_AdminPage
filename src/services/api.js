import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default api;
