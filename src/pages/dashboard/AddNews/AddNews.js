import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addNewsData from "../../../redux/news/postNews";
// import { addProduct } from "../../redux/actions/productAction";
// import addProductData from "../../redux/thunk/products/addProductData";
import './AddNews.css';

const AddNews = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
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
        //add product data to mongo db
        dispatch(addNewsData(news))
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <div className="bg-white p-10 shadow-lg rounded-md my-5">
                <h2 className="pb-8 text-3xl text-center "> Add News </h2>
                <form
                    className=' flex flex-wrap gap-3 max-w-3xl justify-between '
                    onSubmit={handleSubmit(submit)}
                >

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='model'>
                            Title
                        </label>
                        <input type='text' id='model' {...register("title", { required: true })} />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='author'>
                            Author
                        </label>
                        <input type='text' name='author' id='author' {...register("author")} />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-3' htmlFor='category'>
                            Category
                        </label>
                        <select name='category' id='category' {...register("category")}>
                            <option value=''>Select Category</option>
                            <option value='technology'>Technology</option>
                            <option value='sports'>Sports</option>
                            <option value='politics'>Politics</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='image'>
                            Image
                        </label>
                        <input type='text' name='image' id='image' {...register("urlToImage", { required: true })} />
                    </div>


                    <div className='flex flex-col w-full '>
                        <label className='mb-2' htmlFor='url'>
                            Source of news (link)
                        </label>
                        <textarea
                            type='text'
                            name='url'
                            id='url'
                            {...register("url", { required: true })}
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

            </div>

        </div>
    );
};

export default AddNews;
