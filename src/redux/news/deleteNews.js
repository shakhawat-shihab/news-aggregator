import { removeNews } from "../actions/newsActions";


const deleteNews = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://al-bengali-news.onrender.com/news/${id}`,
            {
                method: 'delete',
                headers: {
                    "Content-type": 'application/json'
                }
            })
        const data = await res.json();
        if (data?.acknowledged) {
            // delete news locally (After successfully deleted from mongo db)
            // console.log('inside data?.acknwoledged ')
            dispatch(
                removeNews(id)
            )
        }
    }
}

export default deleteNews;