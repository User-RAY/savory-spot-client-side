import SectionTitle from "../Shared/SectionTitle";

import image from '/featured.jpg'

const Feature = () => {
    return (
        <div className=" bg-[url('/featured.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
            <div className=" bg-black bg-opacity-50 p-16">
                <div className="w-3/4 mx-auto">
                    <SectionTitle heading={'from our menu'} subheading={'Check it out'} color={'white'} border={'fff'} ></SectionTitle>
                    <div className="flex justify-between items-center gap-12 ml-24 ">
                        <img src={image} alt="" className="w-96"/>
                        <div className="">
                            <p>March 20, 2023</p>
                            <h3 className="my-2">WHERE CAN I GET SOME?</h3>
                            <p className="w-[80%]">Craving something unforgettable? Our signature dish of the month is here to satisfy your appetite! Whether you're a longtime fan or a first-time guest, this mouthwatering creation blends bold flavors with fresh, locally sourced ingredients. Available now at all our locations for a limited time—come and get it while it's hot!</p>
                            <button className="border-0 border-b-2 border-white text-white rounded-b-md px-4 py-2">Read more</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Feature;