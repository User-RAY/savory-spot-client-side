import React from 'react';

const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const pass = form.pass.value;

        console.log(email, pass);
        
    }



    return (

        <div className='min-h-screen flex justify-center items-center bg-[url("/authentication.png")]'>

            <div className='w-[80%] bg-[url("/authentication.png")] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.3)] mx-auto flex justify-center items-center p-12'>
                <div className='w-[50%]'>
                    <img src="/authentication2.png" alt="image" className='' />
                </div>
                <div className='text-black w-[50%] text-center'>
                    
                    <div className="card w-[80%] mx-auto shrink-0">
                        <h2 className='text-2xl font-bold'>LOGIN</h2>
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                            <label className="label flex my-2">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                            <label className="label flex my-2">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='pass' className="input input-bordered w-full" required />
                            <label className="label flex mt-2">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn bg-[#D1A054] w-full">Login</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        
        </div>
    );
};

export default Login;