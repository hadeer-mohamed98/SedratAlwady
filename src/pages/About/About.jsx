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
import UseScrollAnimation from "../../hooks/UseScrollAnimation/UseScrollAnimation.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";

// who are we
const cards = [
  {
    id: 1,
    title:
      "Since its establishment in 2023, Sedrat Al Wadi has aimed to deliver innovative contracting and landscaping solutions built on quality, expertise, and sustainability, fostering progress and value.",
    icon: <Landmark size={40} />,
  },
  {
    id: 2,
    title:
      "Thanks to our commitment to excellence, we proudly achieved the Fifth Grade Contractor Classification in 2025, a recognition of our clients’ trust in our professionalism and performance.",
    icon: <Award size={40} />,
  },
  {
    id: 3,
    title:
      "We work as one team to provide comprehensive services that include construction, landscaping, green space development, and infrastructure projects—all designed to harmonize modernity and nature.",
    icon: <Trees size={40} />,
  },
];

// vision section
const cards2 = [
  {
    title: "Our Vision",
    desc: "To become a leading provider in contracting and landscaping across Saudi Arabia by delivering innovative, sustainable, and high-quality projects that elevate outdoor environments.",
    icon: (
      <Telescope className="w-12 h-12 text-green-700 transition-transform duration-500 group-hover:rotate-y-180" />
    ),
    img: visionImg,
  },
  {
    title: "Our Mission",
    desc: "To achieve customer satisfaction by offering integrated solutions that combine aesthetic beauty, technical precision, and long-term reliability in every project we deliver.",
    icon: (
      <CircleCheckBig className="w-12 h-12 text-green-700 transition-transform duration-500 group-hover:rotate-y-180" />
    ),
    img: missionImg,
  },
  {
    title: "Our Message",
    desc: "We aim to create sustainable environments that harmonize nature with innovation, leaving a positive and lasting impact on communities and future generations.",
    icon: (
      <ClipboardPen className="w-12 h-12 text-green-700 transition-transform duration-500 group-hover:rotate-y-180" />
    ),
    img: messageImg,
  },
];

// certificates
const cards3 = [
  {
    id: 1,
    img: certificate1,
  },
  {
    id: 2,
    img: certificate2,
  },
  {
    id: 3,
    img: certificate1,
  },
];

export default function About() {
  const [leftRef, leftClass] = UseScrollAnimation(
    "animate-fade-down",
    "delay-300"
  );
  const [rightRef, rightClass] = UseScrollAnimation(
    "animate-slide-top-right",
    "delay-300"
  );

  const pageTitle = "About Us";
  const swiperRef = useRef(null);

  return (
    <>
      <ScrollToTopButton />

      {/* hero section */}
      <BasicHero title={pageTitle} heroImg={heroImg} />

      {/* CEO Word */}
      <div className="bg-gray-100 py-10 md:py-14 lg:py-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* ===== Text Section (2/3) ===== */}
            <div
              ref={leftRef}
              className={`md:col-span-2 text-left ${leftClass}`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#0B3D2E] leading-tight mb-6">
                Chairman’s Message
              </h1>

              <p className="text-gray-500 mb-5 text-base sm:text-lg md:text-xl leading-relaxed">
                Our Valued Clients and Partners, Since the establishment of
                Sedrat Al-Wadi Company three years ago, we have set a clear
                goal: to be a trusted partner in the fields of general
                contracting and landscaping, and an active contributor to the
                development of urban infrastructure within the Kingdom of Saudi
                Arabia.
              </p>

              <p className="text-gray-500 mb-5 text-base sm:text-lg md:text-xl leading-relaxed">
                Our success was not a coincidence; it is the result of a
                dedicated team, a clear vision, and our commitment to innovative
                solutions and high execution standards.
              </p>

              <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed">
                I personally promise that we will continue investing in our team
                and capabilities, expanding our scope of work, and delivering
                projects that meet your aspirations.
              </p>

              <div className="mt-6">
                <p className="font-bold text-gray-800">Chairman of the Board</p>
                <p className="font-bold text-gray-800">
                  Mohamed Hassan Al-Amboji
                </p>
              </div>
            </div>

            {/* ===== Image Section (1/3) ===== */}
            <div
              ref={rightRef}
              className={`md:col-span-1 flex justify-center ${rightClass}`}
            >
              <div className="relative">
                <img
                  src={dots}
                  alt="dots decoration"
                  className="absolute -bottom-6 -left-6 w-14 h-14 z-0 hidden sm:block"
                />
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
              shadow-lg
              animate-float
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
            Who Are We?
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
                <div className="group relative bg-white rounded-xl shadow-md text-center px-6 py-16 transition hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-2 bg-transparent group-hover:bg-green-600 rounded-t-xl transition" />

                  <div className="mb-4 flex justify-center text-green-700">
                    {card.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#0B3D2C] mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
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

      {/* vision section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards2.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group transition"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green-800/20 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-3">{card.icon}</div>
                  <h3 className="text-xl font-bold text-[#0B3D2E] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* certificates */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20 px-4">
          <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
            Certificates
          </h2>
        </div>

        {/* Background */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${missionImg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-[#ebebebd3]" />

        <div className="max-w-5xl mx-auto relative px-4 sm:px-6 ">
          {/* LEFT ARROW */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-50
                 bg-transparent border border-green-600/40 backdrop-blur-sm
                 text-green-600 w-12 h-12 xl:w-14 xl:h-14
                 items-center justify-center rounded-full
                 hover:bg-green-700 hover:text-gray-200 transition"
          >
            <MoveLeft size={26} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-50
                 bg-transparent border border-green-600/40 backdrop-blur-sm
                 text-green-600 w-12 h-12 xl:w-14 xl:h-14
                 items-center justify-center rounded-full
                 hover:bg-green-700 hover:text-gray-200 transition"
          >
            <MoveRight size={26} />
          </button>

          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 2100, disableOnInteraction: false }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="overflow-visible"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {cards3.map((card) => (
              <SwiperSlide
                key={card.id}
                className="pb-14"
                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay.start()}
              >
                <div
                  className="group relative bg-white shadow-md rounded-xl
                          text-center px-6 py-14 sm:py-16 md:py-20
                          transition-all duration-300 hover:-translate-y-1
                          cursor-grab"
                >
                  <div
                    className="absolute top-0 left-0 w-full h-2 bg-transparent
                            group-hover:bg-green-600 rounded-t-xl transition"
                  />

                  <img
                    src={card.img}
                    alt="certificate"
                    className="mx-auto max-w-full h-auto"
                  />

                  <div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2
                            bg-white border-4 border-gray-200 rounded-full
                            w-10 h-10 flex items-center justify-center
                            font-semibold text-green-700
                            group-hover:text-white group-hover:bg-green-700
                            group-hover:border-green-600 transition-all"
                  >
                    {card.id}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
