import { FILE_IMAGE_FETCH, FILE_AUDIO_FETCH } from "../types";

const initialState = {
    audios: [],
    audioMain: [],
    audioSub: [],
    images: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FILE_IMAGE_FETCH:
            return {
                ...state,
                images: action.payload,
            };

        case FILE_AUDIO_FETCH:
            return {
                ...state,
                audios: action.payload.audios,
                audioMain: action.payload.main,
                audioSub: action.payload.sub,
            };

        default:
            return state;
    }
};
