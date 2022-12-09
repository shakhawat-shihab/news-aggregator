import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    news: newsReducer,
    filter: filterReducer
})

export default rootReducer;