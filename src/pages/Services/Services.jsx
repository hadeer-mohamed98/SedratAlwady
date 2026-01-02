import { Link, useLocation } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import dots from "../../assets/Dotts.svg";
import landscape from "../../assets/landscape1.webp";
import trees from "../../assets/sup-trees.webp";
import construction from "../../assets/engineer-construction.webp";
import heroImg from "../../assets/engineers.webp";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Services() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const location = useLocation();

  const pageTitle = location.state?.title || t("servicesPage.pageTitle");

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={pageTitle} heroImg={heroImg} />

      {/* ===== Service 1 : Construction ===== */}
      <div className="bg-white py-15 md:py-20">
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-4">
          <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
            <h1 className="text-3xl font-bold text-[#0B3D2E] mb-6">
              {t("servicesPage.construction.title")}
            </h1>

            <p className="text-justify text-gray-500 mb-8 max-w-lg text-base sm:text-lg lg:text-xl">
              {t("servicesPage.construction.desc")}
            </p>

            <Link
              to="/services/constructions"
              className="text-green-500 hover:text-green-800 flex items-center gap-2"
            >
              {t("servicesPage.construction.btn")}{" "}
              {isRTL ? <ArrowLeft /> : <ArrowRight />}
            </Link>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              <img
                src={dots}
                alt="dots"
                className={`absolute -bottom-9  ${
                  isRTL ? "-right-10" : "-left-10"
                } w-24 h-24 hidden px-3 sm:block`}
              />
              <img
                src={construction}
                alt="construction"
                className="w-full max-w-md lg:max-w-lg rounded-xl md:rounded-tl-[100px] shadow-lg animate-float"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ===== Service 2 : Landscape ===== */}
      <div className="bg-gray-100 py-15 md:py-20">
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-4">
          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              <img
                src={dots}
                alt="dots decoration"
                className={`absolute -bottom-9  ${
                  isRTL ? "-right-10" : "-left-10"
                } w-24 h-24 hidden px-3 sm:block`}
              />
              <img
                src={landscape}
                alt="landscape"
                className="w-full max-w-lg rounded-xl md:rounded-tl-[100px] shadow-lg animate-float"
              />
            </div>
          </div>

          <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
            <h1 className="text-3xl font-bold text-[#0B3D2E] mb-6">
              {t("servicesPage.landscape.title")}
            </h1>

            <p className="text-justify text-gray-500 mb-8 max-w-lg text-base sm:text-lg lg:text-xl">
              {t("servicesPage.landscape.desc")}
            </p>

            <Link
              to="/services/landscape"
              className="text-green-500 hover:text-green-800 flex items-center gap-2"
            >
              {t("servicesPage.landscape.btn")}{" "}
              {isRTL ? <ArrowLeft /> : <ArrowRight />}
            </Link>
          </div>
        </section>
      </div>

      {/* ===== Service 3 : Supplying Trees ===== */}
      <div className="bg-white py-15 md:py-20">
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-4">
          <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
            <h1 className="text-3xl font-bold text-[#0B3D2E] mb-6">
              {t("servicesPage.supplyingTrees.title")}
            </h1>

            <p className="text-justify text-gray-500 mb-8 max-w-lg text-base sm:text-lg lg:text-xl">
              {t("servicesPage.supplyingTrees.desc")}
            </p>

            <Link
              to="/services/supplying-trees"
              className="text-green-500 hover:text-green-800 flex items-center gap-2"
            >
              {t("servicesPage.supplyingTrees.btn")}{" "}
              {isRTL ? <ArrowLeft /> : <ArrowRight />}
            </Link>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              <img
                src={dots}
                alt="dots decoration"
                className={`absolute -bottom-9  ${
                  isRTL ? "-right-10" : "-left-10"
                } w-24 h-24 hidden px-3 sm:block`}
              />
              <img
                src={trees}
                alt="trees"
                className="w-full max-w-lg rounded-xl md:rounded-tl-[100px] shadow-lg animate-float"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
