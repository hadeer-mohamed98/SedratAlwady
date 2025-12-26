import { Link, useLocation } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import dots from "../../assets/Dotts.svg";
import landscape from "../../assets/land6.webp";
import trees from "../../assets/sup2.webp";
import construction from "../../assets/const.webp";
import heroImg from "../../assets/engineers.webp";

import { ArrowBigLeft, ArrowRight } from "lucide-react";

export default function Services() {
  const location = useLocation();
  const pageTitle = location.state?.title || "Our Services";

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={pageTitle} heroImg={heroImg} />

      {/* service 1 */}
      <div className="bg-white py-15 md:py-20">
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-12">
          {/* Text */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B3D2E] leading-tight mb-6">
              CONSTRUCTION
            </h1>

            <p className="text-gray-500 mb-8 max-w-lg lg:max-w-xl text-base sm:text-lg lg:text-xl">
              We provide high-quality construction services delivered with
              precision, safety, and efficiency. Our team executes every project
              with professional standards, ensuring durability, accuracy, and
              timely completion.From structural works to finishing, we build
              with integrity and excellence.
            </p>

            <Link
              to="/services/constructions"
              className="text-green-500 hover:text-green-800 text-base sm:text-lg lg:text-xl flex items-center gap-2"
            >
              Explore more <ArrowRight />
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center relative ">
            <div className="relative">
              <img
                src={dots}
                alt="dots"
                className="absolute -bottom-9 -left-10 w-24 h-24 hidden sm:block"
              />
              <img
                src={construction}
                alt="construction"
                className="w-full max-w-md lg:max-w-lg rounded-xl md:rounded-tl-[100px] shadow-lg animate-float"
              />
            </div>
          </div>
        </section>
      </div>

      {/* service 2 */}
      <div className="bg-gray-100 py-15 md:py-20">
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-12">
          {/* Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              <img
                src={dots}
                alt="dots decoration"
                className="absolute -bottom-9 -left-10 w-24 h-24 hidden sm:block"
              />
              <img
                src={landscape}
                alt="landscape"
                className="w-full max-w-md lg:max-w-lg rounded-xl md:rounded-tl-[100px] shadow-lg animate-float"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B3D2E] leading-tight mb-6">
              LANDSCAPE
            </h1>

            <p className="text-gray-500 mb-8 max-w-lg lg:max-w-xl text-base sm:text-lg lg:text-xl">
              We design and create sustainable landscape spaces that combine
              beauty, functionality, and long-lasting greenery. Our landscapes
              enhance outdoor environments through innovative layouts, precise
              planting, and elegant natural elements.
            </p>

            <Link
              to="/services/landscape"
              className="text-green-500 hover:text-green-800 text-base sm:text-lg lg:text-xl flex items-center gap-2"
            >
              Explore more <ArrowRight />
            </Link>
          </div>
        </section>
      </div>

      {/* service 3 */}
      <div className="bg-white py-15 md:py-20">
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-12">
          {/* Text */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B3D2E] leading-tight mb-6">
              SUPPLYING TREES
            </h1>

            <p className="text-gray-500 mb-8 max-w-lg lg:max-w-xl text-base sm:text-lg lg:text-xl">
              We supply high-quality trees and plants sourced from trusted
              nurseries. Our selections are carefully chosen to match regional
              climate, durability, and project requirements, ensuring healthy
              growth and long-term performance.
            </p>

            <Link
              to="/services/supplying-trees"
              className="text-green-500 hover:text-green-800 text-base sm:text-lg lg:text-xl flex items-center gap-2"
            >
              Explore more <ArrowRight />
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              <img
                src={dots}
                alt="dots decoration"
                className="absolute -bottom-9 -left-10 w-24 h-24 hidden sm:block"
              />
              <img
                src={trees}
                alt="trees"
                className="w-full max-w-md lg:max-w-lg rounded-xl md:rounded-tl-[100px] shadow-lg animate-float"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
