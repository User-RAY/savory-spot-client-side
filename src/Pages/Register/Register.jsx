import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom";

import Swal from 'sweetalert2'

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { setUser, createUser, updateUser} = useContext(AuthContext)
    
    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(() => {
            const updatedata = {displayName: data.name};
            updateUser(updatedata)
            .then(() => {
                setUser((prev) => {
                    return {...prev, updatedata}
                }) 
                Swal.fire({
                    position: "top-start",
                    icon: "success",
                    title: "Registration succesfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            })            
        })

    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-[url("/authentication.png")]'>

            <div className='w-[80%] bg-[url("/authentication.png")] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.3)] mx-auto flex justify-center items-center p-12'>
            
                <div className='text-black w-[50%] text-center'>
                    <h2 className='text-2xl font-bold'>SIGN UP</h2>
                    
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label flex my-2">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} name='name' className="input input-bordered w-full"  />
                            <div className="min-h-10 mt-1">{errors.name && <span className="text-red-500">Name is required</span>}</div>
                        </div>

                        <div className="form-control">
                        <label className="label flex my-2">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" {...register("email")} name='email' className="input input-bordered w-full" required />
                        <div className="min-h-10 mt-1">{errors.email && <span className="text-red-500">Email is required</span>}</div>
                        </div>

                        <div className="form-control">
                        <label className="label flex my-2">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6 })} name='password' className="input input-bordered w-full" required />
                        <div className="min-h-10 mt-1">
                            {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-500">Minimum length 6 is required</span>}
                        </div>

                        </div>

                        <div className="form-control mt-6">
                        <button type='submit' className="btn bg-[#D1A054] w-full">Sign up</button>
                        </div>
                    </form>
                    <p>Already have account? <NavLink to='/login' className='text-blue-500' >Login</NavLink></p>

                </div>
                
               <div className='w-[50%]'>
                    <img src="/authentication2.png" alt="image" className='' />
                </div>

            </div>
        
        </div>
    );
};

export default Register;