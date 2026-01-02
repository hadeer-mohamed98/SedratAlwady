import { LandPlot } from "lucide-react";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import landscape from "../../assets/land.webp";
import land1 from "../../assets/land1.webp";
import land2 from "../../assets/land2.webp";
import land3 from "../../assets/land3.webp";
import land4 from "../../assets/land4.webp";
import land5 from "../../assets/land5.webp";
import land6 from "../../assets/road.webp";
import heroImg from "../../assets/landscape.webp";
import { useTranslation } from "react-i18next";

export default function LandScape() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const images = [
    { src: land1, title: t("landscape.gallery.irrigation") },
    { src: land2, title: t("landscape.gallery.hardscape") },
    { src: land3, title: t("landscape.gallery.electromechanical") },
    { src: land4, title: t("landscape.gallery.lighting") },
    { src: land5, title: t("landscape.gallery.furniture") },
    { src: land6, title: t("landscape.gallery.roads") }
  ];

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={t("landscape.pageTitle")} heroImg={heroImg} />

      {/* service section */}
      <section className="bg-gray-100 py-10 md:py-14 lg:py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-12">
          
          {/* Text */}
          <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3D2E] mb-6">
              {t("landscape.sectionTitle")}
            </h1>

            <p className="text-justify text-gray-500 mb-6 text-base sm:text-lg max-w-lg">
              {t("landscape.description")}
            </p>

            <ul className="text-gray-500 text-base list-disc pl-6 max-w-lg space-y-1">
              <li>{t("landscape.list.soft")}</li>
              <li>{t("landscape.list.irrigation")}</li>
              <li>{t("landscape.list.hardscape")}</li>
              <li>{t("landscape.list.electromechanical")}</li>
              <li>{t("landscape.list.lighting")}</li>
              <li>{t("landscape.list.furniture")}</li>
              <li>{t("landscape.list.roads")}</li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
              <LandPlot className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 text-white bg-[#00803abe] rounded-lg p-3 z-10" />
              <img
                src={landscape}
                alt={t("landscape.pageTitle")}
                className="w-full rounded-xl md:rounded-tl-[100px] shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* masonry grid */}
      <div className="container mx-auto py-10 md:py-20 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {images.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
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
