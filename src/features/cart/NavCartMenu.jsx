import { createPortal } from "react-dom";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

function NavCartMenu({ showMenu, items, totalPrice, setShowMenu }) {
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
          showMenu ? "right-0 " : "-right-full "
        } fixed top-0 z-[101] flex h-full w-2/3 min-w-[330px] max-w-[420px] flex-col bg-white transition-all duration-300`}
      >
        <div
          onClick={() => setShowMenu(false)}
          className="mb-4 mt-3 w-fit cursor-pointer px-5 text-5xl text-gray-700"
        >
          &times;
        </div>
        <ul className="h-96 divide-y-2 overflow-y-scroll pl-4">
          {items.map((item) => (
            <li key={item.id} onClick={() => setShowMenu(false)}>
              <Link
                to={`/shop/${item.id}`}
                className="flex items-center gap-2 p-2 hover:bg-gray-200"
              >
                <img className="h-16 w-16" src={item.images[0]} />
                <div className="flex flex-1 items-end justify-between">
                  <div>
                    <h2 className="max-w-[180px] truncate capitalize">
                      {item.title}
                    </h2>
                    <h2 className="font-semibold">
                      {formatCurrency(item.price)}
                    </h2>
                  </div>
                  <p className="text-lg font-medium">&times;{item.quantity}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex justify-between px-5 pb-3 text-2xl">
          <h1 className="font-medium capitalize">total price</h1>
          <span className="px-3">&mdash;</span>
          <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        </div>
        <div className="flex gap-3 border-t-2 p-3 text-center text-base md:text-lg">
          <Link
            onClick={() => setShowMenu(false)}
            to="/cart"
            className="w-1/2 bg-gray-800 py-2 uppercase text-white hover:bg-gray-900"
          >
            view cart
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="w-1/2 bg-gray-800 py-2 uppercase text-white hover:bg-gray-900"
          >
            checkout
          </Link>
        </div>
      </div>
    </>,
    document.querySelector("#root"),
  );
}

export default NavCartMenu;
