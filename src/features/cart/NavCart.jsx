import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import NavCartMenu from "./NavCartMenu";
import { useState } from "react";

function NavCart() {
  const [showMenu, setShowMenu] = useState(false);
  const { count, items, totalPrice } = useSelector((state) => state.cart);
  console.log(count);

  return (
    <>
      <li className="relative mr-4 cursor-pointer text-[2rem]  text-gray-800 hover:text-[var(--color-brand-500)] md:mr-0">
        <IoMdCart onClick={() => setShowMenu((s) => !s)} />
        {count > 0 && (
          <p className="absolute -right-1 -top-2 z-40 flex aspect-square h-[18px] w-[18px] items-center justify-center rounded-full bg-red-700 text-center text-xs font-medium text-white">
            {count}
          </p>
        )}
      </li>
      {count > 0 && (
        <NavCartMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          items={items}
          totalPrice={totalPrice}
        />
      )}
    </>
  );
}

export default NavCart;
