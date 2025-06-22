import React from 'react';

const Card = ({image, title, ingredient}) => {
    return (
        <div className='text-black'>


            <div className="card bg-base-100 w-[90%] ">
                <figure>
                    <img
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body justify-center items-center bg-[#F3F3F3]">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-center my-4'>{ingredient}</p>
                    <div className="card-actions justify-center">
                    <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-2 border-[#BB8506] uppercase">Add to Cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Card;