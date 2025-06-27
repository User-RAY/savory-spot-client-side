import React from 'react';

const Register = () => {
    return (
        <div className='py-60 bg-[url("/authentication.png")]'>

            <div className='w-[80%] bg-[url("/authentication.png")] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.3)] mx-auto flex justify-center items-center p-12'>
            
                <div className='text-black w-[50%] text-center'>
                    <h1 className='text-4xl'>Register Form</h1>
                </div>
                
               <div className='w-[50%]'>
                    <img src="/authentication2.png" alt="image" className='' />
                </div>

            </div>
        
        </div>
    );
};

export default Register;