import defaultAPI from "./defaultAPI";

const boardAPI = {
    async getData(pageCtg, pageId) {
        try {
            const res = await defaultAPI.post(`/${pageCtg}/${pageId}`);
            return res.data.data;
        } catch (e) {
            console.log(e.response.data.message);
            console.error(e);
        }
    },
};
