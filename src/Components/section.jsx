import React from "react";
import TextPressure from "./TextPressure/TextPressure.jsx";

export default function TextPressureSection() {
  return (
    <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
      <TextPressure
        text="Creative AI Enthusiast!"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="black"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
}
