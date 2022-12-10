import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToHistory, removeFromHistory } from '../../redux/actions/newsActions';
import { AiFillDelete } from "react-icons/ai";
import { BiTimeFive, BiEdit, BiCalendarCheck, BiLinkAlt, BiPurchaseTag } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";

const NewsCard = ({ news }) => {
    const dispatch = useDispatch();
    let { pathname } = useLocation();
    const date = new Date(news?.publishedAt);

    (pathname === '/' || pathname === '/home') && (pathname = '/news');
    // console.log('pathname ', pathname);

    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>

            <div className='text-end mb-2'>
                {pathname.includes("history") && (
                    <button
                        onClick={() => dispatch(removeFromHistory(news))}
                        className='bg-red-500  hover:bg-red-800 rounded-full py-2 px-2 flex-1 text-white text-bold'
                    >
                        <AiFillDelete />
                    </button>
                )}
            </div>

            <div className='w-100  rounded-2xl'>
                <img src={news.urlToImage} alt={news.title} style={{ 'height': '180px', 'width': '100%' }} className='rounded-3xl border ' />
            </div>

            <div className=''>

            </div>
            <div className=' my-3 '>
                <h2 className='font-bold '>{news.title}</h2>
            </div>

            {/* <p className='text-center font-semibold mb-3'>Author: {news.author}</p> */}


            <div>
                <p className='flex items-center my-2'>
                    <BiCalendarCheck className='text-xl text-blue-700' />
                    <span className='pl-1 mr-5 text-sm text-blue-900'>
                        {
                            `${date.toLocaleDateString()}`
                        }
                    </span>
                    <BiTimeFive className='text-xl text-orange-600' />
                    <span className='pl-1 text-sm text-orange-900'>
                        {
                            `${date.getHours()} : ${date.getMinutes()}`
                        }
                    </span>
                </p>

                <p className='flex items-center '>
                    <BiEdit className='text-xl' />
                    <span className='px-2 text-sm'>{news.author}</span>
                </p>

                <p className='flex items-center mt-2 '>
                    <BiLinkAlt className='text-xl' />
                    <span className='px-2 text-xs'>
                        <a href={news.url} target="_blank" rel="noopener noreferrer">{news?.url?.trim().slice(0, 35).concat('...')}</a>
                    </span>
                </p>

                <p className='flex items-center mt-2 '>
                    <BiPurchaseTag className='text-xl' />
                    <span className='px-2 text-sm capitalize'>
                        {
                            news?.category
                        }
                    </span>
                </p>


                {
                    pathname.includes("history") &&
                    <p className='flex items-center mt-2 '>
                        <GrFormView className='text-2xl' />
                        <span className='px-1 text-xs'>
                            {news?.count}
                        </span>
                    </p>
                }

            </div>



            <div className='mb-3 mt-4 '>
                <p className='text-base text-black text-justify '>
                    {news.description.concat('... ... ...')}
                </p>
            </div>


            <div className='flex gap-2 mx-auto mt-auto '>
                {/* {!pathname.includes("recent") && ( */}
                <Link to={`${pathname}/${news?._id}`} className='' >
                    <button
                        onClick={() => dispatch(addToHistory(news))}
                        className='bg-indigo-500 rounded-full py-2 px-4 flex-1 text-white text-bold hover:bg-indigo-700 '
                    >
                        Read More
                    </button>
                    {/* {news?._id} */}
                </Link>
                {/* )} */}
            </div>

        </div >
    );
};

export default NewsCard;