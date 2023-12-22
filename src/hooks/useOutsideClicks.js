import { useEffect, useRef } from "react";

export default function useOutsideClicks(handle) {
  const ref = useRef();

  // runs a handle function when clicking outside
  // an element

  useEffect(() => {
    function handleClose(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handle();
      }
    }
    document.addEventListener("click", handleClose, true);
    return () => document.removeEventListener("click", handleClose, true);
  }, [handle]);

  return { ref };
}
