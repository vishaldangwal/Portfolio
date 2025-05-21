import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  PaperAirplaneIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const ContactMenu = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .send(serviceId, templateId, {
        from_name: formData.name,
        to_name: "Vishal Dangwal",
        from_email: formData.email,
        to_email: "vishaldangwal09@gmail.com",
        message: formData.message,
      }, publicKey)
      .then(
        (response) => {
          console.log("EMAILJS SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          setShowSuccessMessage(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setShowSuccessMessage(false), 2000);
        },
        (err) => {
          console.error("EMAILJS FAILED...", err);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="bg-white text-[#37352f] min-h-screen flex flex-col">
      <div className="mt-15 py-20 md:py-24 bg-gradient-to-br from-[#f0f4f8] to-[#e0e7ed] text-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-500/50 blur-3xl animate-pulse duration-3000"></div>
          <div className="absolute top-2/3 right-1/4 w-32 h-32 rounded-full bg-purple-500/50 blur-3xl animate-pulse delay-500 duration-3000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-green-500/50 blur-3xl animate-pulse delay-1000 duration-3000"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#242424] mb-6 tracking-tight">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind, or just want to say hello? I'd love to hear
            from you. Fill out the form below, or reach out through my other
            channels.
          </p>
        </div>
      </div>

      <main className="flex-1 py-12 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-fit">
            <div className="p-6 bg-gradient-to-r from-[#37352f] to-gray-800 text-white">
              <h2 className="text-xl font-semibold flex items-center">
                <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                Send Me a Message
              </h2>
              <p className="text-gray-300 mt-1 text-sm">
                Fill out the form and I'll get back to you as soon as possible
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="The name your friends call you"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="No spam, promise!"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Let's build something great together"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition duration-200 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white transition duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-[#37352f] hover:bg-gray-800"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="px-6 py-5 bg-white border border-[#e6e6e6] rounded-lg hover:border-[#d0d0d0] transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-medium flex items-center gap-2 text-[#37352f]">
                  <ChatBubbleOvalLeftEllipsisIcon className="h-[18px] w-[18px] text-gray-600" />{" "}
                  Reach Out Directly
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/vishaldangwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 p-1.5 hover:bg-gray-100 rounded-md transition-all"
                    title="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vishal-dangwal-219759282/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 p-1.5 hover:bg-gray-100 rounded-md transition-all"
                    title="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/vishaldangwal3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 p-1.5 hover:bg-gray-100 rounded-md transition-all"
                    title="X (Twitter)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Have a project in mind or want to chat? I'm always open to new
                opportunities and collaborations. Feel free to reach out
                directly.
              </p>

              <div className="flex flex-col gap-y-3">
                <a
                  href="mailto:vishaldangwal09@gmail.com"
                  className="inline-flex items-center justify-center md:justify-start bg-[#f7f7f7] px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 transition-all text-sm border border-[#e6e6e6]"
                  title="Email"
                >
                  <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-600" />{" "}
                  <span className="text-sm md:text-base">
                    vishaldangwal09@gmail.com
                  </span>{" "}
                </a>

                <a
                  href="tel:+7681967426"
                  className="inline-flex items-center justify-center md:justify-start bg-[#f7f7f7] px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 transition-all text-sm border border-[#e6e6e6]"
                  title="Phone"
                >
                  <PhoneIcon className="h-4 w-4 mr-2 text-gray-600" />{" "}
                  <span className="text-sm md:text-base">+91 7681967426</span>{" "}
                </a>

                <div
                  className="inline-flex items-center justify-center md:justify-start bg-[#f7f7f7] px-4 py-2 rounded-md text-gray-700 text-sm border border-[#e6e6e6]"
                  title="Location"
                >
                  <MapPinIcon className="h-4 w-4 mr-2 text-gray-600" />{" "}
                  <span className="text-sm md:text-base">
                    Rishikesh, Uttarakhand, India
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 bg-white border border-[#e6e6e6] rounded-lg hover:border-[#d0d0d0] transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-medium flex items-center gap-2 text-[#37352f]">
                  <MapPinIcon className="h-[18px] w-[18px] text-gray-600" />{" "}
                  Location & Availability
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                You can find me in Rishikesh, India. I'm generally available
                during standard working hours, with flexibility for urgent
                needs.
              </p>
              <div className="flex flex-col gap-3">
                <div
                  className="inline-flex items-center bg-[#f7f7f7] px-4 py-2 rounded-md text-gray-700 text-sm border border-[#e6e6e6]"
                  title="Location"
                >
                  <MapPinIcon className="h-4 w-4 mr-2 text-gray-600" />{" "}
                  <span className="text-sm md:text-base">
                    Rishikesh, Uttarkhand
                  </span>
                </div>
                <div
                  className="inline-flex items-center bg-[#f7f7f7] px-4 py-2 rounded-md text-gray-700 text-sm border border-[#e6e6e6]"
                  title="Working Hours"
                >
                  <ClockIcon className="h-4 w-4 mr-2 text-gray-600" />{" "}
                  <span className="text-sm md:text-base">
                    Mon - Fri: 9am - 5pm IST
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e6e6e6] mt-4">
                <h3 className="font-medium text-gray-800 mb-3">
                  Preferred Contact Methods
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    Email
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    LinkedIn
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    Twitter
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                    GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showSuccessMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center space-x-3 transform transition-transform duration-300 ease-out animate-fade-in-up">
              <CheckCircleIcon className="h-6 w-6" />
              <p className="font-medium">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ContactMenu;
