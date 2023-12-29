import { useEffect, useRef } from "react";

export default function useOutsideClicks(handle, capturing = true) {
  const ref = useRef();

  // runs a handle function when clicking outside
  // an element

  useEffect(() => {
    function handleClose(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handle();
      }
    }
    document.addEventListener("click", handleClose, capturing);
    return () => document.removeEventListener("click", handleClose, capturing);
  }, [handle, capturing]);

  return { ref };
}
