import { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import slider1 from "../../assets/HomeSlider/villa.webp";
import slider2 from "../../assets/HomeSlider/maket3D.webp";
import slider3 from "../../assets/HomeSlider/construction.webp";
import slider4 from "../../assets/HomeSlider/plant.webp";
import { useTranslation } from "react-i18next";

import "swiper/css";
import styles from "./hero-slider.module.css";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

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

  const pieces = 8;
  const directions = ["rtl", "ltr", "ttb", "btt"];

  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const el = heroRef.current;
    el.style.visibility = "hidden";

    requestAnimationFrame(() => {
      el.style.visibility = "visible";
    });
  }, [i18n.language]);

  return (
    <section ref={heroRef} className={styles.hero}>
      <Swiper
        key={i18n.language}
        modules={[Autoplay]}
        loop
        speed={700}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {slides.map((slide, i) => {
          const dir = directions[i % directions.length];

          return (
            <SwiperSlide key={i}>
              <div
                className={`${styles.stripMask} ${
                  dir === "rtl"
                    ? styles.dirRtl
                    : dir === "ltr"
                    ? styles.dirLtr
                    : dir === "ttb"
                    ? styles.dirTtb
                    : styles.dirBtt
                }`}
                style={{
                  "--img": `url(${slide.image})`,
                  "--count": pieces,
                }}
              >
                {Array.from({ length: pieces }).map((_, index) => (
                  <span
                    key={index}
                    style={{
                      "--i": index,
                      "--delay": `${index * 0.08}s`,
                    }}
                  />
                ))}
              </div>
              <div
                className={styles.mobileBg}
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              <div className={styles.overlay} />

              <div
                className={`relative z-3 flex flex-col justify-center text-center ${
                  isRTL ? "md:text-right" : "md:text-left"
                } h-full md:w-2/3 px-4 sm:px-8 md:px-20 lg:px-38`}
              >
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
