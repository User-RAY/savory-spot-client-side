

const MenuItem = ({item={}}) => {
    const {name, image, recipe, price} = item;

    return (
        <div className="text-black flex items-center gap-4">

            <img src={image} alt="menuPic" className="w-28 h-24 rounded-tl-none rounded-full" />

            <div>
                <h3 className="uppercase text-lg mb-4">{name}------------------</h3>
                <p  className="text-gray-400">{recipe}</p>
            </div>

            <p className="self-start text-yellow-500">${price}</p>
            
        </div>
    );
};

export default MenuItem;