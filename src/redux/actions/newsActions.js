import { ADD_TO_HISTORY, LOAD_NEWS, REMOVE_FROM_HISTORY } from "../actionTypes/actionTypes";


export const loadNews = (data) => {
    return {
        type: LOAD_NEWS,
        payload: data,
    };
};

export const addToHistory = (data) => {
    return {
        type: ADD_TO_HISTORY,
        payload: data,
    };
};

export const removeFromHistory = (data) => {
    return {
        type: REMOVE_FROM_HISTORY,
        payload: data,
    };
};







