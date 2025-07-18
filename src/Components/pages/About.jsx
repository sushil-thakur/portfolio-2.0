import "./About.css";
import SplitText from "./SplitText";
import TiltedCard from "./TiltedCard";
import ScrollReveal from "../ScrollReveal/ScrollReveal.jsx";

export default function About() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      {/* ORIGIN Section */}
      <div className="origin-section w-full py-16 px-4 flex justify-center bg-white">
        <SplitText
          text="ORIGIN"
          className="origin-title gradient-text"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* Main content - Stacks on mobile, side-by-side on larger screens */}
      <div className="container flex flex-col md:flex-row px-4 md:pl-8 lg:pl-16 gap-4 md:gap-8">
        {/* Portfolio Image Section (Left Side) */}
        <div className="portfolio-section w-full md:min-w-[40vw] lg:min-w-[50vw] min-h-[60vh] md:h-screen flex items-center justify-center bg-white">
          <div className="w-full max-w-lg md:max-w-none">
            <TiltedCard
              imageSrc="public\photo.png"
              altText="Portfolio Image"
              captionText="Portfolio Work"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="120%"
              imageWidth="100%"
              rotateAmplitude={5}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="another-container w-full">
          {/* WHO I AM Section */}
          <div className="who-i-am-section w-full h-20 flex items-center justify-center sm:justify-start bg-white mt-8 md:mt-12">
            <h2 className="who-i-am-title text-2xl sm:text-3xl md:text-4xl">
              WHO I AM
            </h2>
          </div>

          {/* Description Section */}
          <div className="description-section w-full min-h-[40vh] md:min-h-[60vh] flex items-center justify-center bg-white text-black">
            <div className="text-center sm:text-left max-w-4xl py-4 px-4 sm:px-8 mb-4">
              <div style={{ fontFamily: "Futura, Bebas Neue, " }}>
                <ScrollReveal
                  containerClassName="mt-5"
                  textClassName="text-xl sm:text-2xl md:text-2xl font-light leading-tight tracking-wide transition-all duration-1000 ease-out"
                  animationDuration={1.2}
                  ease="power2.out"
                  scrollStart="top bottom-=20%"
                  scrollEnd="bottom top+=20%"
                  stagger={0.05}
                >
                 "In every line of code, I aim to express purpose. With MERN as my toolkit,
                  I bring ideas to life—where user interactions feel natural and backend systems
                   flow seamlessly. My goal isn’t just functionality; it’s creating digital experiences
                    that feel human."
                </ScrollReveal>

                {/* Download CV Button (changed to an <a> tag) */}
                <div className="mt-8 text-center sm:text-left">
                  <a
                    href="public\CV sushil.pdf" // Path to your CV in the public folder
                    download="SUshil_CV.pdf" // The filename for the user
                    className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
