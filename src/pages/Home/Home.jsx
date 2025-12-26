// import dots from "../../assets/Dotts.svg";
// import worker from "../../assets/engineers.webp";
// // import grass from "../../assets/footer-v1-shape3.png";
// import certificate1 from "../../assets/certificate1.webp";
// import certificate2 from "../../assets/certificate2.webp";
// import UseScrollAnimation from "../../hooks/UseScrollAnimation/UseScrollAnimation.jsx";
// import "swiper/css";
// import ServiceSlider from "../../components/ServiceSlider/ServiceSlider.jsx";
// import Partners from "../../components/Partners/Partners.jsx";
// import Counters from "../../components/Counters/Counters.jsx";
// import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
// import HomeHero from "../../components/HomeHero/HomeHero.jsx";
// // import { Link } from "react-router-dom";

// export default function Home() {
//   const [leftRef, leftClass] = UseScrollAnimation(
//     "animate-fade-down",
//     "delay-300"
//   );
//   const [rightRef, rightClass] = UseScrollAnimation(
//     "animate-slide-top-right",
//     "delay-300"
//   );

//   return (
//     <>
//       <div className="overflow-x-hidden">
//         <ScrollToTopButton />
//         <HomeHero />

//         {/* company introduction */}
//         <div className="bg-gray-100 py-15">
//           <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-8">
//             {/* Left Text Section */}
//             <div
//               ref={leftRef}
//               className={`flex-1 justify-center items-center text-left px-5 md:pl-20 ${leftClass}`}
//             >
//               <h1 className="text-3xl md:text-4xl font-semibold text-[#0B3D2E] leading-tight py-4">
//                 Sedrat Al Wadi <br className="hidden md:block" />
//                 was founded in <br className="hidden md:block" /> 2023,
//               </h1>

//               <p className="text-gray-500 pb-4 max-w-md text-sm md:text-lg">
//                 and has become one of the leading companies in general
//                 contracting, landscape design, and hardscape works in Saudi
//                 Arabia.
//               </p>

//               <p className="text-gray-500 pb-4 max-w-md text-sm md:text-lg">
//                 In 2025, the company was officially classified in the fields of
//                 construction, building, operation, maintenance, and services,
//                 earning the Fifth Grade Classification in the Kingdom of Saudi
//                 Arabia.
//               </p>
//             </div>

//             {/* Right Image Section */}
//             <div
//               ref={rightRef}
//               className={`flex-1 relative flex px-5 pb-5 justify-center items-center ${rightClass}`}
//             >
//               <div className="relative inline-block">
//                 <img
//                   src={dots}
//                   alt="dots decoration"
//                   className="absolute -bottom-10 left-0 size-16 md:size-32 md:-left-13 z-0"
//                 />
//                 <img
//                   src={worker}
//                   alt="engineers"
//                   className="relative shadow-lg w-full max-w-sm md:max-w-lg rounded-xl md:rounded-tl-[100px] animate-float z-10"
//                 />
//               </div>
//             </div>
//           </section>
//         </div>

//         <div className="bg-white py-15">

//           <section className="relative flex flex-col justify-center items-center bg-[#0B3D2C] border border-[#347e35] rounded-xl p-10 text-white max-w-5xl  md:mx-auto my-10 animate-fade-down">
//           <h3 className="text-white pb-5 text-center text-2xl md:text-4xl font-semibold">Commercial Registration Certificate</h3>
//             {/* <img
//               src={grass}
//               alt="grass"
//               className=" absolute w-[300%] h-26 opacity-10 bottom-0 start-0 end-0"
//             /> */}

//             <div className=" flex flex-col md:flex-row items-center gap-5 justify-between ">
//               {/* <div className="md:w-1/2 px-8 ">
//                 {" "} */}
//                 {/* ==== Text ==== */}
//                 {/* <p className=" md:mr-2 text-left text-xl md:text-2xl leading-relaxed font-medium md:max-w-3xl mb-10">
//                   At{" "}
//                   <span className="font-bold text-[#7ADF68]">
//                     Sedrat Al Wadi
//                   </span>
//                   , we believe that quality starts with attention to detail. We
//                   deliver every project with the highest engineering and
//                   professional standards, creating environments that combine
//                   beauty, functionality, and sustainability.
//                 </p> */}
//                 {/* ==== Button ==== */}
//                 {/* <Link
//                   to={"/services"}
//                   className="bg-[#347e35] hover:bg-[#3e9e46] md:text-lg text-lg text-white font-semibold px-8 py-4 rounded-md shadow-md transition-transform duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
//                 >
//                   Explore Our Services »
//                 </Link>
//               </div> */}
//               <div className="md:w-1/2 md:p-8">
//                 <img src={certificate1} alt="certificate" />
//               </div>
//               <div className="md:w-1/2 md:p-8">
//                 <img src={certificate2} alt="certificate" />
//               </div>
//             </div>
//           </section>
//         </div>
//         <ServiceSlider />
//         <Counters />
//         <Partners />
//       </div>
//     </>
//   );
// }

import dots from "../../assets/Dotts.svg";
import worker from "../../assets/engineers.webp";
import certificate1 from "../../assets/certificate1.webp";
import certificate2 from "../../assets/certificate2.webp";

import UseScrollAnimation from "../../hooks/UseScrollAnimation/UseScrollAnimation.jsx";
import ServiceSlider from "../../components/ServiceSlider/ServiceSlider.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import Counters from "../../components/Counters/Counters.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import HomeHero from "../../components/HomeHero/HomeHero.jsx";

export default function Home() {
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
      <HomeHero />

      {/* ===== Company Introduction ===== */}
      <section className="bg-gray-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">
          
          {/* Text */}
          <div
            ref={leftRef}
            className={`flex-1 text-left md:pl-10 ${leftClass}`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3D2E] leading-snug mb-4">
              Sedrat Al Wadi was founded in 2023
            </h1>

            <p className="text-gray-500 mb-4 max-w-xl text-sm sm:text-base md:text-lg">
              and has become one of the leading companies in general contracting,
              landscape design, and hardscape works in Saudi Arabia.
            </p>

            <p className="text-gray-500 max-w-xl text-sm sm:text-base md:text-lg">
              In 2025, the company was officially classified in construction,
              building, operation, maintenance, and services, earning the Fifth
              Grade Classification in the Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Image */}
          <div
            ref={rightRef}
            className={`flex-1 flex justify-center ${rightClass}`}
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
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="
            bg-[#0B3D2C] border border-[#347e35]
            rounded-xl p-6 sm:p-8 md:p-10
            text-white text-center
            animate-fade-down
          ">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-8">
              Commercial Registration Certificate
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
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
      </section>

      {/* ===== Other Sections ===== */}
      <ServiceSlider />
      <Counters />
      <Partners />
    </div>
  );
}
