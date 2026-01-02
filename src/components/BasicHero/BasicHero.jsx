import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function BasicHero({ title, heroImg }) {
    const { t,i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
  
  return (
    <section className="relative w-full min-h-screen flex items-center ">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-full animate-bg-zoom">
          <img
            src={heroImg}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ===== Content ===== */}
      <div
        className={`
        relative z-10
        w-full md:w-1/2
        px-4 sm:px-8 md:px-20 lg:px-38
        text-center ${isRTL ? "md:text-right" : "md:text-left"}
        text-white
        animate-slide-left
         flex flex-col justify-center 
      `}
      >
        <h2
          className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-extrabold
          mb-3 sm:mb-4
          drop-shadow-lg
        "
        >
          {title}
        </h2>

        <p className="text-sm sm:text-base md:text-xl font-semibold">
          <Link
            to="/"
            className="hover:text-[#1EAD68] transition-colors duration-300"
          >
            {t("nav.home")}
          </Link>
          <span className="text-white/90"> – {title}</span>
        </p>
      </div>
    </section>
  );
}
