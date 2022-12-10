import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { changeToSortByFirstUpload, changeToSortByLastUpload, clearFilter, toggleCategory } from "../../../redux/actions/filterAction";
import { SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD } from "../../../redux/actionTypes/actionTypes";
import loadNewsData from "../../../redux/news/fetchNews";

const Home = () => {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const allNews = useSelector((state) => state.news.news);
    const filters = useSelector((state) => state.filter.filters);
    const { firstUpload, category } = filters;
    let content;

    useEffect(() => {
        // fetch("http://localhost:5000/products")
        //   .then((res) => res.json())
        //   .then((data) => dispatch(loadProduct(data.data)));
        dispatch(loadNewsData())
    }, [dispatch]);

    // console.log('allNews ', allNews);
    // console.log('firstUpload ', firstUpload);


    //sorting
    if (allNews.length) {

        content = allNews
            .sort((a, b) => {
                if (firstUpload) {
                    return new Date(a.publishedAt) - new Date(b.publishedAt)
                }
                if (!firstUpload) {
                    return new Date(b.publishedAt) - new Date(a.publishedAt)
                }
            })
            .filter(x => {
                if (category.length) {
                    return category.includes(x.category)
                }
                return x;
            })
            .map((x) => (
                <NewsCard key={x?._id} news={x} />
            ))
    }

    const activeClass = "text-white  bg-slate-800 border-white";

    return (
        <div className='max-w-7xl gap-14 mx-auto my-10' >
            <div className="mb-6 flex justify-between">
                <div>
                    <button
                        className={`border mx-2 px-3 py-2 rounded-full font-semibold ${category?.includes('business') ? activeClass : null} `}
                        // className={`border mx-2 px-3 py-2 rounded-full font-semibold  `}
                        onClick={() => dispatch(toggleCategory('business'))}
                    >
                        Business
                    </button>
                    <button
                        className={`border mx-2 px-3 py-2 rounded-full font-semibold ${category?.includes('politics') ? activeClass : null}  `}
                        // className={`border mx-2 px-3 py-2 rounded-full font-semibold  `}
                        onClick={() => dispatch(toggleCategory('politics'))}
                    >
                        Politics
                    </button>
                    <button
                        className={`border mx-2 px-3 py-2 rounded-full font-semibold ${category?.includes('technology') ? activeClass : null}  `}
                        // className={`border mx-2 px-3 py-2 rounded-full font-semibold  `}
                        onClick={() => dispatch(toggleCategory('technology'))}
                    >
                        Technology
                    </button>
                    <button
                        className={`border mx-2 px-3 py-2 rounded-full font-semibold  `}
                        // className={`border mx-2 px-3 py-2 rounded-full font-semibold  `}
                        onClick={() => dispatch(clearFilter())}
                    >
                        Clear
                    </button>
                </div>

                <div>
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
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' >
                {
                    // allNews.map(x => <NewsCard key={x?._id} news={x} />)
                    content
                }
            </div>
        </div>
    );
};

export default Home;
