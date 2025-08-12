import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaClipboardList } from "react-icons/fa";




const Reservation = () => {

    const { register, handleSubmit } = useForm()


    const handleReservation = (data) => {
        console.log(data);
        
    }


    return (
         <div className='w-full h-full'>

            <div className="w-[80%] mx-auto mt-12">
                <SectionTitle heading={'book a table'} subheading={'reservation'}></SectionTitle>

                <div>

                    <form onSubmit={handleSubmit(handleReservation)} className='grid grid-cols-3 gap-12'>

                        <div className="form-control">
                            <label className="label flex my-1" htmlFor='date'>
                                <span className="label-tex font-bold text-black">Date*</span>
                            </label>
                            <input type='date' name='date' id='date' className="input input-bordered w-full" {...register("date", {required: true})} />
                        </div>

                        <div className="form-control">
                            <label className="label flex my-1"  htmlFor='time'>
                                <span className="label-tex font-bold text-black">Time*</span>
                            </label>
                            <input type='time' name='time' id='time' className="input input-bordered w-full" {...register("time", {required: true})} />
                        </div>


                        <div className="form-control">
                            <label className="label flex my-1" htmlFor='guest'>
                                <span className="label-tex font-bold text-black" >Guest*</span>
                            </label>

                            <select name="guest" id='guest' className="input input-bordered w-full" {...register("guest", {required:true})}>
                                <option value="1">1 Person</option>
                                <option value="2">2 Person</option>
                                <option value="3">3 Person</option>
                                <option value="4">4 Person</option>
                                <option value="5">5 Person</option>
                                <option value="6">6 Person</option>
                            </select>
                        </div>


                        <div className="form-control">
                            <label className="label flex my-1" htmlFor='name'>
                                <span className="label-tex font-bold text-black" >Name*</span>
                            </label>
                            <input type='text' placeholder='Your Name' name='name' id='name' className="input input-bordered w-full" {...register("name", {required:true})} />
                        </div>



                        <div className="form-control">
                            <label className="label flex my-1" htmlFor='phone'>
                                <span className="label-tex font-bold text-black" >Phone*</span>
                            </label>
                            <input type='number' placeholder='Phone Number' name='phone' id='phone' className="input input-bordered w-full" {...register("phone", {required: true})} />
                        </div>



                        <div className="form-control">
                            <label className="label flex my-1" htmlFor='email'>
                                <span className="label-tex font-bold text-black" >Email*</span>
                            </label>
                            <input type='email' placeholder='Email' name='email' id='email' className="input input-bordered w-full" {...register("email", { required: true})} />
                        </div>

                        <div className="form-control col-start-2">
                            <button type='submit' className="btn bg-[#D1A054] w-full">Book a Table <FaClipboardList />
                            </button>
                        </div>


                    </form>

                </div>


            </div>

        </div>
    );
};

export default Reservation;