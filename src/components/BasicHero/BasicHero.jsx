import { Link } from "react-router-dom";

export default function BasicHero({ title, heroImg }) {
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
        className="
        relative z-10
        w-full md:w-1/2
        px-4 sm:px-8 md:px-16
        text-center md:text-left
        md:translate-x-15
        text-white
        animate-slide-left
      "
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
            Home
          </Link>
          <span className="text-white/90"> – {title}</span>
        </p>
      </div>
    </section>
  );
}
