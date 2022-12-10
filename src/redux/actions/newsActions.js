import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, GET_CONTENT, REMOVE_FROM_HISTORY, UPDATE_CONTENT } from "../actionTypes/actionTypes";


export const loadNews = (data) => {
    return {
        type: GET_CONTENT,
        payload: data,
    };
};

export const addNews = (data) => {
    return {
        type: ADD_CONTENT,
        payload: data,
    };
};

export const updateNews = (data) => {
    return {
        type: UPDATE_CONTENT,
        payload: data,
    };
};

export const removeNews = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id,
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







