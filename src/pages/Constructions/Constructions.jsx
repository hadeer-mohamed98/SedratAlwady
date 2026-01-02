import { HardHat } from "lucide-react";
import worker from "../../assets/const.webp";
import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import heroImg from "../../assets/HomeSlider/construction.webp";
import { useTranslation } from "react-i18next";

import const1 from "../../assets/const1.webp";
import const2 from "../../assets/const2.webp";
import const3 from "../../assets/const3.webp";
import const4 from "../../assets/const4.webp";
import const5 from "../../assets/const5.webp";
import const6 from "../../assets/const6.webp";
import const7 from "../../assets/const7.webp";
import const8 from "../../assets/const8.webp";
import const9 from "../../assets/const9.webp";
import const10 from "../../assets/const10.webp";
import const11 from "../../assets/const11.webp";
import const12 from "../../assets/const12.webp";

export default function Constructions() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const images = [
    { src: const1, title: t("constructionsPage.gallery.electrical") },
    { src: const2, title: t("constructionsPage.gallery.hvac") },
    { src: const3, title: t("constructionsPage.gallery.plumbing") },
    { src: const4, title: t("constructionsPage.gallery.smart") },
    { src: const5, title: t("constructionsPage.gallery.maintenance") },
    { src: const6, title: t("constructionsPage.gallery.concrete") },
    { src: const7, title: t("constructionsPage.gallery.steel") },
    { src: const8, title: t("constructionsPage.gallery.cleaning") },
    { src: const9, title: t("constructionsPage.gallery.fire") },
    { src: const10, title: t("constructionsPage.gallery.network") },
    { src: const11, title: t("constructionsPage.gallery.civil") },
    { src: const12, title: t("constructionsPage.gallery.finishing") },
  ];

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={t("constructionsPage.pageTitle")} heroImg={heroImg} />

      {/* ===== Main Section ===== */}
      <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-10 md:py-15 gap-12">
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3D2E] mb-6">
            {t("constructionsPage.section.title")}
          </h1>

          <p className="text-justify text-gray-500 mb-6 text-base sm:text-lg max-w-lg">
            {t("constructionsPage.section.intro")}
          </p>

          <ul className="text-gray-500 text-base list-disc pl-6 max-w-lg space-y-1">
            <li>{t("constructionsPage.list.civil")}</li>
            <li>{t("constructionsPage.list.finishing")}</li>
            <li>{t("constructionsPage.list.networking")}</li>
            <li>{t("constructionsPage.list.electrical")}</li>
            <li>{t("constructionsPage.list.plumbing")}</li>
            <li>{t("constructionsPage.list.hvac")}</li>
            <li>{t("constructionsPage.list.fire")}</li>
            <li>{t("constructionsPage.list.smart")}</li>
            <li>{t("constructionsPage.list.operation")}</li>
            <li>{t("constructionsPage.list.cleaning")}</li>
            <li>{t("constructionsPage.list.maintenance")}</li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
            <HardHat className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 text-white bg-[#00803abe] rounded-lg p-3 z-10" />
            <img
              src={worker}
              alt="construction"
              className="w-full rounded-xl md:rounded-tl-[100px] shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <div className="container mx-auto py-10 md:py-20 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-sm sm:text-base font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
