import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, GET_CONTENT, REMOVE_FROM_HISTORY, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    news: [],
    history: []
}
const newsReducer = (state = initialState, action) => {
    let selectedNews = {}
    if (action.payload) {
        selectedNews = state.history.find(
            (news) => news._id === action.payload._id
        );
    }

    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                news: action.payload,
            };
        case ADD_CONTENT:
            return {
                ...state,
                news: [...state.news, action.payload],
            };

        case UPDATE_CONTENT:
            return {
                ...state,
                news: state.news.filter(x => {
                    if (x._id === action.payload.id) {
                        return action.payload;
                    }
                    return x;
                })
            };

        case DELETE_CONTENT:
            return {
                ...state,
                news: state.news.filter(x => {
                    if (x._id !== action.payload) {
                        return x;
                    }
                })
            };

        case ADD_TO_HISTORY:
            if (selectedNews) {
                const exceptSelectedNews = state.history.filter(
                    (news) => news._id !== selectedNews._id
                );
                selectedNews.count = selectedNews.count + 1;
                return {
                    ...state,
                    history: [...exceptSelectedNews, selectedNews],
                };
            }
            return {
                ...state,
                history: [...state.history, { ...action.payload, count: 1 }],
            };

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