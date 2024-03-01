import { useEffect, useRef, useState } from "react";

function useObserverState(options = {}) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current);
      }
    }, options);

    observer.observe(ref.current);
  }, []);

  return { isVisible, ref };
}

export default useObserverState;
