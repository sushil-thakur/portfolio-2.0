import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1.2,
  ease = "power2.out",
  scrollStart = "top bottom-=20%",
  scrollEnd = "bottom top+=20%",
  stagger = 0.05,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Simple fade in animation
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: animationDuration,
        ease: ease,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationDuration, ease, scrollStart, scrollEnd]);

  return (
    <div ref={containerRef} className={`${containerClassName}`}>
      <p className={`${textClassName}`}>{children}</p>
    </div>
  );
};

export default ScrollReveal;
