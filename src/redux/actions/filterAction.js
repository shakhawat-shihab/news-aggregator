import { SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD } from "../actionTypes/actionTypes";


export const changeToSortByFirstUpload = () => {
    return {
        type: SORT_BY_LAST_UPLOAD,
    };
};

export const changeToSortByLastUpload = () => {
    return {
        type: SORT_BY_FIRST_UPLOAD,
    };
};