import { LandPlot } from "lucide-react";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import landscape from "../../assets/land.webp";
import land1 from "../../assets/land1.webp";
import land2 from "../../assets/land2.webp";
import land3 from "../../assets/land3.webp";
import land4 from "../../assets/land4.webp";
import land5 from "../../assets/land5.webp";
import land6 from "../../assets/land6.webp";
import heroImg from "../../assets/landscape.webp";

export default function LandScape() {
  const pageTitle = "Landscape";

  const images = [
    { src: land1, title: "Irrigation Systems" },
    { src: land2, title: "Hardscape Works" },
    { src: land3, title: "Electrome Chanical" },
    { src: land4, title: "Outdoor lighting services" },
    { src: land5, title: "Garden furniture construction" },
    { src: land6, title: "Landscape Works" },
  ];

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={pageTitle} heroImg={heroImg} />

      {/* service section */}
      <section className="bg-gray-100 py-10 md:py-14 lg:py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-12">
          {/* Text */}
          <div className="flex-1 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3D2E] leading-tight mb-6">
              LANDSCAPE
            </h1>

            <p className="text-gray-500 mb-6 text-base sm:text-lg max-w-lg">
              Sedrat Al Wady for general contracting provides quality products
              and services to the landscape industry throughout the region. Our
              services vary in providing landscaping services with proven
              technical expertise, including:
            </p>

            <ul className="text-gray-500 text-base list-disc pl-6 max-w-lg space-y-1">
              <li>Soft landscape (Planting).</li>
              <li>Irrigation including designing services.</li>
              <li>
                Hardscape (paving, walkways & driveways inside landscape areas).
              </li>
              <li>
                Electromechanical works for water features like fountains,
                waterfalls & swimming pools.
              </li>
              <li>Outdoor lighting services.</li>
              <li>Garden furniture construction.</li>
              <li>Road works.</li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
              <LandPlot className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 text-white bg-[#00803abe] rounded-lg p-3 z-10" />
              <img
                src={landscape}
                alt="landscape"
                className="w-full rounded-xl md:rounded-tl-[100px] shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* masonry grid */}
      <div className="container mx-auto py-10 md:py-20 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* title */}
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
