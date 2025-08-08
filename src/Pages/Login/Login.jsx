import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'

const Login = () => {

    const captchaCheck = useRef(null);

    const [disabled, setDisabled] = useState(true);

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    const cat = location.state?.tabIndex || ''


    useEffect(() => {
        loadCaptchaEnginge(6);
    },[])


    const handleValidation = () => {
        const val = captchaCheck.current.value;

        if (validateCaptcha(val)) {
            Swal.fire({
                position: "top-start",
                icon: "success",
                title: "Validated",
                showConfirmButton: false,
                timer: 1500
            });
            setDisabled(false);       
        }
        
    }


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const pass = form.pass.value;

        signIn(email, pass)
        .then(() => {
            navigate(from, { replace: true, state: { tabIndex: cat } });
            Swal.fire({
                position: "top-start",
                icon: "success",
                title: "Login succesfull",
                showConfirmButton: false,
                timer: 1500
            });
            
        })
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

                            <div className="form-control">
                            <label className="label flex my-2">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaCheck} placeholder="type here" name='captcha' className="input input-bordered w-full" required />
                            <button type='button' className='btn btn-xs w-full mt-2 bg-blue-400' onClick={handleValidation}>Validate</button>
                            </div>

                            <div className="form-control mt-6">
                            <button disabled={disabled} type='submit' className="btn bg-[#D1A054] w-full">Login</button>
                            </div>
                        </form>
                        <p>Do not have account? <NavLink to='/register' className='text-blue-500' >Register</NavLink></p>
                    </div>


                </div>
            </div>
        
        </div>
    );
};

export default Login;