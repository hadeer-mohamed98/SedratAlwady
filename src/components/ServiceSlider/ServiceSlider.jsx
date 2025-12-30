import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  Trees,
  Sprout,
  FileBadge,
  UserCog,
  Landmark,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import backgroundImg from "../../assets/our-service1.webp";

const cards = [
  {
    id: 1,
    title: "Expertise in Construction",
    text: "Expert construction with precision",
    icon: <Landmark size={40} />,
  },
  {
    id: 2,
    title: "Landscape & Hardscape Specialists",
    text: "Creative landscape and hardscape",
    icon: <Sprout size={40} />,
  },
  {
    id: 3,
    title: "Tree Supply & Maintenance",
    text: "Reliable tree supply maintenance",
    icon: <Trees size={40} />,
  },
  {
    id: 4,
    title: "Full Operation & Maintenance Services",
    text: "Complete operation maintenance solutions",
    icon: <UserCog size={40} />,
  },
  {
    id: 5,
    title: "High-Quality Execution Standards",
    text: "Premium quality execution standards",
    icon: <FileBadge size={40} />,
  },
];

export default function ServiceSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="relative py-15 overflow-visible px-3">
      <div className="text-center pb-15 ">
        <h2 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-semibold text-white mx-auto">
          Our Services
          {/* <div className="block w-32 h-[3px] bg-white mx-auto mt-3"></div>
          <div className="block w-20 h-[3px] bg-[#D4AB50] mx-auto mt-1"></div> */}
        </h2>
      </div>
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-repeat-x bg-cover bg-bottom"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>

      {/* Overlay for better contrast */}
      {/* <div className="absolute inset-0 -z-10 bg-[#0b3d2cd0]"></div> */}

      <div className="max-w-5xl mx-auto px-2 overflow-visible relative">
        {/* LEFT ARROW */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="
    absolute -left-26 top-1/2 -translate-y-1/2 
    z-50 bg-transparent border border-white/40 
    backdrop-blur-sm text-white 
    w-15 h-15 flex items-center justify-center 
    rounded-full hover:bg-white/20 transition
  "
        >
          <MoveLeft size={28} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="
    absolute -right-26 top-1/2 -translate-y-1/2 
    z-50 bg-transparent border border-white/40 
    backdrop-blur-sm text-white 
    w-15 h-15 flex items-center justify-center 
    rounded-full hover:bg-white/20 transition
  "
        >
          <MoveRight size={28} />
        </button>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2100, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="flex justify-center overflow-visible "
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="overflow-visible pb-10"
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
            >
              <div className="group relative bg-white shadow-md rounded-xl text-center py-15 px-6 transition-all duration-300 hover:-translate-y-1 overflow-visible cursor-grab">
                <div className="absolute top-0 left-0 w-full h-2 bg-white group-hover:bg-green-600 rounded-t-xl transition-all duration-300"></div>
                <div className="text-green-700 mb-4 flex justify-center">
                  {card.icon}
                </div>
                <h3 className="text-[#0B3D2C] font-bold text-sm mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-xs">{card.text}</p>
                <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 bg-white border-4 border-gray-200 rounded-full w-10 h-10 flex items-center justify-center font-semibold text-green-700 group-hover:text-white group-hover:bg-green-700 group-hover:border-green-600 transition-all duration-600">
                  {card.id}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
