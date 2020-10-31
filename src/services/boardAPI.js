import axios from "axios";

export const boardAPI = {
    async getData(pageCtg, pageId) {
        try {
            const res = await axios.get(`/${pageCtg}/${pageId}`);
            return res.data;
        } catch (e) {
            console.error(e);
        }
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
