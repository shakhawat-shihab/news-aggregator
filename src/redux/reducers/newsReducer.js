import { ADD_TO_HISTORY, LOAD_NEWS, REMOVE_FROM_HISTORY } from "../actionTypes/actionTypes";

const initialState = {
    news: [],
    history: []
}
const newsReducer = (state = initialState, action) => {
    const selectedNews = state.history.find(
        (news) => news._id === action.payload._id
    );
    switch (action.type) {
        case LOAD_NEWS:
            return {
                ...state,
                news: action.payload,
            };
        case ADD_TO_HISTORY:
            if (selectedNews) {
                return {
                    ...state
                }
            }
            else {
                return {
                    ...state,
                    history: [...state.history, action?.payload]
                };
            }
        case REMOVE_FROM_HISTORY:
            if (selectedNews) {
                return {
                    ...state,
                    history: state.history.filter(x => x._id !== action?.payload._id)
                };
            }
            else {
                return {
                    ...state
                }
            }
        default:
            return {
                ...state,
            };
    }
}


export default newsReducer;