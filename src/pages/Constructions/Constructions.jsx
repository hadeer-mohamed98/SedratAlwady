import { HardHat } from "lucide-react";
import worker from "../../assets/engineers.webp";
import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import const1 from "../../assets/const1.webp";
import const2 from "../../assets/const6.webp";
import const3 from "../../assets/const3.webp";
import const4 from "../../assets/const7.webp";
import const5 from "../../assets/const5.webp";
import const6 from "../../assets/const2.webp";
import const7 from "../../assets/const4.webp";
import const8 from "../../assets/const8.webp";
import const9 from "../../assets/const9.webp";
import const10 from "../../assets/const10.webp";
import const11 from "../../assets/const11.webp";
import const12 from "../../assets/const12.webp";
import heroImg from "../../assets/HomeSlider/construction.webp";

export default function Constructions() {
  const pageTitle = "Constructions";

  const images = [
    { src: const1, title: "Electrical Works" },
    { src: const2, title: "HVAC Works" },
    { src: const3, title: "Plumbing Systems" },
    { src: const4, title: "Smart Home Solutions" },
    { src: const5, title: "Maintenance Services" },
    { src: const6, title: "Concrete Construction" },
    { src: const7, title: "Steel Structures" },
    { src: const8, title: "Cleaning services" },
    { src: const9, title: "Fire Fighting Works" },
    { src: const10, title: "Networking Works" },
    { src: const11, title: "Civil Works" },
    { src: const12, title: "High-End Finishing" },
  ];

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={pageTitle} heroImg={heroImg} />

      {/* service 1 */}
      <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-10 md:py-15 gap-12">
        {/* Text */}
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3D2E] leading-tight mb-6">
            CONSTRUCTION
          </h1>

          <p className="text-gray-500 mb-6 text-base sm:text-lg max-w-lg">
            Sedrat Al Wady for general contracting provides a range of services
            that end up structuring a winning formula for tackling and managing
            your construction project effectively, including:
          </p>

          <ul className="text-gray-500 text-base list-disc pl-6 max-w-lg space-y-1">
            <li>Civil Works (including steel and concrete works).</li>
            <li>High-End Finishing.</li>
            <li>Networking Works.</li>
            <li>Electrical Works.</li>
            <li>Plumbing Works.</li>
            <li>HVAC Works (including energy saving solutions).</li>
            <li>Fire Fighting Works.</li>
            <li>Smart Home Solutions.</li>
            <li>Operation services for buildings and facilities.</li>
            <li>Cleaning services for various buildings and facilities.</li>
            <li>Building maintenance services.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
            <HardHat className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 text-white bg-[#00803abe] rounded-lg p-3 z-10" />
            <img
              src={worker}
              alt="engineers"
              className="w-full rounded-xl md:rounded-tl-[100px] shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* masonry grid */}
      <div className="container mx-auto py-10 md:py-20 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
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
