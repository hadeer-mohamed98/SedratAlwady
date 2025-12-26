// import { useState, useEffect, useRef } from "react";
// import CountUp from "react-countup";
// import { Users, Building, Clock, Hammer } from "lucide-react";

// export default function Counters() {
//   const [inView, setInView] = useState(false);
//   const sectionRef = useRef(null);

//   const counters = [
//     {
//       id: 1,
//       icon: Users,
//       title: "Happy Clients",
//       value: 220,
//       bg: "bg-[#0B3D2E]",
//     },
//     {
//       id: 2,
//       icon: Building,
//       title: "Completed Projects",
//       value: 180,
//       bg: "bg-[#D4AB50]",
//     },
//     {
//       id: 3,
//       icon: Clock,
//       title: "Years of Experience",
//       value: 3,
//       bg: "bg-[#1F2937]",
//     },
//     {
//       id: 4,
//       icon: Hammer,
//       title: "Team Members",
//       value: 120,
//       bg: "bg-red-500",
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//   }, []);

//   return (
//     <section ref={sectionRef} className="bg-gray-100 py-20">
//       <div className="text-center pb-20">
//         <h2 className="relative inline-block text-3xl md:text-4xl font-semibold text-[#0B3D2E] mx-auto">
//           Our Achievements
//           {/* <span className="block w-32 h-[3px] bg-[#0B3D2E] mx-auto mt-3"></span>
//           <span className="block w-20 h-[3px] bg-[#D4AB50] mx-auto mt-1"></span> */}
//         </h2>
//       </div>
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
//         {counters.map((counter) => {
//           const Icon = counter.icon;

//           return (
//             <div
//               key={counter.id}
//               className={`
//                           ${counter.bg}
//                           w-56 h-56 
//                           rounded-full 
//                           shadow-xl hover:scale-105
//                           transition duration-300 
//                           flex flex-col items-center justify-center 
//                           p-6 mx-auto
//                         `}
//             >
//               <Icon className="w-10 h-10 text-white mb-4" />

//               <h2 className="text-3xl font-bold text-white">
//                 {inView ? <CountUp end={counter.value} duration={2} /> : 0}+
//               </h2>

//               <p className="mt-2 text-white text-sm font-medium text-center">
//                 {counter.title}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Users, Building, Clock, Hammer } from "lucide-react";

export default function Counters() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const counters = [
    {
      id: 1,
      icon: Users,
      title: "Happy Clients",
      value: 220,
      bg: "bg-[#DEB339]",
    },
    {
      id: 2,
      icon: Building,
      title: "Completed Projects",
      value: 180,
      bg: "bg-[#00B13D]",
    },
    {
      id: 3,
      icon: Clock,
      title: "Years of Experience",
      value: 3,
      bg: "bg-[#00978B]",
    },
    {
      id: 4,
      icon: Hammer,
      title: "Team Members",
      value: 120,
      bg: "bg-[#B1DB20]",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-12 sm:py-16 md:py-20">
      {/* ===== Title ===== */}
      <div className="text-center mb-10 sm:mb-14 md:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3D2E]">
          Our Achievements
        </h2>
      </div>

      {/* ===== Counters ===== */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {counters.map((counter) => {
          const Icon = counter.icon;

          return (
            <div
              key={counter.id}
              className={`
                ${counter.bg}
                w-40 h-40
                sm:w-48 sm:h-48
                md:w-52 md:h-52
                lg:w-56 lg:h-56
                rounded-full
                shadow-xl
                hover:scale-105
                transition-transform duration-300
                flex flex-col items-center justify-center
                mx-auto
              `}
            >
              <Icon
                className="
                  w-6 h-6
                  sm:w-8 sm:h-8
                  md:w-9 md:h-9
                  lg:w-10 lg:h-10
                  text-white mb-2 sm:mb-3
                "
              />

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {inView ? <CountUp end={counter.value} duration={2} /> : 0}+
              </h2>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-white px-3">
                {counter.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
