// import { Link } from "react-router-dom";
// import grass from "../../assets/footer-v1-shape3.png";
// import { Phone } from "lucide-react";
// import logo from "../../assets/color-logo.svg";

// export default function Footer() {
//   return (
//     <div className="bg-[#0B3D2C] text-white pt-16 relative overflow-hidden">
//       <footer className="relative overflow-hidden z-20">
//         {/* شكل الزرع في الأسفل */}

//         <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-8 relative z-10">
//           {/* ==== الشعار + الاشتراك ==== */}
//           <div className=" h-40 w-50 md:-pr-50 mb-4">
//             <img src={logo} alt="Sedrat Alwady" className="w-full" />
//           </div>

//           {/* ==== Our Services ==== */}
//           <div className="md:-ml-5">
//             <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
//             <ul className="space-y-2 text-xl text-gray-300">
//               <li>
//                 <Link
//                   to="/services/constructions"
//                   className="hover:text-[#1EAD68] transition"
//                 >
//                   General Contracting
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="services/landscape"
//                   className="hover:text-[#1EAD68] transition"
//                 >
//                   Landscape & Hardscape
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="services/supplying-trees"
//                   className="hover:text-[#1EAD68] transition"
//                 >
//                   Tree & Plant Supply
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services/constructions"
//                   className="hover:text-[#1EAD68] transition"
//                 >
//                   Maintenance Services
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* ==== Links ==== */}
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">Links</h3>
//             <ul className="space-y-2 text-xl text-gray-300">
//               <li>
//                 <Link to="/" className="hover:text-[#1EAD68] transition">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="hover:text-[#1EAD68] transition">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-[#1EAD68] transition">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services"
//                   className="hover:text-[#1EAD68] transition"
//                 >
//                   Our Services
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* ==== Contact ==== */}
//           <div className="md:-ml-20">
//             <h3 className="text-2xl font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2 text-xl text-gray-300">
//               <li>
//                 <a
//                   href="mailto:info@sedratalwady.com"
//                   className="hover:text-[#1EAD68] transition"
//                 >
//                   info@sedratalwady.com
//                 </a>
//               </li>
//               <li>Riyadh, Sulaymaniah-district, KSA</li>
//             </ul>

//             <div className="flex items-center gap-3 mt-4">
//               <Phone size={30} className="text-[#1EAD68]" />
//               <div>
//                 <p className="text-lg text-gray-400">Call Anytime</p>
//                 <p className="text-xl font-semibold">009 665 3373 9903</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ==== حقوق النشر ==== */}
//         <div className="border-t border-[#134F39] my-10 pt-4 text-center text-xl text-gray-400">
//           <p>Copyright © 2023 All Rights Reserved.</p>
//           {/* <div className="flex justify-center gap-4 mt-2">
//             <Link to="#" className="hover:text-[#1EAD68] transition">
//               Terms & Condition
//             </Link>
//             <span>|</span>
//             <Link to="#" className="hover:text-[#1EAD68] transition">
//               Privacy
//             </Link>
//             <span>|</span>
//             <Link to="#" className="hover:text-[#1EAD68] transition">
//               Support
//             </Link>
//           </div> */}
//           <div className="pt-4 text-center text-xl text-gray-400">
//             <a
//               href="https://new-hold.com" // <-- ضيفي هنا اللينك الحقيقي
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#1EAD68] transition"
//             >
//               Made by New Hold
//             </a>
//           </div>
//         </div>
//       </footer>

//       {/* شكل العشب المتحرك */}
//       {/* <div className="flex w-[300%] animate-grass h-[100px] absolute bottom-0 left-0 z-10">
//         <img src={grass} alt="grass" className="w-1/2 opacity-5" />
//         <img src={grass} alt="grass" className="w-1/2 opacity-5" />
//       </div> */}
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import logo from "../../assets/color-logo.svg";
// import grass from "../../assets/footer-v1-shape3.png";

export default function Footer() {
  return (
    <div className="bg-[#0B3D2C] text-white pt-14 sm:pt-16 relative overflow-hidden">
      <footer className="relative z-20">
        {/* ===== Footer Content ===== */}
        <div className="
          max-w-7xl mx-auto px-4 sm:px-6 md:px-12
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-10
        ">
          {/* ===== Logo Section ===== */}
          <div className="flex justify-center sm:justify-start">
            <img
              src={logo}
              alt="Sedrat Alwady Logo"
              className="w-40 sm:w-44 md:w-48"
            />
          </div>

          {/* ===== Our Services ===== */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <Link
                  to="/services/constructions"
                  className="hover:text-[#1EAD68] transition"
                >
                  General Contracting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/landscape"
                  className="hover:text-[#1EAD68] transition"
                >
                  Landscape & Hardscape
                </Link>
              </li>
              <li>
                <Link
                  to="/services/supplying-trees"
                  className="hover:text-[#1EAD68] transition"
                >
                  Tree & Plant Supply
                </Link>
              </li>
              <li>
                <Link
                  to="/services/constructions"
                  className="hover:text-[#1EAD68] transition"
                >
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#1EAD68] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1EAD68] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1EAD68] transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#1EAD68] transition">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Contact Information ===== */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <a
                  href="mailto:info@sedratalwady.com"
                  className="hover:text-[#1EAD68] transition"
                >
                  info@sedratalwady.com
                </a>
              </li>
              <li>Riyadh, Sulaymaniah District, KSA</li>
            </ul>

            <div className="flex items-center gap-3 mt-4">
              <Phone size={26} className="text-[#1EAD68]" />
              <div>
                <p className="text-sm text-gray-400">Call Anytime</p>
                <p className="text-base sm:text-lg font-semibold">
                  009 665 3373 9903
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Copyright ===== */}
        <div className="
          border-t border-[#134F39]
          mt-12 pt-6
          text-center text-xs sm:text-base text-gray-400
        ">
          <p>Copyright © 2023. All Rights Reserved.</p>

          <div className="my-3">
            <a
              href="https://new-hold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1EAD68] transition"
            >
              Made by New Hold
            </a>
          </div>
        </div>
      </footer>

      {/* ===== Optional Animated Grass Decoration ===== */}
      {/*
      <div className="flex w-[300%] animate-grass h-[100px] absolute bottom-0 left-0 z-10">
        <img src={grass} alt="grass" className="w-1/2 opacity-5" />
        <img src={grass} alt="grass" className="w-1/2 opacity-5" />
      </div>
      */}
    </div>
  );
}
