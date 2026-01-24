// ================elegant2=================

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import slider1 from "../../assets/HomeSlider/villa.webp";
import slider2 from "../../assets/HomeSlider/maket3D.webp";
import slider3 from "../../assets/HomeSlider/construction.webp";
import slider4 from "../../assets/HomeSlider/plant.webp";

import { useTranslation } from "react-i18next";

export default function HomeHero() {
  const { t, i18n } = useTranslation();

  const SLIDE_DURATION = 5000;

  const slides = [
    {
      image: slider1,
      welcome: t("homeHero.welcome"),
      title: t("homeHero.company"),
      subtitle: t("homeHero.heroSubtitle"),
    },
    {
      image: slider2,
      title: t("homeHero.construction"),
      subtitle: t("homeHero.constructionDesc"),
    },
    {
      image: slider3,
      title: t("homeHero.construction"),
      subtitle: t("homeHero.constructionDesc"),
    },
    {
      image: slider4,
      title: t("homeHero.landscape"),
      subtitle: t("homeHero.landscapeDesc"),
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        key={i18n.language}
        modules={[Autoplay, Navigation]}
        loop={true}
        speed={800}
        navigation
        autoplay={{
          delay: SLIDE_DURATION,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Media Wrapper (important) */}
              <div className="hero-media">
                <img
                  src={slide.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="hero-image"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="hero-content relative z-10 flex flex-col justify-center h-full px-10 lg:px-38 max-w-7xl">
                {slide.welcome && (
                  <h2 className="text-white text-xl md:text-3xl font-bold pb-4">
                    {slide.welcome}
                  </h2>
                )}

                <h1 className="text-white text-3xl md:text-5xl font-bold pb-4">
                  {slide.title}
                </h1>

                <p className="text-white text-base md:text-xl max-w-xl pb-6">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col md:flex-row  gap-4">
                  <Link
                    to="/projects"
                    className="bg-[#00B13D] px-8 py-2 text-center rounded-full text-white"
                  >
                    {t("homeHero.projectsBtn")}
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-[#00B13D] px-8 py-2 text-center rounded-full text-white"
                  >
                    {t("homeHero.contactBtn")}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
