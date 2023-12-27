import { useSelector } from "react-redux";
import EmptyList from "../../components/EmptyList";
import WishlistItem from "./WishlistItem";

function Wishlist() {
  const wishlist = useSelector((state) => state.user.wishlist);

  if (wishlist.length == 0)
    return <EmptyList message="there are no items added" />;

  return (
    <div className="w-[90vw] min-w-[350px] overflow-x-scroll bg-white p-4 sm:w-full">
      <div className="min-w-[580px]  bg-white p-2 lg:w-full lg:min-w-full">
        <div className="mb-5 grid grid-cols-[50px_repeat(5,_1fr)] gap-2 font-medium uppercase text-gray-800">
          <h1></h1>
          <h1 className="col-span-2">product</h1>
          <h1>status</h1>
          <h1>price</h1>
          <h1></h1>
        </div>
        {wishlist.map((wishitem) => (
          <WishlistItem key={wishitem.id} item={wishitem} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
