import { useForm } from "react-hook-form"

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='py-60 bg-[url("/authentication.png")]'>

            <div className='w-[80%] bg-[url("/authentication.png")] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.3)] mx-auto flex justify-center items-center p-12'>
            
                <div className='text-black w-[50%] text-center'>
                    <h2 className='text-2xl font-bold'>SIGN UP</h2>
                    
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label flex my-2">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} name='name' className="input input-bordered w-full"  />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>

                        <div className="form-control">
                        <label className="label flex my-2">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" {...register("email")} name='email' className="input input-bordered w-full" required />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>

                        <div className="form-control">
                        <label className="label flex my-2">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6 })} name='password' className="input input-bordered w-full" required />
                        {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className="text-red-500">Minimum length 6 is required</span>}

                        </div>

                        <div className="form-control mt-6">
                        <button type='submit' className="btn bg-[#D1A054] w-full">Sign up</button>
                        </div>
                    </form>
                </div>
                
               <div className='w-[50%]'>
                    <img src="/authentication2.png" alt="image" className='' />
                </div>

            </div>
        
        </div>
    );
};

export default Register;