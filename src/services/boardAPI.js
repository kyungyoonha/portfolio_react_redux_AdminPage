import axios from "axios";

export const boardAPI = {
    async getData(apiurl) {
        const res = await axios.get(apiurl);
        return res.data;
    },

    async insertData(apiurl, data) {
        const res = await axios.post(`${apiurl}/insert`, data);
        return res.data;
    },

    async updateData(apiurl, data) {
        const res = await axios.post(`${apiurl}/update`, data);
        return res.data;
    },
};
