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
      <div className="about-container">
        {/* ORIGIN on the left - using SplitText with all existing styles */}
        <div className="left-side">
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
            rootMargin="-100px"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          {/* TiltedCard for Portfolio Images positioned on left side */}
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
              overlayContent={
                <p className="tilted-card-demo-text">PORTFOLIO</p>
              }
            />
          </div>
        </div>

        {/* WHO I AM on the right and pushed down */}
        <div className="right-side">
          <h2 className="who-i-am-title gradient-text-dark">WHO I AM</h2>

          {/* ScrollFloat card for description */}
          <div className="scroll-card-container">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              <div className="description-card">
                <p className="description-text">
                  I started with curiosity, not code. From designing magazine
                  covers to building neural networks, my work reflects both
                  logic and emotion. I believe the best ideas come from
                  collisions — between disciplines, perspectives, and
                  possibilities.
                </p>
              </div>
            </ScrollFloat>
          </div>
        </div>
      </div>
    </>
  );
}
