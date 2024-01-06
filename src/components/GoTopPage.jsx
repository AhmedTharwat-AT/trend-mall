import { useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

function GoTopPage() {
  const ref = useRef();

  useEffect(() => {
    function handleNavBg() {
      if (window.scrollY > 300) {
        ref.current.classList.remove("opacity-0", "invisible");
        ref.current.classList.add("opacity-100", "visible");
      } else {
        ref.current.classList.add("opacity-0", "invisible");
        ref.current.classList.remove("opacity-100", "visible");
      }
    }
    document.addEventListener("scroll", handleNavBg);

    return () => document.removeEventListener("scroll", handleNavBg);
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => window.scrollTo(0, 0)}
      className="invisible fixed bottom-3 right-3 z-[80] cursor-pointer rounded-full border-2 border-indigo-700 bg-gray-100 text-4xl text-indigo-700 opacity-0 transition-all hover:animate-bounce sm:bottom-5 sm:right-5"
    >
      <IoIosArrowUp />
    </div>
  );
}

export default GoTopPage;
