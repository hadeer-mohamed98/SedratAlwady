import dots from "../../assets/Dotts.svg";
import worker from "../../assets/engineers-2.webp";
import UseScrollAnimation from "../../hooks/UseScrollAnimation/UseScrollAnimation.jsx";
import ServiceSlider from "../../components/ServiceSlider/ServiceSlider.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import Counters from "../../components/Counters/Counters.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import { useTranslation } from "react-i18next";
import HeroSlider from "../../components/HeroSlider/HeroSlider.jsx";

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [leftRef, leftClass] = UseScrollAnimation(
    "animate-fade-down",
    "delay-300"
  );
  const [rightRef, rightClass] = UseScrollAnimation(
    "animate-slide-top-right",
    "delay-300"
  );

  return (
    <div className="overflow-x-hidden">
      <ScrollToTopButton />
      {/* <HomeHero /> */}
      <HeroSlider/>

      {/* ===== Company Introduction ===== */}
      <section className="bg-gray-100 py-12 sm:py-16 md:py-20 ">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-around items-center gap-4">
          {/* Text */}
          <div
            ref={leftRef}
            dir={isRTL ? "rtl" : "ltr"}
            className={`flex-1 md:pl-10 ${
              isRTL ? "text-right items-start" : "text-left"
            } ${leftClass}`}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0B3D2E]  mb-4">
              {t("home.introTitle")}
            </h1>

            <p className="text-justify leading-7 tracking-normal text-gray-500 mb-4 max-w-lg text-sm sm:text-base md:text-lg">
              {t("home.introText1")}
            </p>

            <p className="text-justify leading-7 tracking-normal text-gray-500 max-w-lg text-sm sm:text-base md:text-lg">
              {t("home.introText2")}
            </p>
          </div>

          {/* Image */}
          <div
            ref={rightRef}
            className={`flex-1 flex justify-center p-4 ${rightClass}`}
          >
            <div className="relative">
              <img
                src={dots}
                alt="dots decoration"
                className="
                  absolute -bottom-7 -left-8
                  w-16 sm:w-20 
                  opacity-80
                "
              />
              <img
                src={worker}
                alt="engineers"
                className="
                  relative z-10
                  w-full max-w-xs sm:max-w-sm md:max-w-lg
                  rounded-xl md:rounded-tl-[100px]
                  shadow-lg animate-float
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Certificates Section ===== */}
      {/* <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="
            bg-gray-100 shadow
            rounded-xl p-6 sm:p-8 md:p-10
            text-white text-center
            animate-fade-down
          "
          >
            <h3 className="text-xl sm:text-2xl md:text-4xl text-[#0B3D2C] font-semibold mb-8">
              {t("home.certificateTitle")}
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
              <img
                src={certificate1}
                alt="certificate"
                className="w-full max-w-sm rounded-md shadow-md"
              />
              <img
                src={certificate2}
                alt="certificate"
                className="w-full max-w-sm rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* ===== Other Sections ===== */}
      <ServiceSlider />
      <Counters />
      <Partners />
    </div>
  );
}
