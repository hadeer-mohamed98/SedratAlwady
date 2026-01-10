import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";

import logo1 from "../../assets/partners/Alinmaa-bank.svg";
import logo2 from "../../assets/partners/Alomeir.svg";
import logo3 from "../../assets/partners/alrajhi-bank.svg";
import logo4 from "../../assets/partners/Astra-construction.svg";
import logo5 from "../../assets/partners/Bank-albilad.svg";
import logo6 from "../../assets/partners/D360.svg";
import logo7 from "../../assets/partners/Fahd.svg";
import logo9 from "../../assets/partners/GR.svg";
import logo12 from "../../assets/partners/Modon.svg";
import logo13 from "../../assets/partners/NHC.svg";
import logo14 from "../../assets/partners/Rabee-aljazeera.svg";
import logo15 from "../../assets/partners/SAB.svg";
import logo16 from "../../assets/partners/Riyad-bank.svg";
import logo17 from "../../assets/partners/Shibh-aljazera.svg";
import logo11 from "../../assets/partners/Masar-Aljazera.svg";
import logo10 from "../../assets/partners/Hadifco.svg";
import logo8 from "../../assets/partners/fayfa.svg";
import logo18 from "../../assets/partners/salalemAlyamamah.svg";
import logo19 from "../../assets/partners/SCA.svg";

import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const partners = [
    { id: 1, img: logo1 },
    { id: 2, img: logo2 },
    { id: 3, img: logo3 },
    { id: 4, img: logo4 },
    { id: 5, img: logo5 },
    { id: 6, img: logo6 },
    { id: 7, img: logo7 },
    { id: 8, img: logo8 },
    { id: 9, img: logo9 },
    { id: 10, img: logo10 },
    { id: 11, img: logo11 },
    { id: 12, img: logo12 },
    { id: 13, img: logo13 },
    { id: 14, img: logo14 },
    { id: 15, img: logo15 },
    { id: 16, img: logo16 },
    { id: 17, img: logo17 },
    { id: 18, img: logo18 },
    { id: 19, img: logo19 },
  ];

  return (
    <section className="bg-white py-14 md:py-20 overflow-hidden">
      {/* ===== Title ===== */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0B3D2E]">
          {t("partners.title")}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* ===== Prev Button ===== */}
        {/* <button
          className="swiper-button-prev hidden opacity-0 md:opacity-100 md:flex items-center justify-center
          absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2
          border border-green-600 bg-white hover:bg-green-50
          p-3 rounded-full transition z-10"
        >
          <MoveLeft className="w-5 h-5 text-green-700" />
        </button> */}

        {/* ===== Slider ===== */}
        <Swiper
          key={i18n.language}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex items-center justify-center">
                <img
                  src={partner.img}
                  alt="partner"
                  className="
                    sm:w-28 sm:h-28
                    md:w-32 md:h-32
                    lg:w-38 lg:h-38
                    object-contain
                    cursor-grab
                    transition duration-300
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== Next Button ===== */}
        {/* <button
          className="swiper-button-next hidden opacity-0 md:opacity-100 md:flex items-center justify-center
          absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2
          border border-green-600 bg-white hover:bg-green-50
          p-3 rounded-full transition z-10"
        >
          <MoveRight className="w-5 h-5 text-green-700" /> */}
        {/* </button> */}
      </div>
    </section>
  );
}
