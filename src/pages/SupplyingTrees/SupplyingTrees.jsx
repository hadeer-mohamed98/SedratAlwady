import { TreePalm } from "lucide-react";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import worker from "../../assets/engineers.webp";
import sup1 from "../../assets/sup1.webp";
import sup2 from "../../assets/sup2.webp";
import sup3 from "../../assets/sup3.webp";
import sup4 from "../../assets/sup4.webp";
import sup5 from "../../assets/sup5.jpg";
import sup6 from "../../assets/sup6.jpg";
import heroImg from "../../assets/img4.jpg";

export default function SupplyingTrees() {
  const pageTitle = "Supplying Trees";

  const images = [
    { src: sup1, title: "Acacia Glauca" },
    { src: sup2, title: "Landscape Trees" },
    { src: sup3, title: "Poinciana Trees" },
    { src: sup4, title: "Tecoma Trees" },
    { src: sup5, title: "Ornamental Shrubs" },
    { src: sup6, title: "Decorative Palms" },
  ];

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={pageTitle} heroImg={heroImg} />

      {/* service section */}
      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-12">

          {/* Text */}
          <div className="flex-1 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3D2E] leading-tight mb-6">
              SUPPLYING TREES
            </h1>

            <p className="text-justify text-gray-500 mb-6 text-base sm:text-lg max-w-lg">
              Sedrat Al Wady: In ecosystems, trees stand as silent architecture,
              providing oxygen, shaping landscapes, and embodying the timeless
              connection between nature and humanity. Its sustainable supply
              preserves harmony and beauty for generations.
            </p>

            <ul className="text-gray-500 mb-6 text-base list-disc pl-6 max-w-lg space-y-1">
              <li>Acacia glauca trees.</li>
              <li>Tecoma trees.</li>
              <li>Poinciana trees.</li>
            </ul>

            <p className="text-gray-500 text-base sm:text-lg max-w-lg">
              Not only that, but we offer everything you need in this field.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
              <TreePalm className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 text-white bg-[#00803abe] rounded-lg p-3 z-10" />
              <img
                src={worker}
                alt="engineers"
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
