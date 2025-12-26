// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { MoveLeft, MoveRight } from "lucide-react";
// import logo1 from "../../assets/partners/Alinmaa-bank.jpg";
// import logo2 from "../../assets/partners/Alomeir.jpg";
// import logo3 from "../../assets/partners/alrajhi-bank.jpg";
// import logo4 from "../../assets/partners/Astra-construction.jpg";
// import logo5 from "../../assets/partners/Bank-albilad.jpg";
// import logo6 from "../../assets/partners/D360.jpg";
// import logo7 from "../../assets/partners/Fahd.jpg";
// import logo8 from "../../assets/partners/fayfa.jpg";
// import logo9 from "../../assets/partners/GR.jpg";
// import logo10 from "../../assets/partners/Hadifco.jpg";
// import logo11 from "../../assets/partners/Masar-Aljazera.jpg";
// import logo12 from "../../assets/partners/Modon.jpg";
// import logo13 from "../../assets/partners/NHC.jpg";
// import logo14 from "../../assets/partners/Rabee-aljazeera.jpg";
// import logo15 from "../../assets/partners/SAB.jpg";
// import logo16 from "../../assets/partners/Riyad-bank.jpg";
// import logo17 from "../../assets/partners/Shibh-aljazera.jpg";

// export default function Partners() {
//   const partners = [
//     { id: 1, img: logo1, name: "" },
//     { id: 2, img: logo2 },
//     { id: 3, img: logo3 },
//     { id: 4, img: logo4 },
//     { id: 5, img: logo5 },
//     { id: 6, img: logo6 },
//     { id: 7, img: logo7 },
//     { id: 8, img: logo8 },
//     { id: 9, img: logo9 },
//     { id: 10, img: logo10 },
//     { id: 11, img: logo11 },
//     { id: 12, img: logo12 },
//     { id: 13, img: logo13 },
//     { id: 14, img: logo14 },
//     { id: 15, img: logo15 },
//     { id: 16, img: logo16 },
//     { id: 17, img: logo17 },
//   ];

//   return (
//     <section className="bg-white py-20 relative overflow-hidden">
//       <div className="text-center pb-20">
//         <h2 className="relative inline-block text-3xl md:text-4xl font-semibold text-[#0B3D2E] mx-auto">
//           Our Partners
//           {/* <span className="block w-32 h-[3px] bg-[#0B3D2E] mx-auto mt-3"></span>
//           <span className="block w-20 h-[3px] bg-[#D4AB50] mx-auto mt-1"></span> */}
//         </h2>
//       </div>

//       <div className="max-w-7xl px-3 mx-auto relative flex items-center">
//         {/* ====== الزر الأيسر ====== */}
//         <button className="swiper-button-prev border border-green-600 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full  transition absolute opacity-0 md:opacity-100 left-10 ">
//           <MoveLeft className="w-6 h-6 text-green-600" />
//         </button>

//         {/* ====== السلايدر ====== */}
//         <Swiper
//           modules={[Autoplay, Navigation]}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           slidesPerView={2}
//           spaceBetween={10}
//           loop={true}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             320: { slidesPerView: 2},
//             640: { slidesPerView: 3},
//             1024: { slidesPerView: 4 },
//           }}
//           className="w-full px-4"
//         >
//           {partners.map((partner) => (
//             <SwiperSlide key={partner.id}>
//               <div className="flex flex-col items-center text-gray-400 hover:text-black transition duration-300 group ">
//                 <img
//                   src={partner.img}
//                   alt={partner.name}
//                   className="w-34 h-28 mb-2  transition duration-300"
//                 />
               
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* ====== الزر الأيمن ====== */}
//         <button className="swiper-button-next border border-green-600 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition absolute opacity-0 md:opacity-100 right-10 ">
//           <MoveRight className="w-6 h-6 text-green-600" />
//         </button>
//       </div>
//     </section>
//   );
// }


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";

import logo1 from "../../assets/partners/Alinmaa-bank.jpg";
import logo2 from "../../assets/partners/Alomeir.jpg";
import logo3 from "../../assets/partners/alrajhi-bank.jpg";
import logo4 from "../../assets/partners/Astra-construction.jpg";
import logo5 from "../../assets/partners/Bank-albilad.jpg";
import logo6 from "../../assets/partners/D360.jpg";
import logo7 from "../../assets/partners/Fahd.jpg";
import logo8 from "../../assets/partners/fayfa.jpg";
import logo9 from "../../assets/partners/GR.jpg";
import logo10 from "../../assets/partners/Hadifco.jpg";
import logo11 from "../../assets/partners/Masar-Aljazera.jpg";
import logo12 from "../../assets/partners/Modon.jpg";
import logo13 from "../../assets/partners/NHC.jpg";
import logo14 from "../../assets/partners/Rabee-aljazeera.jpg";
import logo15 from "../../assets/partners/SAB.jpg";
import logo16 from "../../assets/partners/Riyad-bank.jpg";
import logo17 from "../../assets/partners/Shibh-aljazera.jpg";

export default function Partners() {
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
  ];

  return (
    <section className="bg-white py-14 md:py-20 overflow-hidden">
      {/* ===== Title ===== */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0B3D2E]">
          Our Partners
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* ===== Prev Button ===== */}
        <button className="swiper-button-prev hidden opacity-0 md:opacity-100 md:flex items-center justify-center
          absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2
          border border-green-600 bg-white hover:bg-green-50
          p-3 rounded-full transition z-10">
          <MoveLeft className="w-5 h-5 text-green-700" />
        </button>

        {/* ===== Slider ===== */}
        <Swiper
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
          spaceBetween={16}
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
                    w-24 h-16
                    sm:w-28 sm:h-18
                    md:w-32 md:h-20
                    lg:w-36 lg:h-24
                    object-contain
                    grayscale hover:grayscale-0
                    transition duration-300
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== Next Button ===== */}
        <button className="swiper-button-next hidden opacity-0 md:opacity-100 md:flex items-center justify-center
          absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2
          border border-green-600 bg-white hover:bg-green-50
          p-3 rounded-full transition z-10">
          <MoveRight className="w-5 h-5 text-green-700" />
        </button>
      </div>
    </section>
  );
}
