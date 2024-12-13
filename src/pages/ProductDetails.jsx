import { Heart, Minus, Plus, Star, StarHalf } from "lucide-react"
import WristSizeSelector from "../components/WristSizeSelector"
import BandColorSelector from "../components/BandColorSelector"
import { useState } from "react"
import black from "./../assets/black.jpg"
import blue from "./../assets/blue.jpg"
import teal from "./../assets/teal.jpg"
import violet from "./../assets/violet.jpg"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/slices/cartSlice"

const ProductDetails = () => {

  const dispatch = useDispatch()
  const [wristSize, setWristSize] = useState(null);
  const [bandColor, setBandColor] = useState(null);

  const cart = useSelector((state) => state.cart);
  console.log("cartcartcart", cart)

  const handleAddToCart = () => {
    const newItem = {
      id: "product1", // Unique ID for the product
      name: "Classy Modern Smartwatch",
      color: "black",
      size: "M",
      quantity: 1, // Number of items to add
      price: 79.00, // Price per item
    };

    // Dispatch the addToCart action
    dispatch(addToCart(newItem));
  };

  return (
    <section className="flex items-center justify-center gap-6">
      <div id="product-media" className="flex-1">
        <div className="w-3/4 mx-auto ">
          <img src={bandColor === "black" ? black : bandColor === "blue" ? blue : bandColor === "teal" ? teal : violet} alt="product's image" className="h-full w-full" />
        </div>
      </div>
      <div id="product-info" className="flex-1 space-y-3 ">
        <h1 className="font-semibold text-3xl " >Classy Modern Smart watch</h1>
        <div className="flex items-center gap-4" >
          <div className="flex items-center gap-1">
            <Star size={15} color="gold" fill="gold" />
            <Star size={15} color="gold" fill="gold" />
            <Star size={15} color="gold" fill="gold" />
            <Star size={15} color="gold" />
            <StarHalf size={15} color="gold" />
          </div>
          <p>(2 reviews)</p>
        </div>
        <p><span className="text-gray-500 text-lg line-through">$99.00</span>
          <span className="font-semibold text-2xl text-primary " > $79.00
          </span>
        </p>
        <p className="text-gray-500 text-sm" >I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.</p>
        <div className="flex items-start gap-8" >  
          <div>
            <h3 className="text-gray-500 text-sm ">Type</h3>
            <h5 className="font-semibold" >Watch</h5>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm ">Model Number</h3>
            <h5 className="font-semibold" >Forerunner 290XT</h5>
          </div>
        </div>

        <BandColorSelector bandColor={bandColor} setBandColor={setBandColor} />
        <WristSizeSelector wristSize={wristSize} setWristSize={setWristSize} />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 rounded-md border-2 ">
            <button className="border-r-2 px-3 py-1.5">
              <Minus />
            </button>
            <p className="px-4" >0</p>
            <button className="border-l-2 px-3 py-1.5">
              <Plus />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="text-white bg-primary font-semibold py-1.5 px-4 rounded-md hover:bg-blue-500 duration-500 ">Add to Cart</button>
          <Heart className="text-primary"/>
        </div>
      </div>
    </section>
  )
}
export default ProductDetails