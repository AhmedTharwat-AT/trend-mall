import { createPortal } from "react-dom";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
import EmptyCartMenu from "../../components/EmptyCartMenu";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteCart } from "./cartSlice";

function NavCartMenu({ showMenu, items, totalPrice, setShowMenu }) {
  const dispatch = useDispatch();

  return createPortal(
    <>
      <div
        onClick={() => setShowMenu(false)}
        className={`${
          showMenu ? "fixed " : "hidden "
        }right-0 top-0 z-[100] h-full w-full bg-gray-600 opacity-40 backdrop-blur-sm backdrop-filter transition-all`}
      ></div>

      <div
        className={`${
          showMenu ? "visible right-0 z-[101]" : "invisible -right-full -z-40"
        } fixed top-0 flex h-full w-[90%] max-w-[380px] flex-col bg-white transition-all duration-300 md:w-2/3`}
      >
        <div className=" flex justify-between p-2 text-gray-700">
          <span
            onClick={() => setShowMenu(false)}
            className=" w-fit cursor-pointer px-5 text-5xl "
          >
            &times;
          </span>
          {items.length > 0 && (
            <div
              onClick={() => {
                dispatch(deleteCart());
              }}
              className="mb-4 mt-3 flex cursor-pointer items-center gap-2 px-2"
            >
              <p className="text-sm uppercase">clear cart</p>
              <MdOutlineDoNotDisturb className="  text-3xl" />
            </div>
          )}
        </div>

        {items.length <= 0 ? (
          <EmptyCartMenu setShowMenu={setShowMenu} />
        ) : (
          <>
            <ul className="mb-10 mt-8 divide-y-2 overflow-y-auto overscroll-contain py-3 pl-2">
              {items.map((item) => (
                <li
                  className="px-2"
                  key={item.id}
                  onClick={() => setShowMenu(false)}
                >
                  <Link
                    to={`/shop/${item.id}`}
                    className="flex items-center gap-2 p-2 hover:bg-gray-200"
                  >
                    <img
                    alt="cart-item" className="h-16 w-16" src={item.images[0]} />
                    <div className="flex flex-1 items-end justify-between">
                      <div>
                        <h2 className="max-w-[170px] truncate capitalize">
                          {item.title}
                        </h2>
                        <h2 className="font-semibold">
                          {formatCurrency(item.price)}
                        </h2>
                      </div>
                      <p className="text-lg font-medium">
                        &times;{item.quantity}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex justify-between border-t-2 px-5 py-3 text-xl">
              <h1 className="text-lg capitalize tracking-wide">total price</h1>
              <span className="px-3">&mdash;</span>
              <p className="font-medium">{formatCurrency(totalPrice)}</p>
            </div>
            <div className="flex gap-3 border-t-2 p-3 text-center  text-base font-medium tracking-widest">
              <Link
                onClick={() => setShowMenu(false)}
                to="/cart"
                className="w-1/2 border border-[var(--color-brand-500)]  bg-[var(--color-brand-500)] py-2 uppercase text-white hover:bg-[var(--color-brand-600)]"
              >
                view cart
              </Link>
              <Link
                to="/order/checkout"
                onClick={() => setShowMenu(false)}
                className="w-1/2 border border-gray-800 bg-gray-100 py-2 uppercase text-gray-900 hover:bg-gray-800 hover:text-gray-100"
              >
                checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>,
    document.querySelector("#root"),
  );
}

export default NavCartMenu;
