// import { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useTransform,
//   animate,
// } from "framer-motion";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCube, Autoplay, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/navigation";

// import { Link } from "react-router-dom";

// import slider1 from "../../assets/HomeSlider/villa.webp";
// import slider2 from "../../assets/HomeSlider/maket3D.webp";
// import slider3 from "../../assets/HomeSlider/construction.webp";
// import slider4 from "../../assets/HomeSlider/plant.webp";

// const SLIDE_DURATION = 5500;

// const slides = [
//   {
//     image: slider1,
//     welcome: "Welcome To",
//     title: "Sedrat Al Wady Company",
//     subtitle: "Your Partner in Construction & Landscaping Solutions",
//   },
//   {
//     image: slider2,
//     title: "Construction",
//     subtitle:
//       " Providing Reliable Construction Solutions with High Quality Standards and Long-Lasting Results",
//   },
//   {
//     image: slider3,
//     title: "Construction",
//     subtitle:
//       " Providing Reliable Construction Solutions with High Quality Standards and Long-Lasting Results",
//   },
//   {
//     image: slider4,
//     title: "Landscape & Hardscape",
//     subtitle:
//       "Designing and Executing Landscape & Hardscape Projects that Combine Beauty, Functionality, and Precision.",
//   },
//   // {
//   //   image: slider4,
//   //   title: "Supplying Trees & Maintenance",
//   //   subtitle:
//   //     "Supplying Premium Quality Trees with Comprehensive Maintenance Services to Keep Your Spaces Green and Healthy.",
//   // },
// ];

// const contentVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.8, // ⬅️ هنا التأخير بعد ظهور الصورة
//       duration: 0.55,
//       ease: [0.22, 1, 0.36, 1], // cinematic ease
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: {
//       duration: 0.25,
//       ease: "easeIn",
//     },
//   },
// };

// export default function HomeHero() {
//   const heroRef = useRef(null);
//   const [isInView, setIsInView] = useState(true);

//   const [[index, direction], setIndex] = useState([0, 1]);
//   const [isPaused, setIsPaused] = useState(false);

//   const progress = useMotionValue(0);
//   const scale = useTransform(progress, [0, 100], [1, 1.05]);

//   const timerRef = useRef(null);

//   // ===== Preload next images =====

//   useEffect(() => {
//     const img = new Image();
//     img.src = slides[(index + 1) % slides.length].image;
//   }, [index]);

//   const paginate = (dir) => {
//     setIndex(([prev]) => [(prev + dir + slides.length) % slides.length, dir]);
//   };

//   // ===== Progress animation =====
//   useEffect(() => {
//     if (isPaused || !isInView) return;

//     progress.set(0);

//     const controls = animate(progress, 100, {
//       duration: SLIDE_DURATION / 1000,
//       ease: "linear",
//       onComplete: () => paginate(1),
//     });

//     return () => controls.stop();
//   }, [index, isPaused, isInView]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting);
//       },
//       {
//         threshold: 0.3, // لو 30% من العنصر ظاهر
//       }
//     );

//     if (heroRef.current) observer.observe(heroRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen w-full overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* ===== Progress Bar (no re-render) ===== */}
//       <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90%] h-[3px] bg-white/30 rounded-full z-30 overflow-hidden">
//         <motion.div
//           className="h-full bg-[#3CAB41]"
//           style={{ width: progress }}
//         />
//       </div>
// {/* ======================================== */}
// <Swiper
//   modules={[EffectCube, Autoplay, Navigation]}
//   effect="cube"
//   grabCursor={true}
//   cubeEffect={{
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   }}
//   autoplay={{
//     delay: SLIDE_DURATION,
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true,
//   }}
//   navigation
//   loop
//   className="h-screen w-full"
// >
//   {slides.map((slide, i) => (
//     <SwiperSlide key={i}>
//       <div className="relative h-full w-full">
//         {/* Background */}
//         <img
//           src={slide.image}
//           className="absolute inset-0 w-full h-full object-cover"
//           alt=""
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Content */}
//         <motion.div
//           variants={contentVariants}
//           initial="hidden"
//           animate="visible"
//           className="
//             relative z-10 flex flex-col justify-center h-full
//             px-10 lg:px-32 max-w-7xl
//           "
//         >
//           {slide.welcome && (
//             <h2 className="text-white text-xl md:text-3xl font-bold pb-4">
//               {slide.welcome}
//             </h2>
//           )}

//           <h1 className="text-white text-3xl md:text-5xl font-bold pb-4">
//             {slide.title}
//           </h1>

//           <p className="text-white text-base md:text-xl max-w-xl pb-6">
//             {slide.subtitle}
//           </p>

//           <div className="flex gap-4">
//             <Link
//               to="/projects"
//               className="bg-[#00B13D] px-8 py-2 rounded-full text-white"
//             >
//               Our Projects »
//             </Link>
//             <Link
//               to="/contact"
//               className="bg-[#00B13D] px-8 py-2 rounded-full text-white"
//             >
//               Contact Us »
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>
// {/* ================================================= */}

//       {/* <AnimatePresence mode="sync">
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.35 }}
//         > */}
//           {/* ===== Background Image ===== */}
//           {/* <motion.img
//             src={slides[index].image}
//             alt=""
//             className="absolute inset-0 w-full h-full object-cover -z-10"
//             style={{ scale }}
//           /> */}

//           {/* ===== Content (Delayed) ===== */}
//           {/* <motion.div
//             variants={contentVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="
//                         relative z-10 flex flex-col justify-center h-full
//                         px-10  lg:px-32
//                         md:pt-30 pt-10
//                         max-w-7xl
//                       "
//           >
//             <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-bold pb-4">
//               {slides[index].welcome}
//             </h2>
//             <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold pb-4 leading-tight">
//               {slides[index].title}
//             </h1>

//             <h2
//               className="
//                         text-white text-base md:text-xl
//                         font-medium pb-4 max-w-xl
//                       "
//             >
//               {slides[index].subtitle}
//             </h2>
//             <div className="flex flex-col md:my-4 sm:flex-row gap-4 ">
//               <Link
//                 to="/projects"
//                 className="bg-[#00B13D] hover:bg-[#00978B] text-white
//                             text-base font-semibold
//                             px-8 py-2 rounded-full transition text-center"
//               >
//                 Our Projects »
//               </Link>

//               <Link
//                 to="/contact"
//                 className="bg-[#00B13D] hover:bg-[#00978B] text-white
//                             text-base  font-semibold
//                             px-8 py-2 rounded-full transition text-center"
//               >
//                 Contact Us »
//               </Link>
//             </div>
//           </motion.div>
//         </motion.div>
//       </AnimatePresence> */}

//       {/* ===== Arrows ===== */}
//       {/* <button
//         onClick={() => paginate(-1)}
//         className="
//     hidden md:flex absolute left-6 top-1/2 -translate-y-1/2
//     text-white text-4xl z-30
//   "
//       >
//         ‹
//       </button>

//       <button
//         onClick={() => paginate(1)}
//         className="
//     hidden md:flex absolute right-6 top-1/2 -translate-y-1/2
//     text-white text-4xl z-30
//   "
//       >
//         ›
//       </button> */}
//     </section>
//   );
// }

// ===========================stage1===================

// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// //         EffectCube
// import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
// import { motion, useMotionValue } from "framer-motion";
// import { Link } from "react-router-dom";

// import "swiper/css";
// // import "swiper/css/effect-cube";
// import "swiper/css/navigation";

// import slider1 from "../../assets/HomeSlider/villa.webp";
// import slider2 from "../../assets/HomeSlider/maket3D.webp";
// import slider3 from "../../assets/HomeSlider/construction.webp";
// import slider4 from "../../assets/HomeSlider/plant.webp";

// const SLIDE_DURATION = 5500;
// // ============================
// const creativeEffect = {
//   prev: {
//     shadow: true,
//     translate: ["-20%", 0, -1],
//   },
//   next: {
//     translate: ["100%", 0, 0],
//   },
// };
// // =====================
// const slides = [
//   {
//     image: slider1,
//     welcome: "Welcome To",
//     title: "Sedrat Al Wady Company",
//     subtitle: "Your Partner in Construction & Landscaping Solutions",
//   },
//   {
//     image: slider2,
//     title: "Construction",
//     subtitle:
//       "Providing Reliable Construction Solutions with High Quality Standards",
//   },
//   {
//     image: slider3,
//     title: "Construction",
//     subtitle:
//       "Providing Reliable Construction Solutions with High Quality Standards",
//   },
//   {
//     image: slider4,
//     title: "Landscape & Hardscape",
//     subtitle: "Designing Landscape & Hardscape Projects with Precision",
//   },
// ];

// export default function HomeHero() {
//   const progress = useMotionValue(0);

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* ===== Progress Bar ===== */}
//       <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] h-[3px] bg-white/30 rounded-full z-50 overflow-hidden">
//         <motion.div
//           className="h-full bg-[#3CAB41]"
//           style={{ width: progress }}
//         />
//       </div>

//       {/* <Swiper
//         modules={[EffectCube, Autoplay, Navigation]}
//         effect="cube"
//         grabCursor
//         loop
//         navigation
//         cubeEffect={{
//           shadow: true,
//           slideShadows: true,
//           shadowOffset: 25,
//           shadowScale: 0.9,
//         }}
//         autoplay={{
//           delay: SLIDE_DURATION,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         onAutoplayTimeLeft={(_, timeLeft, percentage) => {
//           progress.set((1 - percentage) * 100);
//         }}
//         onSlideChange={() => progress.set(0)}
//         className="h-full w-full"
//       > */}
//       <Swiper
//         modules={[EffectCreative, Autoplay, Navigation]}
//         effect="creative"
//         grabCursor
//         loop
//         navigation
//         speed={1000}
//         creativeEffect={creativeEffect}
//         autoplay={{
//           delay: SLIDE_DURATION,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         onAutoplayTimeLeft={(_, __, progressRatio) => {
//           progress.set((1 - progressRatio) * 100);
//         }}
//         onSlideChange={() => progress.set(0)}
//         className="h-full w-full"
//       >
//         {/* ========================== */}
//         {slides.map((slide, i) => (
//           <SwiperSlide key={i}>
//             <div className="relative h-full w-full">
//               {/* Background */}
//               <img
//                 src={slide.image}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40" />

//               {/* Content */}
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//                 className="
//                   relative z-10 flex flex-col justify-center h-full
//                   px-10 lg:px-32 max-w-7xl
//                 "
//               >
//                 {slide.welcome && (
//                   <h2 className="text-white text-xl md:text-3xl font-bold pb-4">
//                     {slide.welcome}
//                   </h2>
//                 )}

//                 <h1 className="text-white text-3xl md:text-5xl font-bold pb-4">
//                   {slide.title}
//                 </h1>

//                 <p className="text-white text-base md:text-xl max-w-xl pb-6">
//                   {slide.subtitle}
//                 </p>

//                 <div className="flex gap-4">
//                   <Link
//                     to="/projects"
//                     className="bg-[#00B13D] px-8 py-2 rounded-full text-white"
//                   >
//                     Our Projects »
//                   </Link>
//                   <Link
//                     to="/contact"
//                     className="bg-[#00B13D] px-8 py-2 rounded-full text-white"
//                   >
//                     Contact Us »
//                   </Link>
//                 </div>
//               </motion.div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
// =============stage elegant==================
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
// import { Link } from "react-router-dom";

// import "swiper/css";
// import "swiper/css/navigation";

// import slider1 from "../../assets/HomeSlider/villa.webp";
// import slider2 from "../../assets/HomeSlider/maket3D.webp";
// import slider3 from "../../assets/HomeSlider/construction.webp";
// import slider4 from "../../assets/HomeSlider/plant.webp";

// const SLIDE_DURATION = 5000;

// const creativeEffect = {
//   prev: {
//     translate: ["-10%", 0, -1],
//   },
//   next: {
//     translate: ["100%", 0, 0],
//   },
// };

// const slides = [
//   {
//     image: slider1,
//     welcome: "Welcome To",
//     title: "Sedrat Al Wady Company",
//     subtitle: "Your Partner in Construction & Landscaping Solutions",
//   },
//   {
//     image: slider2,
//     title: "Construction",
//     subtitle:
//       "Providing Reliable Construction Solutions with High Quality Standards",
//   },
//   {
//     image: slider3,
//     title: "Construction",
//     subtitle:
//       "Providing Reliable Construction Solutions with High Quality Standards",
//   },
//   {
//     image: slider4,
//     title: "Landscape & Hardscape",
//     subtitle: "Designing Landscape & Hardscape Projects with Precision",
//   },
// ];

// export default function HomeHero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <Swiper
//         modules={[EffectCreative, Autoplay, Navigation]}
//         effect="creative"
//         loop
//         speed={1000}
//         navigation
//         autoplay={{
//           delay: SLIDE_DURATION,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         creativeEffect={creativeEffect}
//         className="h-full w-full"
//       >
//         {slides.map((slide, i) => (
//           <SwiperSlide key={i}>
//             <div className="relative h-full w-full overflow-hidden">
//               {/* Background Image with CSS Zoom */}
//               <img
//                 src={slide.image}
//                 alt=""
//                 loading="lazy"
//                 decoding="async"
//                 className="hero-image absolute inset-0 w-full h-full object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40" />

//               {/* Content */}
//               <div className="hero-content relative z-10 flex flex-col justify-center h-full px-10 lg:px-32 max-w-7xl">
//                 {slide.welcome && (
//                   <h2 className="text-white text-xl md:text-3xl font-bold pb-4">
//                     {slide.welcome}
//                   </h2>
//                 )}

//                 <h1 className="text-white text-3xl md:text-5xl font-bold pb-4">
//                   {slide.title}
//                 </h1>

//                 <p className="text-white text-base md:text-xl max-w-xl pb-6">
//                   {slide.subtitle}
//                 </p>

//                 <div className="flex gap-4">
//                   <Link
//                     to="/projects"
//                     className="bg-[#00B13D] px-8 py-2 rounded-full text-white"
//                   >
//                     Our Projects »
//                   </Link>
//                   <Link
//                     to="/contact"
//                     className="bg-[#00B13D] px-8 py-2 rounded-full text-white"
//                   >
//                     Contact Us »
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// ================elegant2=================

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import slider1 from "../../assets/HomeSlider/villa.webp";
import slider2 from "../../assets/HomeSlider/maket3D.webp";
import slider3 from "../../assets/HomeSlider/construction.webp";
import slider4 from "../../assets/HomeSlider/plant.webp";

const SLIDE_DURATION = 5000;

const slides = [
  {
    image: slider1,
    welcome: "Welcome To",
    title: "Sedrat Al Wady Company",
    subtitle: "Your Partner in Construction & Landscaping Solutions",
  },
  {
    image: slider2,
    title: "Construction",
    subtitle:
      "Providing Reliable Construction Solutions with High Quality Standards",
  },
  {
    image: slider3,
    title: "Construction",
    subtitle:
      "Providing Reliable Construction Solutions with High Quality Standards",
  },
  {
    image: slider4,
    title: "Landscape & Hardscape",
    subtitle: "Designing Landscape & Hardscape Projects with Precision",
  },
];

export default function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Progress Bar */}
      {/* <div className="hero-progress">
        <span className="hero-progress-bar" />
      </div> */}

      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        speed={800}
        navigation
        autoplay={{
          delay: SLIDE_DURATION,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Media Wrapper (important) */}
              <div className="hero-media">
                <img
                  src={slide.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="hero-image"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="hero-content relative z-10 flex flex-col justify-center h-full px-10 lg:px-32 max-w-7xl">
                {slide.welcome && (
                  <h2 className="text-white text-xl md:text-3xl font-bold pb-4">
                    {slide.welcome}
                  </h2>
                )}

                <h1 className="text-white text-3xl md:text-5xl font-bold pb-4">
                  {slide.title}
                </h1>

                <p className="text-white text-base md:text-xl max-w-xl pb-6">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col md:flex-row  gap-4">
                  <Link
                    to="/projects"
                    className="bg-[#00B13D] px-8 py-2 text-center rounded-full text-white"
                  >
                    Our Projects »
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-[#00B13D] px-8 py-2 text-center rounded-full text-white"
                  >
                    Contact Us »
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}



// =================stage3=================

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
// import { motion, useMotionValue } from "framer-motion";
// import { Link } from "react-router-dom";

// import "swiper/css";
// import "swiper/css/effect-creative";
// import "swiper/css/navigation";

// import slider1 from "../../assets/HomeSlider/villa.webp";
// import slider2 from "../../assets/HomeSlider/maket3D.webp";
// import slider3 from "../../assets/HomeSlider/construction.webp";
// import slider4 from "../../assets/HomeSlider/plant.webp";

// const SLIDE_DURATION = 5500;

// const creativeEffect = {
//   prev: {
//     translate: ["-120%", 0, -500],
//     opacity: 0.5,
//   },
//   next: {
//     translate: ["120%", 0, 0],
//   },
// };

// const slides = [
//   {
//     image: slider1,
//     welcome: "Welcome To",
//     title: "Sedrat Al Wady Company",
//     subtitle: "Your Partner in Construction & Landscaping Solutions",
//   },
//   {
//     image: slider2,
//     title: "Construction",
//     subtitle:
//       "Providing Reliable Construction Solutions with High Quality Standards",
//   },
//   {
//     image: slider3,
//     title: "Construction",
//     subtitle:
//       "Providing Reliable Construction Solutions with High Quality Standards",
//   },
//   {
//     image: slider4,
//     title: "Landscape & Hardscape",
//     subtitle: "Designing Landscape & Hardscape Projects with Precision",
//   },
// ];
// export default function HomeHero() {
//   const progress = useMotionValue(0);

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* ===== Progress Bar ===== */}
//       <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] h-[3px] bg-white/30 rounded-full z-50 overflow-hidden">
//         <motion.div
//           className="h-full bg-[#3CAB41]"
//           style={{ width: progress }}
//         />
//       </div>

//       <Swiper
//         modules={[EffectCreative, Autoplay, Navigation]}
//         effect="creative"
//         parallax
//         grabCursor
//         loop
//         navigation
//         speed={1200}
//         creativeEffect={creativeEffect}
//         autoplay={{
//           delay: SLIDE_DURATION,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         onAutoplayTimeLeft={(_, __, ratio) => {
//           progress.set((1 - ratio) * 100);
//         }}
//         onSlideChange={() => progress.set(0)}
//         className="h-full w-full"
//       >
//         {slides.map((slide, i) => (
//           <SwiperSlide key={i}>
//             <div className="relative h-full w-full">
//               {/* ===== Background (Parallax Slow) ===== */}
//     <img
//   src={slide.image}
//   alt=""
//   data-swiper-parallax="-300"
//   className="
//     absolute inset-0 w-full h-full object-cover
//     scale-110 swiper-zoom-image
//   "
// />


//               {/* Overlay */}
//               <div
//                 className="absolute inset-0 bg-black/40"
//                 data-swiper-parallax="-200"
//               />

//               {/* ===== Content (Parallax Faster) ===== */}
//               <div
//                 className="
//                   relative z-10 flex flex-col justify-center h-full
//                   px-10 lg:px-32 max-w-7xl
//                 "
//                 data-swiper-parallax="300"
//               >
//                 {slide.welcome && (
//                   <motion.h2
//                     data-swiper-parallax="400"
//                     className="text-white text-xl md:text-3xl font-bold pb-4"
//                   >
//                     {slide.welcome}
//                   </motion.h2>
//                 )}

//                 <motion.h1
//                   data-swiper-parallax="500"
//                   className="text-white text-3xl md:text-5xl font-bold pb-4"
//                 >
//                   {slide.title}
//                 </motion.h1>

//                 <motion.p
//                   data-swiper-parallax="600"
//                   className="text-white text-base md:text-xl max-w-xl pb-6"
//                 >
//                   {slide.subtitle}
//                 </motion.p>

//                 <motion.div
//                   data-swiper-parallax="700"
//                   className="flex gap-4"
//                 >
//                   <Link
//                     to="/projects"
//                     className="bg-[#00B13D] px-8 py-2 rounded-full text-white"
//                   >
//                     Our Projects »
//                   </Link>
//                   <Link
//                     to="/contact"
//                     className="bg-[#00B13D] px-8 py-2 rounded-full text-white"
//                   >
//                     Contact Us »
//                   </Link>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
