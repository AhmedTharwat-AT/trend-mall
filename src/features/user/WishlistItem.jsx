import { formatCurrency } from "../../utils/helpers";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import { toast } from "react-hot-toast";
import { toggleWishlist } from "./userSlice";

function WishlistItem({ item }) {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addItem({ ...item, quantity: 1 }));
    toast.success("Item added to the cart!");
  }

  function deleteWishitem() {
    dispatch(toggleWishlist(item));
  }
  return (
    <div className="mb-1 grid grid-cols-[50px_repeat(5,_1fr)] items-center gap-2">
      <div onClick={deleteWishitem} className="py-2">
        <span className="flex aspect-square h-6 cursor-pointer items-center  justify-center rounded-full bg-red-500 text-2xl text-white hover:bg-red-600">
          <span>&times;</span>
        </span>
      </div>
      <div className="col-span-2 flex items-center gap-2">
        <img className="h-12 w-12 object-cover" src={item.images[0]} />
        <h1 className="max-w-[15ch] truncate text-sm capitalize">
          {item.title}
        </h1>
      </div>
      <h1>{item.stock > 0 ? "in-stock" : "out-of-stock"}</h1>
      <h1 className="text-sm">{formatCurrency(item.price)}</h1>
      <Button onClick={addToCart} size="xs">
        add to cart
      </Button>
    </div>
  );
}

export default WishlistItem;
