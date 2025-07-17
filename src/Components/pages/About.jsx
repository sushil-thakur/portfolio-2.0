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
      <div className="origin-section w-full min-h-[50vh] flex items-center justify-center bg-white my-0 mx-auto px-4 sm:px-0">
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
        {/* Portfolio Image Section */}
        <div className="portfolio-section w-full md:min-w-[40vw] lg:min-w-[50vw] min-h-[60vh] md:h-screen flex items-center justify-center bg-white">
          <div className="bento-card-container w-full max-w-lg md:max-w-none">
            <TiltedCard
              imageSrc="https://images.squarespace-cdn.com/content/v1/523747a5e4b0bfc1675bd7b4/1485794243330-LAWXWC3LS5DF60YKHOJG/unnamed.jpg?format=1500w"
              altText="Portfolio Image"
              captionText="Portfolio Work"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="120%"
              imageWidth="100%"
              rotateAmplitude={8}
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
            <div className="text-center sm:text-left max-w-4xl px-4 sm:px-8">
              <div style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                <ScrollReveal
                  containerClassName="mb-8"
                  textClassName="text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-wide transition-all duration-1000 ease-out"
                  animationDuration={1.2}
                  ease="power2.out"
                  scrollStart="top bottom-=20%"
                  scrollEnd="bottom top+=20%"
                  stagger={0.05}
                >
                  I started with curiosity, not code. From designing magazine
                  covers to building neural networks, my work reflects both
                  logic and emotion. I believe creativity thrives at the
                  intersection of art and technology. Every project is a chance
                  to blend thoughtful design with purposeful engineering.
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
