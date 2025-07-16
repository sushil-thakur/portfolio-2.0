import "./About.css";
import SplitText from "./SplitText";
import TiltedCard from "./TiltedCard";
import ScrollFloat from "./ScrollFloat";

export default function About() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      {/* ORIGIN Section */}
      <div className="origin-section w-full min-h-[60vh] sm:min-h-[50vh] flex items-center justify-center bg-white m-0">
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
          // rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <div className="container flex pl-16 gap-8">
        {/* Portfolio Image Section */}
        <div className="portfolio-section min-w-[50vw] sm:min-w-[40vw] h-screen flex items-center justify-center bg-white">
          <div className="bento-card-container">
            <TiltedCard
              imageSrc="https://images.squarespace-cdn.com/content/v1/523747a5e4b0bfc1675bd7b4/1485794243330-LAWXWC3LS5DF60YKHOJG/unnamed.jpg?format=1500w"
              altText="Portfolio Image"
              captionText="Portfolio Work"
              containerHeight="400px"
              containerWidth="110%"
              imageHeight="460px"
              imageWidth="110%"
              rotateAmplitude={8}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
            />
          </div>
        </div>
        <div className="another-container">
          {/* WHO I AM Section */}
          <div className="who-i-am-section w-full h-20 flex items-center justify-center bg-white">
            <h2 className="who-i-am-title">WHO I AM</h2>
          </div>

          {/* Description Section */}
          <div className="description-section m-w-[50vw] sm:min-w-[40vw] h-screen flex items-center justify-center bg-white text-black">
            <div className="text-center max-w-4xl px-8">
              <div style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                <ScrollFloat
                  containerClassName="mb-8"
                  textClassName="text-3xl md:text-3xl font-bold leading-tight tracking-wide transition-all duration-1000 ease-out"
                  animationDuration={1.2}
                  ease="power2.out"
                  scrollStart="top bottom-=20%"
                  scrollEnd="bottom top+=20%"
                  stagger={0.05}
                >
                  I started with curiosity, not code. From designing magazine
                  covers to building neural networks, my work reflects both
                  logic and emotion.
                </ScrollFloat>

                <ScrollFloat
                  containerClassName="mt-8"
                  textClassName="text-2xl md:text-3xl opacity-80 transition-all duration-1000 ease-out"
                  animationDuration={1.2}
                  ease="power2.out"
                  scrollStart="top bottom-=10%"
                  scrollEnd="bottom top+=10%"
                  stagger={0.08}
                ></ScrollFloat>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
