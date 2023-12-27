import { useSelector } from "react-redux";
import EmptyList from "../../components/EmptyList";
import WishlistItem from "./WishlistItem";

function Wishlist() {
  const wishlist = useSelector((state) => state.user.wishlist);

  if (wishlist.length == 0)
    return <EmptyList message="there are no items added" />;

  return (
    <div className="w-[90vw] min-w-[350px] overflow-x-scroll rounded-md bg-white  shadow-sm sm:w-full">
      <div className="min-w-[580px] rounded-md bg-white  lg:w-full lg:min-w-full">
        <div className="mb-5 grid grid-cols-[50px_repeat(5,_1fr)] gap-2 bg-[var(--color-brand-100)] p-2 px-3 font-medium uppercase text-[var(--color-brand-700)]">
          <h1></h1>
          <h1 className="col-span-2">product</h1>
          <h1>status</h1>
          <h1>price</h1>
          <h1></h1>
        </div>
        <div className="divide-y divide-gray-200  pb-3">
          {wishlist.map((wishitem) => (
            <WishlistItem key={wishitem.id} item={wishitem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
