import { updateNews } from "../actions/newsActions"


const updateNewsData = (news, id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/news/${id}`,
            {
                method: 'put',
                body: JSON.stringify(news),
                headers: {
                    "Content-type": 'application/json'
                }
            })
        const data = await res.json()

        // console.log('data after update api ', data);
        if (data?.acknwoledged) {
            // adding product locally (After successfully added to mongo db)
            dispatch(
                updateNews({
                    _id: id,
                    ...news,
                })
            )
        }
    }
}

export default updateNewsData;