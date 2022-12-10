import { CLEAR_ALL_FILTER, SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD, TOGGLE_CATEGORY } from "../actionTypes/actionTypes";


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

export const toggleCategory = (category) => {
    return {
        type: TOGGLE_CATEGORY,
        payload: category,
    };
};

export const clearFilter = () => {
    return {
        type: CLEAR_ALL_FILTER,
    };
};