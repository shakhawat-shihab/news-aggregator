import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../../components/NewsCard/NewsCard";

// import loadNewsData from "../../../redux/news/fetchNews";

const History = () => {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const historyNews = useSelector((state) => state.news.history);

    // useEffect(() => {
    //     // fetch("http://localhost:5000/products")
    //     //   .then((res) => res.json())
    //     //   .then((data) => dispatch(loadProduct(data.data)));
    //     dispatch(loadNewsData())
    // }, [dispatch]);

    console.log('historyNews ', historyNews);

    return (
        <div
            className='max-w-7xl gap-14 mx-auto my-10'
        // className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'
        >
            {/* <h1>This is home page</h1> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' >
                {
                    historyNews
                        .sort((b, a) => a.count - b.count)
                        .map(x => <NewsCard news={x} />)
                }
            </div>
        </div>
    );
};

export default History;
