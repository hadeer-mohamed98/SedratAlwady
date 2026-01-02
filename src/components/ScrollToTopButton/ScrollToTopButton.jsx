import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-6 p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 animate-float cursor-pointer 
        bg-green-500 text-white hover:bg-green-600  z-50
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
    >
      <ChevronUp size={22} />
    </button>
  );
}
