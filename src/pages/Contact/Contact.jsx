import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import contactImg from "../../assets/contact-data.webp";
import heroImg from "../../assets/contact.webp";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const pageTitle = t("contact.title");
  // ====form data====
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : t("contact.required");
    temp.email = formData.email ? "" : t("contact.required");
    temp.phone = formData.phone ? "" : t("contact.required");
    temp.subject = formData.subject ? "" : t("contact.required");
    temp.message = formData.message ? "" : t("contact.required");

    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus(t("contact.fillFields"));
      return;
    }

    setIsLoading(true); // 🔹 start loading
    setStatus("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: "info@sedratalwady.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus(t("contact.successfulMessage"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setStatus(t("contact.failMessage"));
      })
      .finally(() => {
        setIsLoading(false); // 🔹 stop loading
      });
  };

  // =================

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={pageTitle} heroImg={heroImg} />

      {/* form */}

      <section className="bg-[#F0F7F4] py-14">
        <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text + Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D2C] leading-snug mb-8">
              {t("contact.book")}
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.name")}
                  className={`w-full border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } 
                                   rounded-md py-3 px-4 focus:outline-[#3CAB41]`}
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.email")}
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } 
                                     rounded-md py-3 px-4 focus:outline-[#3CAB41]`}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder={t("contact.phone")}
                  className={`w-full border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } 
          rounded-md py-3 px-4 focus:outline-[#3CAB41]`}
                  value={formData.phone}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder={t("contact.subject")}
                  className={`w-full border ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  } 
                                      rounded-md py-3 px-4 focus:outline-[#3CAB41]`}
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <textarea
                rows="5"
                name="message"
                placeholder={t("contact.message")}
                className={`w-full border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } 
                rounded-md py-3 px-4 focus:outline-[#3CAB41]`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {/* Status */}
              {status && <p className="text-center text-[#3CAB41]">{status}</p>}

              {/* Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#3CAB41] text-white font-medium py-3 px-10 rounded-md 
                transition ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#349A3A]"
                }`}
              >
                {isLoading ? t("contact.sending") : t("contact.bookNow")}
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={contactImg}
              alt="Gardener"
              className="rounded-lg w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* get in touch */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Google Map */}
          <div className="md:w-1/2 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28998.604445574052!2d46.72324768041567!3d24.698522734225257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f030e8e8a0429%3A0x1e60a6957d1d9d55!2z2KfZhNiz2YTZitmF2KfZhtmK2KnYjCDYp9mE2LHZitin2LYg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1763334110205!5m2!1sar!2seg"
              className="w-full rounded-lg"
              height={410}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 w-full">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3D2C] mb-3">
              {t("contact.getInTouch")}
            </h2>

            {/* Card Box */}

            <div className="bg-white p-4 md:px-10 md:py-5 rounded-lg shadow-md">
              {/* Email */}
              <div className="flex flex-col items-start gap-2 py-2">
                <p className="text-gray-700 text-lg">
                  <span className="text-gray-800 font-bold">
                    {" "}
                    {t("contact.email")}:{" "}
                  </span>{" "}
                  {t("contact.contactInfo.email")}
                </p>
                <div>
                  <h3 className="text-gray-800 font-bold text-lg">
                    {t("contact.branch1.title")}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {t("contact.branch1.add")}
                  </p>
                  <p className="text-gray-700 text-lg">
                    {t("contact.branch1.tel")}
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-800 font-bold text-lg">
                    {t("contact.branch2.title")}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {t("contact.branch2.add")}
                  </p>
                  <p className="text-gray-700 text-lg">
                    {t("contact.branch2.tel")}
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-800 font-bold text-lg">
                    {t("contact.branch3.title")}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {t("contact.branch3.add")}
                  </p>
                  <p className="text-gray-700 text-lg">
                    {t("contact.branch3.tel")}
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-[#3CAB41] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#0B3D2C] font-medium">
              {t("contact.sendMessage")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
