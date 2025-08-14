import SectionTitle from '../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import { IoRocket } from "react-icons/io5";
import { Rating } from 'react-simple-star-rating'

import './review.css'
import { useState } from 'react';


const AddReview = () => {

    const [rating, setRating] = useState(0);

    const { register, handleSubmit } = useForm();

    const handleRating = (rate) => {
        console.log(rate);
        setRating(rate);
    }

    const handleReview = (data) => {
        console.log(data, rating);

    }


    return (
         <div className='w-full h-full'>
            
            <div className="w-[80%] mx-auto mt-12">

                <SectionTitle heading={'give a review'} subheading={'Sharing is Caring!!!'}></SectionTitle>


                <div className='p-16 bg-gray-200 mb-12'>
                    <h1 className='text-center text-3xl'>RATE US</h1>


                    <form onSubmit={handleSubmit(handleReview)} >

                        <div className='flex justify-center mt-6'>
                             <Rating  onClick={handleRating}/>
                        </div>


                        <div className="form-control">
                            <label className="label flex my-6" htmlFor='like'>
                                <span className="label-tex font-bold text-black">Which recipe you liked most?</span>
                            </label>
                            <input name='like' id='like' placeholder='Recipe you liked most' className="input input-bordered py-8 w-full" {...register("like", {required: true})} />
                        </div>


                        <div className="form-control">
                            <label className="label flex my-6" htmlFor='suggestion'>
                                <span className="label-tex font-bold text-black">Do you have any suggestion for us?</span>
                            </label>
                            <input  name='suggestion' placeholder='Suggestion'  id='suggestion' className="input input-bordered py-8 w-full" {...register("suggestion", {required: true})} />
                        </div>


                        <div className="form-control">
                            <label className="label flex my-6" htmlFor='express'>
                                <span className="label-tex font-bold text-black">Kindly express your care in a short way.</span>
                            </label>
                            <textarea rows={5} name='express' placeholder='Review in detail'  id='express' className="p-4 w-full" {...register("express", {required: true})} />
                        </div>

                        
                        <div className="form-control mt-11 w-1/2 mx-auto">
                            <button type='submit' className="btn bg-[#D1A054] w-full">Send a Review <IoRocket />
                            </button>
                        </div>

                    </form>


                </div>

            </div>


        </div>
    );
};

export default AddReview;