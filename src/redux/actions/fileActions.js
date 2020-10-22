import { FILE_IMAGE_FETCH, FILE_AUDIO_FETCH } from "../types";
import axios from "axios";

export const fileAction_getImages = (id) => async (dispatch) => {
    try {
        const res = await axios.get(
            `http://localhost:3000/json/tourpicture.json`
        );

        dispatch({
            type: FILE_IMAGE_FETCH,
            payload: res.data.data.filter((item) => item.touridx === id),
        });
    } catch (e) {
        console.error("fileAction_getImages Error", e);
    }
};
export const fileAction_getAudios = (id) => async (dispatch) => {
    try {
        const res = await axios.get(
            `http://localhost:3000/json/touraudio.json`
        );

        dispatch({
            type: FILE_AUDIO_FETCH,
            payload: {
                audios: res.data.data.filter((item) => item.touridx === id),
                main: res.data.data.filter(
                    (item) => item.touridx === id && item.mainaudioYN === "Y"
                ),
                sub: res.data.data.filter(
                    (item) => item.touridx === id && item.mainaudioYN === "N"
                ),
            },
        });
    } catch (e) {
        console.error("fileAction_getAudios Error", e);
    }
};
