import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NewsCard from "../../../components/NewsCard/NewsCard";
import loadNewsData from "../../../redux/news/fetchNews";
import updateNewsData from "../../../redux/news/putNews";

const UpdateNews = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [news, setNews] = useState({});
    const { id } = useParams();
    const allNews = useSelector((state) => state.news.news);

    useEffect(() => {
        // dispatch(loadNewsData())
        // console.log(news);
        // console.log(id);
        const newsToUpdate = allNews.find(x => x._id === id);
        setNews(newsToUpdate);
    }, [news, id]);

    const submit = (data) => {
        const news = {
            title: data.title,
            author: data.author,
            category: data.category,
            urlToImage: data.urlToImage,
            description: data.description,
            content: data.content,
            url: data.url,
        };
        const date = new Date();
        news.publishedAt = date;

        console.log(news);
        //update news data to mongo db
        dispatch(updateNewsData(news, id))
    };


    return (
        // <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        <div className='flex justify-center items-center h-full '>
            <div className="bg-white p-10 shadow-lg rounded-md my-5">
                <h2 className="pb-8 text-3xl text-center "> Update News </h2>
                {
                    Object.keys(news).length !== 0
                    &&
                    <form
                        className=' flex flex-wrap gap-3 max-w-3xl justify-between '
                        onSubmit={handleSubmit(submit)}
                    >

                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='model'>
                                Title
                            </label>
                            <input type='text' id='model' {...register("title", { required: true })} defaultValue={news?.title} />
                        </div>
                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='author'>
                                Author
                            </label>
                            <input type='text' name='author' id='author' {...register("author")} defaultValue={news?.author} />
                        </div>

                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-3' htmlFor='category'>
                                Category
                            </label>
                            <select name='category' id='category' {...register("category")} defaultValue={news?.category}>
                                <option value=''>Select Category</option>
                                <option value='technology'>Technology</option>
                                <option value='business'>Business</option>
                                <option value='politics'>Politics</option>
                            </select>
                        </div>

                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='image'>
                                Image
                            </label>
                            <input type='text' name='image' id='image' {...register("urlToImage", { required: true })} defaultValue={news?.urlToImage} />
                        </div>


                        <div className='flex flex-col w-full '>
                            <label className='mb-2' htmlFor='source'>
                                Source of news (link)
                            </label>
                            <textarea
                                type='text'
                                name='url'
                                id='url'
                                {...register("url", { required: true })}
                                defaultValue={news?.url}
                            />
                        </div>


                        <div className='flex flex-col w-full '>
                            <label className='mb-2' htmlFor='description'>
                                Short Description
                            </label>
                            <textarea
                                type='text'
                                name='description'
                                id='description'
                                {...register("description", { required: true })}
                                defaultValue={news?.description}
                            />
                        </div>


                        <div className='flex flex-col w-full '>
                            <label className='mb-2' htmlFor='content'>
                                Full News
                            </label>
                            <textarea
                                type='text'
                                name='content'
                                id='content'
                                {...register("content", { required: true })}
                                defaultValue={news?.content}
                            />
                        </div>

                        <div className='flex justify-center items-center w-full'>
                            <button
                                className=' px-4 py-2 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                }

            </div>

        </div>
        // </div>
    );
};

export default UpdateNews;