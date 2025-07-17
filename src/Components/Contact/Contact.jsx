import React, { useState } from "react";
import Stepper, { Step } from "./Stepper";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", "7c187539-97f1-4135-a9f1-e4de43325f5f"); // Replace with your actual access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setSubmitMessage("Message sent successfully!");
        event.target.reset();
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="w-full h-screen bg-white text-black flex items-center justify-center">
      <div className="w-full">
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
          stepCircleContainerClassName="!max-w-none !w-4/5 !mx-auto"
          contentClassName="!w-full"
        >
          <Step>
            <div className="text-center space-y-6">
              <h2
                className="text-6xl md:text-8xl font-bold text-black"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                LET'S CONNECT
              </h2>
              <p className="text-2xl text-gray-600">
                Ready to bring your ideas to life? Let's start a conversation.
              </p>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-8">
              <h2
                className="text-5xl md:text-7xl font-bold text-black mb-8 relative"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                REACH OUT TO ME
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-black rounded-full animate-bounce"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-8">
                {/* GitHub */}
                <a
                  href="https://github.com/anuz505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex flex-col items-center p-6 bg-white border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 shadow-lg transform hover:rotate-1"
                >
                  <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <svg
                    className="w-16 h-16 mb-4 text-black group-hover:text-white transition-colors duration-500 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <h3
                    className="text-xl font-semibold text-black group-hover:text-white relative z-10"
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    GitHub
                  </h3>
                  <p className="text-gray-600 group-hover:text-yellow-300 relative z-10">
                    @anuz505
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/in/anuj-bhandari-75a530198/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex flex-col items-center p-6 bg-white text-black border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 shadow-lg transform hover:-rotate-1"
                >
                  <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <svg
                    className="w-16 h-16 mb-4 text-black group-hover:text-white transition-colors duration-500 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <h3
                    className="text-xl font-semibold text-black group-hover:text-white relative z-10"
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    LinkedIn
                  </h3>
                  <p className="text-gray-600 group-hover:text-yellow-300 relative z-10">
                    Anuj Bhandari
                  </p>
                </a>

                {/* Email */}
                <a
                  href="mailto:anujpradhan505@gmail.com"
                  className="group relative overflow-hidden flex flex-col items-center p-6 bg-white border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 shadow-lg transform hover:rotate-1"
                >
                  <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <svg
                    className="w-16 h-16 mb-4 text-black group-hover:text-white transition-colors duration-500 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3
                    className="text-xl font-semibold text-black group-hover:text-white relative z-10"
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    Email
                  </h3>
                  <p className="text-gray-600 group-hover:text-yellow-300 relative z-10">
                    anuzb50@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-6">
              <h2
                className="text-5xl md:text-7xl font-bold text-black mb-6 relative"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                SEND ME A MESSAGE
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-black"></div>
              </h2>
              <form
                onSubmit={onSubmit}
                className="w-full space-y-6 max-w-2xl mx-auto"
              >
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-4 bg-white border-2 border-black rounded-none text-black placeholder-gray-500 focus:border-black focus:outline-none text-lg transition-all duration-300 focus:shadow-[4px_4px_0px_0px_#000000] transform focus:-translate-y-1"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black transform translate-x-1 translate-y-1 -z-10 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform duration-300"></div>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-4 bg-white border-2 border-black rounded-none text-black placeholder-gray-500 focus:border-black focus:outline-none text-lg transition-all duration-300 focus:shadow-[4px_4px_0px_0px_#000000] transform focus:-translate-y-1"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black transform translate-x-1 translate-y-1 -z-10 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform duration-300"></div>
                </div>
                <div className="relative group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    required
                    className="w-full p-4 bg-white border-2 border-black rounded-none text-black placeholder-gray-500 focus:border-black focus:outline-none resize-none text-lg transition-all duration-300 focus:shadow-[4px_4px_0px_0px_#000000] transform focus:-translate-y-1"
                  ></textarea>
                  <div className="absolute top-0 left-0 w-full h-full bg-black transform translate-x-1 translate-y-1 -z-10 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform duration-300"></div>
                </div>
                <div className="relative group">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-4 bg-black text-white border-2 border-black rounded-none hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#000000]"
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                  <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                </div>
                {submitMessage && (
                  <div className="relative">
                    <p
                      className={`text-center mt-4 p-4 border-2 ${
                        submitMessage.includes("successfully")
                          ? "text-black bg-white border-black"
                          : "text-white bg-black border-black"
                      } font-semibold transform -translate-y-1 shadow-[4px_4px_0px_0px_#666666]`}
                    >
                      {submitMessage}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-6">
              <h2
                className="text-5xl md:text-7xl font-bold text-black mb-6"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                THANK YOU!
              </h2>
              <p className="text-2xl text-black mb-8">
                I'll get back to you as soon as possible.
              </p>
              <div className="text-6xl mb-6">🚀</div>
              <p className="text-xl text-black">
                Let's build something amazing together!
              </p>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

export default Contact;
