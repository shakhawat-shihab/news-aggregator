import { addNews } from "../actions/newsActions"

const addNewsData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/news',
            {
                method: 'post',
                body: JSON.stringify(product),
                headers: {
                    "Content-type": 'application/json'
                }
            })
        const data = await res.json()

        if (data?.acknwoledged) {
            // adding product locally (After successfully added to mongo db)
            dispatch(
                addNews({
                    ...product,
                    _id: data.insertedId
                })
            )
        }
    }
}

export default addNewsData;