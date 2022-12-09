import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { changeToSortByFirstUpload, changeToSortByLastUpload } from "../../../redux/actions/filterAction";
import { SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD } from "../../../redux/actionTypes/actionTypes";
import loadNewsData from "../../../redux/news/fetchNews";

const Home = () => {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const allNews = useSelector((state) => state.news.news);
    const filters = useSelector((state) => state.filter.filters);
    const { firstUpload } = filters;

    useEffect(() => {
        // fetch("http://localhost:5000/products")
        //   .then((res) => res.json())
        //   .then((data) => dispatch(loadProduct(data.data)));
        dispatch(loadNewsData())
    }, [dispatch]);

    console.log('allNews ', allNews);
    console.log('firstUpload ', firstUpload);

    const activeClass = "text-white  bg-indigo-500 border-white";

    return (
        <div
            className='max-w-7xl gap-14 mx-auto my-10'
        // className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'
        >
            <div className="mb-6 flex justify-end">
                <button
                    className={`border mx-2 px-3 py-2 rounded-full font-semibold ${!firstUpload ? activeClass : null} `}
                    // className={`border mx-2 px-3 py-2 rounded-full font-semibold  `}
                    onClick={() => dispatch(changeToSortByFirstUpload())}
                >
                    Last Upload
                </button>
                <button
                    className={`border mx-2 px-3 py-2 rounded-full font-semibold ${firstUpload ? activeClass : null}  `}
                    // className={`border mx-2 px-3 py-2 rounded-full font-semibold  `}
                    onClick={() => dispatch(changeToSortByLastUpload())}
                >
                    First Upload
                </button>
            </div>

            {/* <h1>This is home page</h1> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' >
                {
                    allNews.map(x => <NewsCard news={x} />)
                }
            </div>
        </div>
    );
};

export default Home;
