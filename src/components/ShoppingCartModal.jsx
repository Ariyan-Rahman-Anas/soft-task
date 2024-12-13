import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { toast } from 'sonner';

const ShoppingCartModal = ({ cart }) => {
    const dispatch = useDispatch()
    const { items, totalPrice, totalQuantity } = cart || {};
    const [openModal, setOpenModal] = useState(false);

    const handleCheckout = () => {
        dispatch(clearCart())
        toast.success("Process Succeeded!")
        setOpenModal(false)
    }

    return (
        <div className="mx-auto flex w-full items-center justify-center">
            {/* Modal Opening and Checkout Button */}
            {items?.length >= 1 && (
                <button
                    onClick={() => setOpenModal(true)}
                    className="absolute -bottom-14 text-black bg-[#FFBB5A] px-4 py-1.5 font-semibold rounded-full shadow-lg hover:bg-amber-500 duration-500"
                >
                    Checkout <span className="ml-2 bg-white px-2 rounded">{items?.length}</span>
                </button>
            )}

            {/* Modal Content */}
            <div
                onClick={() => setOpenModal(false)}
                className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'
                    } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
            >
                <div
                    onClick={(e_) => e_.stopPropagation()}
                    className={`absolute w-[98%] md:w-3/4 lg:w-1/2 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'
                        }`}
                >
                    {/* Modal Header */}
                    <h1 className="font-semibold text-xl text-left mb-5">Your Cart</h1>

                    {/* Cart Items Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2 ">Item</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Qnt</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items?.map(({image, name, color, size, quantity, totalPrice }, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-2 flex items-center gap-2">
                                            <div className='w-[4rem]'>
                                                <img src={image} alt="item's image" className='w-full h-full rounded-md'/>
                                            </div>
                                            {name}
                                        </td>
                                        <td className='capitalize'>{color}</td>
                                        <td className="text-center">{size.toUpperCase()}</td>
                                        <td className="text-center">{quantity}</td>
                                        <td className="text-center">${totalPrice.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cart Summary */}
                    <div className="mt-6 flex items-center justify-between ">
                        <p className="font-semibold text-lg">Total</p>
                        <div className='flex items-center justify-between gap-4 md:gap-12 font-semibold '>
                            <p>{totalQuantity}</p>
                            <p>${totalPrice?.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row justify-end gap-y-2 gap-x-6 mt-6">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="border-2 rounded-md px-4 py-1.5 font-semibold hover:text-white hover:bg-blue-500 hover:border-blue-500 duration-500  "
                        >
                            Continue Shopping
                        </button>
                        <button
                            onClick={handleCheckout}
                            className="rounded-md px-6 py-1.5 font-semibold text-white bg-primary hover:bg-blue-500 duration-500 "
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartModal;