import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Phone, Menu, X, Globe } from "lucide-react";
import logo from "../../assets/color-logo.svg";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownDesktopRef = useRef(null);
  const dropdownMobileRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    if (dropdownOpen) {
      setDropdownOpen(false);
      setTimeout(() => setDropdownVisible(false), 500);
    } else {
      setDropdownVisible(true);
      setTimeout(() => setDropdownOpen(true), 10);
    }
  };
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const desktop = dropdownDesktopRef.current;
      const mobile = dropdownMobileRef.current;

      if (
        desktop &&
        !desktop.contains(event.target) &&
        mobile &&
        !mobile.contains(event.target)
      ) {
        if (dropdownOpen) {
          setDropdownOpen(false);
          setTimeout(() => setDropdownVisible(false), 500);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const handleLinkClick = (path, title) => {
    navigate(path, { state: { title } });
    setDropdownOpen(false);
    setTimeout(() => setDropdownVisible(false), 500);
    setMenuOpen(false);
  };

  const [hideNavbar, setHideNavbar] = useState(false);
  const [lockedOpen, setLockedOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`transition-all duration-500 ${
          hideNavbar ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <header
          className={`sticky md:absolute top-0 md:top-8 ${
            isRTL ? "right-0" : "left-0"
          } w-full z-50 bg-[#0b3d2e] md:bg-transparent text-white`}
        >
          <div className="mx-auto flex justify-around items-center h-38  md:px-22 px-5 ">
            {/* ===== Logo left ===== */}
            <div className="flex items-center justify-center gap-3 h-20 p-5 ">
              <img src={logo} alt="Sedrat Alwady" className=" h-38 w-38" />
            </div>

            {/* ===== center: Links ===== */}
            {/* <nav className="hidden md:flex items-center pb-6 gap-x-5 text-xl font-bold relative"> */}
            <nav
              dir={isRTL ? "rtl" : "ltr"}
              className="hidden md:flex items-center pb-6 gap-x-5 text-xl font-bold relative"
            >
              {[
                { to: "/", label: t("nav.home") },
                { to: "/about", label: t("nav.about") },
                { to: "/contact", label: t("nav.contact") },
                { to: "/projects", label: t("nav.projects") },
                { to: "/services", label: t("nav.services") },
              ].map((link, index, arr) => (
                <div key={link.to} className="flex items-baseline ">
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `relative pb-6 transition-all duration-500 group ${
                        isActive
                          ? "text-[#3CAB41]"
                          : "text-white hover:text-[#3CAB41]"
                      }`
                    }
                  >
                    {({ isActive }) => <>{link.label}</>}
                  </NavLink>

                  {/* الخط بين اللينكات */}
                  {index !== arr.length - 1 && (
                    <span
                      className={`text-[#3CAB41] text-center font-bold text-xl ${
                        isRTL ? "pr-5" : "pl-5"
                      } `}
                    >
                      |
                    </span>
                  )}
                </div>
              ))}

              {/* ===== Dropdown: Services ===== */}
              {/* <div
                className="relative z-999"
                ref={dropdownDesktopRef}
                onMouseEnter={() => {
                  setDropdownVisible(true);
                  setTimeout(() => setDropdownOpen(true), 10);
                }}
                onMouseLeave={() => {
                  setDropdownOpen(false);
                  setTimeout(() => setDropdownVisible(false), 300);
                }}
              >
                <NavLink
                  to={"/services"}
                  onClick={toggleDropdown}
                  className="relative flex items-center pb-[22px] transition-all duration-500 font-bold cursor-pointer group 
                   ${dropdownOpen ? 'text-[#3CAB41]' : 'hover:text-[#3CAB41]'}"
                >
                  Services
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-6 flex items-end gap-[3px] transition-all duration-500 transform ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    }`}
                  >
                    <span className="w-[3px] h-4 bg-[#3CAB41] rounded-full transition-all duration-500 group-hover:h-5" />
                    <span className="w-[3px] h-6 bg-[#3CAB41] rounded-full transition-all duration-500 group-hover:h-7" />
                    <span className="w-[3px] h-4 bg-[#3CAB41] rounded-full transition-all duration-500 group-hover:h-5" />
                  </div>
                </NavLink>

                {dropdownVisible && (
                  <div
                    className={`absolute bg-white text-gray-800 top-full ${isRTL ? "right-0" : "left-0"} mt-3 w-56 rounded-md shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 transform origin-top z-9999 ${
                      dropdownOpen
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-75"
                    }`}
                  >
                    <ul>
                      <li
                        className="px-5 py-3 hover:bg-gray-100 transition cursor-pointer"
                        onClick={() =>
                          handleLinkClick("/services", "Our Services")
                        }
                      >
                        Services
                      </li>
                      <li
                        className="px-5 py-3 hover:bg-gray-100 transition cursor-pointer"
                        onClick={() =>
                          handleLinkClick("/services/landscape", "Landscape")
                        }
                      >
                        Landscape
                      </li>
                      <li
                        className="px-5 py-3 hover:bg-gray-100 transition cursor-pointer"
                        onClick={() =>
                          handleLinkClick(
                            "/services/constructions",
                            "Constructions"
                          )
                        }
                      >
                        Constructions
                      </li>
                      <li
                        className="px-5 py-3 hover:bg-gray-100 transition cursor-pointer"
                        onClick={() =>
                          handleLinkClick(
                            "/services/supplying-trees",
                            "Supplying Trees"
                          )
                        }
                      >
                        Supplying Trees
                      </li>
                    </ul>
                  </div>
                )}
              </div> */}
            </nav>

            {/* ===== Right Side: Contact Info ===== */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full
             border border-white/30
             hover:border-[#3CAB41] hover:text-[#3CAB41]
             transition text-sm font-semibold"
              >
                <Globe className="w-4 h-4 block" />
                <span className="leading-none">
                  {i18n.language === "en" ? "AR" : "EN"}
                </span>
              </button>

              <span className="text-2xl text-gray-600">|</span>
              <div className="bg-[#3CAB41] p-3 rounded-full">
                <Phone className="w-4 h-4 text-[#0b3d2e]" />
              </div>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-sm">{t("nav.callAnytime")}</p>
                <p className="text-gray-100 text-sm">009 665 3373 9903</p>
              </div>
            </div>

            {/* ===== Mobile Menu Button (Animated) ===== */}
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none transition-transform duration-500 ease-in-out transform hover:scale-110"
              aria-label="Toggle Menu"
            >
              <div
                className={`transition-all duration-500 ease-in-out transform ${
                  menuOpen
                    ? "rotate-180 scale-110 opacity-80"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              >
                {menuOpen ? (
                  <X className="w-7 h-7 text-[#3CAB41] transition-colors duration-500" />
                ) : (
                  <Menu className="w-7 h-7 transition-colors duration-500" />
                )}
              </div>
            </button>
          </div>

          {/* ===== Mobile Menu (Animated) ===== */}
          <div
            className={`md:hidden bg-[#0b3d2e] border-t border-green-900 overflow-hidden transition-all duration-500 transform origin-top ${
              menuOpen
                ? "opacity-100 scale-y-100 max-h-[1000px]"
                : "opacity-0 scale-y-90 max-h-0"
            }`}
          >
            <ul className="flex flex-col px-6 py-4 space-y-3 text-lg font-medium">
              {[
                { to: "/", label: t("nav.home") },
                { to: "/about", label: t("nav.about") },
                { to: "/contact", label: t("nav.contact") },
                { to: "/projects", label: t("nav.projects") },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block transition-colors duration-500 ${
                        isActive
                          ? "text-[#3CAB41]"
                          : "text-white hover:text-[#3CAB41]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              {/* ===== Dropdown in Mobile ===== */}
              <li ref={dropdownMobileRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full hover:text-[#3CAB41]"
                >
                  {t("nav.services")}
                </button>
                {dropdownVisible && (
                  <ul
                    className={`mt-2 ml-4 space-y-2 text-base text-gray-200 transition-all duration-500 transform origin-top ${
                      dropdownOpen
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-75"
                    }`}
                  >
                    <li>
                      <Link
                        to="/services"
                        onClick={() => handleLinkClick("/services")}
                        className="hover:text-[#3CAB41]"
                      >
                        {t("nav.services")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/landscape"
                        onClick={() => handleLinkClick("/services/landscape")}
                        className="hover:text-[#3CAB41]"
                      >
                        {t("nav.landscape")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/constructions"
                        onClick={() =>
                          handleLinkClick("/services/constructions")
                        }
                        className="hover:text-[#3CAB41]"
                      >
                        {t("nav.constructions")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/supplying-trees"
                        onClick={() =>
                          handleLinkClick("/services/supplying-trees")
                        }
                        className="hover:text-[#3CAB41]"
                      >
                        {t("nav.supplyingTrees")}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="pt-3 border-t border-green-900">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-white hover:text-[#3CAB41] transition"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold">
                    {i18n.language === "en" ? "العربية" : "English"}
                  </span>
                </button>
              </li>

              <li className="pt-3 border-t border-green-900 flex items-center gap-3">
                <div className="bg-[#3CAB41] p-2 rounded-full">
                  <Phone className="w-4 h-4 text-[#0b3d2e]" />
                </div>
                <div className="text-sm leading-tight">
                  <p className="font-semibold">{t("nav.callAnytime")}</p>
                  <p className="text-gray-500">009 665 3373 9903</p>
                </div>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
