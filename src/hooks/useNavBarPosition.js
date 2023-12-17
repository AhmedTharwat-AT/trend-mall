import { useEffect, useRef } from "react";

function useNavBarPosition() {
  const ref = useRef();

  useEffect(() => {
    function handleNavBg() {
      if (window.scrollY > 300) {
        ref.current.classList.remove("absolute");
        ref.current.classList.add("fixed", "bg-gray-100", "bg-opacity-90");
      } else {
        ref.current.classList.remove("fixed", "bg-gray-100", "bg-opacity-90");
        ref.current.classList.add("absolute");
      }
    }
    document.addEventListener("scroll", handleNavBg);

    return () => document.removeEventListener("scroll", handleNavBg);
  }, []);

  return { ref };
}

export default useNavBarPosition;
