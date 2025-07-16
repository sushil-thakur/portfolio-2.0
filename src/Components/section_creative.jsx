import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./section-css.css";

export default function Section_creative() {
  const containerRef = useRef(null);
  const creativeRef = useRef(null);
  const developerRef = useRef(null);
  const enthusiastRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [creativeRef.current, developerRef.current, enthusiastRef.current],
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        }
      );

      // Create timeline for smooth sequencing
      const tl = gsap.timeline({
        delay: 0.2,
        ease: "power3.out",
      });

      // Animate elements in sequence
      tl.to(creativeRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        .to(
          developerRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "-=0.4"
        )
        .to(
          enthusiastRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        );

      // Add subtle floating animation after initial load
      gsap.to([creativeRef.current, enthusiastRef.current], {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });

      gsap.to(developerRef.current, {
        y: -5,
        duration: 1.8,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      });

      // Add hover effects
      const handleMouseEnter = (element) => {
        gsap.to(element, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = (element) => {
        gsap.to(element, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      // Add event listeners for hover effects
      [
        creativeRef.current,
        developerRef.current,
        enthusiastRef.current,
      ].forEach((element) => {
        element.addEventListener("mouseenter", () => handleMouseEnter(element));
        element.addEventListener("mouseleave", () => handleMouseLeave(element));
      });

      // Cleanup function
      return () => {
        [
          creativeRef.current,
          developerRef.current,
          enthusiastRef.current,
        ].forEach((element) => {
          if (element) {
            element.removeEventListener("mouseenter", () =>
              handleMouseEnter(element)
            );
            element.removeEventListener("mouseleave", () =>
              handleMouseLeave(element)
            );
          }
        });
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen h-[80vh] flex flex-col justify-center items-start px-8"
    >
      <div className="flex items-baseline gap-8">
        <h1
          ref={creativeRef}
          className="Creative cursor-pointer gradient-text-dark"
        >
          CREATIVE
        </h1>
        <h2 ref={developerRef} className="developer cursor-pointer">
          DEVELOPER &&
        </h2>
      </div>
      <h1 ref={enthusiastRef} className="Creative cursor-pointer">
        AI ENTHUSIAST
      </h1>
    </div>
  );
}
