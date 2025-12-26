import { useEffect, useRef, useState } from "react";

export default function UseScrollAnimation(animationClass, delayClass = "") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // stop observing once it's visible
          }
        });
      },
      { threshold: 0.1 } // trigger when 20% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // If not visible yet → keep it hidden (opacity 0 and slight down shift)
  const className = visible
    ? `${animationClass} ${delayClass}`
    : "opacity-0 translate-y-10";

  return [ref, className];
}
