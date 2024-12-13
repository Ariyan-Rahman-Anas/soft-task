import { Heart, Minus, Plus, Star, StarHalf } from "lucide-react";
import WristSizeSelector from "../components/WristSizeSelector";
import BandColorSelector from "../components/BandColorSelector";
import { useState } from "react";
import black from "./../assets/black.jpg";
import blue from "./../assets/blue.jpg";
import teal from "./../assets/teal.jpg";
import violet from "./../assets/violet.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import ShoppingCartModal from "../components/ShoppingCartModal";
import { toast } from "sonner";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [wristSize, setWristSize] = useState(null);
  const [bandColor, setBandColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const cart = useSelector((state) => state.shoppingCart);

  const handleAddToCart = () => {
    if (!wristSize || !bandColor) {
      toast.error("Please select both color and size before adding to the cart.")
      return;
    }

    const image =
      bandColor === "black"
        ? black
        : bandColor === "blue"
          ? blue
          : bandColor === "teal"
            ? teal
            : violet;

    const newItem = {
      id: "product-1",
      image,
      name: "Classy Modern Smartwatch",
      color: bandColor,
      size: wristSize,
      quantity: quantity,
      price: wristSize === "S" ? 69 : wristSize === "M" ? 79 : wristSize === "L" ? 89 : 99,
    };
    dispatch(addToCart(newItem));
    toast.success("Added in your Cart")
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* product images */}
        <div id="product-media" className="flex-1">
          <div className="w-full lg:w-3/4 mx-auto">
            <img
              src={
                bandColor === "black"
                  ? black
                  : bandColor === "blue"
                    ? blue
                    : bandColor === "teal"
                      ? teal
                      : violet
              }
              alt="product's image"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* product details */}
        <div id="product-info" className="flex-1 space-y-3">
          <h1 className="font-semibold text-3xl">Classy Modern Smartwatch</h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star size={15} color="gold" fill="gold" />
              <Star size={15} color="gold" fill="gold" />
              <Star size={15} color="gold" fill="gold" />
              <Star size={15} color="gold" />
              <StarHalf size={15} color="gold" />
            </div>
            <p>(2 reviews)</p>
          </div>

          <p className="space-x-2" >
            <span className="text-gray-500 text-lg line-through">$99.00</span>
            <span className="font-semibold text-2xl text-primary">$79.00</span>
          </p>

          <p className="text-gray-500 text-sm">
            I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
          </p>

          {/* product type and model */}
          <div className="flex items-start gap-8">
            <div>
              <h3 className="text-gray-500 text-sm">Type</h3>
              <h5 className="font-semibold">Watch</h5>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">Model Number</h3>
              <h5 className="font-semibold">Forerunner 290XT</h5>
            </div>
          </div>

          {/* product color and size */}
          <BandColorSelector bandColor={bandColor} setBandColor={setBandColor} />
          <WristSizeSelector wristSize={wristSize} setWristSize={setWristSize} />

          {/* add to cart area */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-md border-2">
              <button
                className="border-r-2 px-3 py-1.5"
                onClick={() => handleQuantityChange(-1)}
              >
                <Minus />
              </button>
              <p className="px-4">{quantity}</p>
              <button
                className="border-l-2 px-3 py-1.5"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="text-white bg-primary font-semibold py-1.5 px-4 rounded-md hover:bg-blue-500 duration-500"
            >
              Add to Cart
            </button>
            <button
              onClick={() => toast.success("Added in your Wishlist")}>
              <Heart className="text-primary" />
            </button>
          </div>
        </div>
      </div>
      <ShoppingCartModal cart={cart} />
    </section>
  );
};
export default ProductDetails;