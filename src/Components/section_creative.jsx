import React from "react";
import "./section-css.css";
export default function Section_creative() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        <h1 className="Creative">CREATIVE</h1>
        <h2 className="developer">DEVELOPER &&</h2>
      </div>
      <h1 className="Creative">AI ENTHUSIAST</h1>
    </div>
  );
}
