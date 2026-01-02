import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import heroImg from "../../assets/HomeSlider/maket3D.webp";
import project1 from "../../assets/projects/p1-1.webp";
import project2 from "../../assets/projects/p1-2.webp";
import project3 from "../../assets/projects/p1-3.webp";
import project4 from "../../assets/projects/p1-4.webp";
import project5 from "../../assets/projects/p1-5.webp";
import project6 from "../../assets/projects/p1-6.webp";
import project7 from "../../assets/projects/p1-7.webp";
import project8 from "../../assets/projects/p1-8.webp";
import project9 from "../../assets/projects/p1-9.webp";
import project10 from "../../assets/projects/p1-10.webp";
import project11 from "../../assets/projects/p1-11.webp";
import project12 from "../../assets/projects/p1-12.webp";
import project13 from "../../assets/projects/p2-12.webp";
import project14 from "../../assets/projects/p2-1.webp";
import project15 from "../../assets/projects/p2-2.webp";
import project16 from "../../assets/projects/p2-3.webp";
import project17 from "../../assets/projects/p2-4.webp";
import project18 from "../../assets/projects/p2-5.webp";
import project19 from "../../assets/projects/p2-6.webp";
import project20 from "../../assets/projects/p2-7.webp";
import project21 from "../../assets/projects/p2-8.webp";
import project22 from "../../assets/projects/p2-9.webp";
import project23 from "../../assets/projects/p2-10.webp";
import project24 from "../../assets/projects/p2-11.webp";

import { useTranslation } from "react-i18next";


export default function Projects() {
  const {t} = useTranslation();
  const pageTitle = t("projects.title");

  const marciaImages = [
    { src: project1 },
    { src: project2 },
    { src: project3 },
    { src: project4 },
    { src: project5 },
    { src: project6 },
    { src: project7 },
    { src: project8 },
    { src: project9 },
    { src: project10 },
    { src: project11 },
    { src: project12 },
  ];
  const elhaerImages = [
    { src: project13 },
    { src: project14 },
    { src: project15},
    { src: project16},
    { src: project17},
    { src: project18},
    { src: project19},
    { src: project20},
    { src: project21},
    { src: project22 },
    { src: project23 },
    { src: project24 },
  ];

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={pageTitle} heroImg={heroImg} />

      {/* ===== Marcia park 2, khuzam district, riyadh ===== */}
      {/* ===== Title ===== */}
      <div className="text-center my-10 md:mt-15">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3D2E]">
          {t("projects.project1")}
        </h2>
      </div>
      {/* masonry grid */}
      <div className="container mx-auto py-10 md:py-15 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {marciaImages.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={item.src}
                alt= "marcia park 2"
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== Al-haer road works, industrial cities, riyadh ===== */}

      {/* ===== Title ===== */}
      <div className="text-center my-10 md:mt-15">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3D2E]">
          {t("projects.project2")}
        </h2>
      </div>
      {/* masonry grid */}
      <div className="container mx-auto py-10 md:py-15 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {elhaerImages.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={item.src}
                alt="al haer works"
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
