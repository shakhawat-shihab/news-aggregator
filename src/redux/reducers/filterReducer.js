import { CLEAR_ALL_FILTER, SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD, TOGGLE_CATEGORY } from "../actionTypes/actionTypes";

const initialState = {
    filters: {
        category: [],
        firstUpload: true,
    },
}
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_FIRST_UPLOAD:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    firstUpload: true
                }
            };
        case SORT_BY_LAST_UPLOAD:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    firstUpload: false
                }
            };
        case TOGGLE_CATEGORY:
            if (state.filters.category.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        category: state.filters.category.filter(x => x !== action.payload)
                    }
                };
            }
            else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        category: [...state.filters.category, action.payload]
                    }
                };
            }
        case CLEAR_ALL_FILTER:
            return {
                filters: {
                    firstUpload: true,
                    category: []
                }
            };


        default: {
            return state
        }
    }
}


export default filterReducer;