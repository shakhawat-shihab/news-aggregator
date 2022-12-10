import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiCalendarCheck, BiEdit, BiLinkAlt, BiTimeFive } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
    const { id } = useParams();
    const allNews = useSelector((state) => state.news.news);
    const news = allNews.find(x => x._id === id);
    const date = new Date(news?.publishedAt);
    // console.log(news);
    return (
        <div className='container'>
            <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
                <div className='w-100  rounded-xl text-center'>
                    <img src={news?.urlToImage} alt={news?.title} style={{ 'height': '500px', 'width': '70%' }} className='rounded mx-auto border ' />
                </div>

                <div className='mx-20'>
                    <div className=' my-3 '>
                        <h2 className='font-bold text-3xl '>{news?.title}</h2>
                    </div>
                    <div>
                        <p className='flex items-center my-2'>
                            <BiCalendarCheck className='text-xl text-blue-700' />
                            <span className='pl-1 mr-5 text-base text-blue-900'>
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
                            <span className='px-2 text-sm'>{news?.author}</span>
                        </p>

                        <p className='flex items-center mt-2 '>
                            <BiLinkAlt className='text-xl' />
                            <span className='px-2 text-sm'>
                                <a href={news?.url} target="_blank" rel="noopener noreferrer">{news?.url?.trim().slice(0, 35).concat('...')}</a>
                            </span>
                        </p>
                    </div>



                    <div className='mb-3 mt-4 '>
                        <p className='text-xl text-black text-justify '>
                            {news?.content}
                        </p>
                    </div>

                </div>




            </div >
        </div>

    );
};

export default NewsDetails;