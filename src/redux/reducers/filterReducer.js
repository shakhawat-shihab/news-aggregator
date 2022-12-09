import { SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD } from "../actionTypes/actionTypes";

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
        default: {
            return state
        }
    }
}


export default filterReducer;