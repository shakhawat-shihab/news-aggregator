import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrEdit } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import loadNewsData from "../../../redux/news/fetchNews";
import deleteNews from "../../../redux/news/deleteNews";

const NewsList = () => {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const allNews = useSelector(state => state?.news.news)
    const { pathname } = useLocation();
    useEffect(() => {
        dispatch(loadNewsData());
    }, [dispatch]);

    return (
        <div class='flex flex-col justify-center items-center h-full w-full '>
            <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header class='px-5 py-4 border-b border-gray-100'>
                    <div class='font-semibold text-gray-800'>News</div>
                </header>

                <div class='overflow-x-auto p-3'>
                    <table class='table-auto w-full'>
                        <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th></th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>News Title</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Author</div>
                                </th>
                                {/* <th class='p-2'>
                                    <div class='font-semibold text-left'>Description</div>
                                </th> */}
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>News Source</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-center'>Edit</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-center'>Delete</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class='text-sm divide-y divide-gray-100'>
                            {allNews.map(({ title, author, content, url, _id }) => (
                                <tr>
                                    <td class='p-2'>
                                        <input type='checkbox' class='w-5 h-5' value='id-1' />
                                    </td>
                                    <td class='p-2'>
                                        <div class='font-medium text-gray-800'>{title}</div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='text-left capitalize'>{author}</div>
                                    </td>
                                    {/* <td class='p-2'>
                                        <div class='text-left capitalize'>{content}</div>
                                    </td> */}
                                    <td class='p-2'>
                                        <div class='text-left font-medium text-indigo-500'>
                                            {url}
                                        </div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='flex justify-center'>
                                            <button>
                                                <Link to={`${pathname}/update-news/${_id}`}>
                                                    <GrEdit />
                                                </Link>
                                            </button>
                                        </div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='flex justify-center'>
                                            <button
                                                onClick={() => {
                                                    dispatch(deleteNews(_id))
                                                    // console.log('delete clicked')
                                                }}
                                            >
                                                <svg
                                                    class='w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    viewBox='0 0 24 24'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default NewsList;