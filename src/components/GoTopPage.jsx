import { useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

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
    <div className="group fixed bottom-3 right-3 z-[80] w-fit p-3">
      <div
        ref={ref}
        onClick={() => window.scrollTo(0, 0)}
        className="invisible  cursor-pointer rounded-full border bg-indigo-100 p-1 text-4xl text-indigo-700 opacity-0 transition-all group-hover:animate-bounce sm:bottom-5 sm:right-5"
      >
        <MdKeyboardDoubleArrowUp />
      </div>
    </div>
  );
}

export default GoTopPage;
