import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/color-logo.svg";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0B3D2C] text-white pt-14 sm:pt-16 relative overflow-hidden">
      <footer className="relative z-20">
        {/* ===== Footer Content ===== */}
        <div
          className="
            max-w-8xl mx-auto px-4 sm:px-6 md:px-12
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
            gap-4
          "
        >
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
              {t("footer.services.title")}
            </h3>
            <ul className="space-y-2 sm:text-base md:text-lg text-gray-300">
              <li>
                <Link
                  to="/services/constructions"
                  className="hover:text-[#1EAD68] transition"
                >
                  {t("footer.services.generalContracting")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/landscape"
                  className="hover:text-[#1EAD68] transition"
                >
                  {t("footer.services.landscape")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/supplying-trees"
                  className="hover:text-[#1EAD68] transition"
                >
                  {t("footer.services.treeSupply")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/constructions"
                  className="hover:text-[#1EAD68] transition"
                >
                  {t("footer.services.maintenance")}
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Our Projects ===== */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {t("footer.projects.title")}
            </h3>
            <ul className="space-y-2 sm:text-base md:text-lg text-gray-300">
              <li>
                <Link to="/projects" className="hover:text-[#1EAD68] transition">
                  {t("footer.projects.general")}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#1EAD68] transition">
                  {t("footer.projects.marcia")}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#1EAD68] transition">
                  {t("footer.projects.alhaer")}
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1GD7MAy95CEJdrLOsA8wQuahOstoG-o-h/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1EAD68] transition"
                >
                  {t("footer.projects.portfolio")}
                </a>
              </li>
            </ul>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-2 sm:text-base md:text-lg text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#1EAD68] transition">
                  {t("footer.quickLinks.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1EAD68] transition">
                  {t("footer.quickLinks.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1EAD68] transition">
                  {t("footer.quickLinks.contact")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#1EAD68] transition">
                  {t("footer.quickLinks.services")}
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Contact Information ===== */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {t("footer.contact.title")}
            </h3>

            <ul className="space-y-2 sm:text-base md:text-lg text-gray-300">
              <li>
                <a
                  href="mailto:info@sedratalwady.com"
                  className="hover:text-[#1EAD68] transition"
                >
                  {t("footer.contact.email")}
                </a>
              </li>
              <li>{t("footer.contact.UNN")}</li>
              <li>{t("footer.contact.address")}</li>
            </ul>

            <div className="flex items-center gap-3 mt-1">
              <Phone size={26} className="text-[#1EAD68]" />
              <div>
                <p className="text-sm text-gray-400">
                  {t("footer.contact.callAnytime")}
                </p>
                <p className="text-base sm:text-lg font-semibold">
                  {t("footer.contact.phone")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Copyright ===== */}
        <div
          className="
            border-t border-[#134F39]
            mt-12 pt-6
            text-center text-xs sm:text-base text-gray-400
          "
        >
          <p>{t("footer.copyright.rights")}</p>

          <div className="my-3">
            <a
              href="https://new-hold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1EAD68] transition"
            >
              {t("footer.copyright.madeBy")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
