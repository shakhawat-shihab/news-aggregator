import { loadNews } from "../actions/newsActions"


const loadNewsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://al-bengali-news.onrender.com/news')
        const data = await res.json()

        // console.log('data ', data?.data);
        if (data?.data?.length) {
            dispatch(loadNews(data.data))
        }
    }
}
export default loadNewsData