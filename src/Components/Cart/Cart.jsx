import { RxCross2 } from "react-icons/rx";
const Cart = ({cart}) => {
    const {product_title, product_image, price, description} = cart
    return (
        <div className='max-w-[1280px] mx-auto shadow-md p-8 flex gap-8'>
            <div>
                <img src={product_image} className="w-[200px]" alt={product_title} />
            </div>
            <div className="flex justify-between w-[900px] ">
                <div className="space-y-4">
                <h2 className="font-semibold text-2xl">{product_title}</h2>
                <p>{description}</p>
                <p className="font-semibold text-xl">Price: ${price}</p>
                </div>
                <div className="flex items-start">
                <RxCross2 className="text-xl" />
                </div>
            </div>
        </div>
    );
};

export default Cart;