import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function MenuBtn({ setShowMenu, showMenu }) {
  return (
    <span
      className="cursor-pointer text-3xl transition-all hover:text-[var(--color-brand-500)] sm:text-4xl md:hidden"
      onClick={() => setShowMenu((s) => !s)}
    >
      {showMenu ? (
        <IoClose className="rounded-full hover:bg-[var(--color-grey-100)]" />
      ) : (
        <RxHamburgerMenu />
      )}
    </span>
  );
}

export default MenuBtn;
