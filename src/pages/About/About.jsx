import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  Trees,
  Landmark,
  Award,
  Telescope,
  CircleCheckBig,
  ClipboardPen,
  MoveRight,
  MoveLeft,
} from "lucide-react";
import backgroundImg from "../../assets/backgroundImg.webp";
// import backgroundImg2 from "../../assets/img2.jpg";
import visionImg from "../../assets/vision.webp";
import missionImg from "../../assets/mission.webp";
import messageImg from "../../assets/message.webp";
import heroImg from "../../assets/HomeSlider/villa.webp";
import certificate1 from "../../assets/certificate1.webp";
import certificate2 from "../../assets/certificate2.webp";
import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import dots from "../../assets/Dotts.svg";
import founder from "../../assets/ampoji.png";
import organizationalStructure from "../../assets/organizational-structure.png";
import organizationalStructure2 from "../../assets/organizational-structure2.png";
import UseScrollAnimation from "../../hooks/UseScrollAnimation/UseScrollAnimation.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // who are we
  const cards = [
    {
      id: 1,
      title: t("about.whoWeAre.card1"),
      icon: <Landmark size={40} />,
    },
    {
      id: 2,
      title: t("about.whoWeAre.card2"),
      icon: <Award size={40} />,
    },
    {
      id: 3,
      title: t("about.whoWeAre.card3"),
      icon: <Trees size={40} />,
    },
  ];

  // vision section
  const cards2 = [
    {
      title: t("about.vision.title"),
      desc: t("about.vision.desc"),
      icon: (
        <Telescope className="w-12 h-12 text-green-700 transition-transform duration-500 group-hover:rotate-y-180" />
      ),
      img: visionImg,
    },
    {
      title: t("about.mission.title"),
      desc: t("about.mission.desc"),
      icon: (
        <CircleCheckBig className="w-12 h-12 text-green-700 transition-transform duration-500 group-hover:rotate-y-180" />
      ),
      img: missionImg,
    },
    {
      title: t("about.message.title"),
      desc: t("about.message.desc"),
      icon: (
        <ClipboardPen className="w-12 h-12 text-green-700 transition-transform duration-500 group-hover:rotate-y-180" />
      ),
      img: messageImg,
    },
  ];

  // certificates
  // const cards3 = [
  //   {
  //     id: 1,
  //     img: certificate1,
  //   },
  //   {
  //     id: 2,
  //     img: certificate2,
  //   },
  // ];

  const [leftRef, leftClass] = UseScrollAnimation(
    "animate-fade-down",
    "delay-300"
  );
  const [rightRef, rightClass] = UseScrollAnimation(
    "animate-slide-top-right",
    "delay-300"
  );

  const pageTitle = t("about.pageTitle");
  const swiperRef = useRef(null);

  return (
    <>
      <ScrollToTopButton />

      {/* hero section */}
      <BasicHero title={pageTitle} heroImg={heroImg} />

      {/* CEO Word */}
      <div className="bg-gray-100 py-10 md:py-14 lg:py-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col-reverse md:flex-col-4 gap-8 justify-center items-center">
            {/* ===== Text Section (2/3) ===== */}
            <div
              ref={leftRef}
              className={`md:col-span-2 text-center max-w-4xl ${leftClass}`}
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0B3D2E] leading-tight my-6">
                {t("about.chairmanMessage.title")}
              </h1>

              <p
                className={`text-gray-500 pb-2 text-base sm:text-lg leading-relaxed ${
                  isRTL ? "text-center" : "text-justify"
                }`}
              >
                {t("about.chairmanMessage.p1")}
              </p>

              <p
                className={`text-gray-500 pb-2 text-base sm:text-lg leading-relaxed ${
                  isRTL ? "text-center" : "text-justify"
                }`}
              >
                {t("about.chairmanMessage.p2")}
              </p>

              <p
                className={`text-gray-500 pb-2 text-base sm:text-lg leading-relaxed ${
                  isRTL ? "text-center" : "text-justify"
                }`}
              >
                {t("about.chairmanMessage.p3")}
              </p>

              <div className="mt-6">
                <p className="font-bold text-gray-800">
                  {t("about.chairmanMessage.position")}
                </p>
                <p className="font-bold text-gray-800">
                  {t("about.chairmanMessage.name")}
                </p>
              </div>
            </div>

            {/* ===== Image Section ===== */}
            <div
              ref={rightRef}
              className={`md:col-span-2 flex justify-center ${rightClass}`}
            >
              <div className="relative">
                {/* <img
                  src={dots}
                  alt="dots decoration"
                  className="absolute -bottom-6 -left-6 w-14 h-14 z-0 hidden sm:block"
                /> */}
                <img
                  src={founder}
                  alt="Founder"
                  className="
              relative
              w-full
              max-w-[280px]
              sm:max-w-[320px]
              md:max-w-[360px]
              rounded-xl
              rounded-tl-[80px]
              z-10
            "
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*  Who Are We */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {t("about.whoWeAre.title")}
          </h2>
        </div>

        {/* Background
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-[#0b3d2cc9]" /> */}
        {/* Background */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center animate-bg-zoom"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-[#0b3d2cc9]" />

        {/* Swiper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Swiper
            key={i18n.language}
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 2100, disableOnInteraction: false }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="pb-12">
                <div
                  className="group relative bg-white rounded-xl shadow-md text-center
                              px-6 py-10
                              h-[350px]
                              flex flex-col
                              justify-center
                              transition hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-transparent group-hover:bg-green-600 rounded-t-xl transition" />

                  <div className="mb-3 flex justify-center text-green-700">
                    {card.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#0B3D2C] mb-1 grow">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                    {card.text}
                  </p>

                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center text-green-700 font-semibold transition group-hover:bg-green-700 group-hover:border-green-600 group-hover:text-white">
                    {card.id}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* organizational structure */}
      <section className="container mx-auto bg-white">
        <div className="text-center my-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
            {t("about.organizationalStructure")}
          </h2>
        </div>
        <img
          src={organizationalStructure}
          alt="Organizational Structure"
          className="hidden md:block"
        />

        <img
          src={organizationalStructure2}
          alt="Organizational Structure Mobile"
          className="block md:hidden"
        />
      </section>

      {/* vision section */}
      <section className="flex justify-center py-12 sm:py-16 md:py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards2.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden
                          group transition h-[480px]
                          flex flex-col w-full"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green-800/20 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="text-justify p-6 sm:p-8 flex flex-col flex-1">
                  <div className="mb-3">{card.icon}</div>
                  <h3 className="text-xl font-bold text-[#0B3D2E] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-5">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
