import { useState, useEffect } from "react";

const LetterGlitch = ({
  glitchColors = ["#330000", "#1a0000", "#000000"], // Dark red/black shades
  glitchSpeed = 150, // Decreased speed (increased millisecond delay)
}) => {
  const [displayText, setDisplayText] = useState("");
  // Two separate words with 1cm gap between them and after
  const word1 = "0i10i01i0i10i1";
  const word2 = "////////////////";
  const pattern = word1 + "|" + word2 + "|"; // Using | as separator to identify where to add gap
  const repeatedPattern = pattern.repeat(6); // Repeat the pattern multiple times to fill the width

  const glitchableChars = ["0", "1", "i"]; // Characters that can glitch (swap among themselves)
  const fixedChar = "/"; // Character that remains fixed
  const separatorChar = "|"; // Separator to create 1cm gap

  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Create glitched version of the repeated pattern
      const glitchedText = repeatedPattern
        .split("")
        .map((char) => {
          if (glitchableChars.includes(char)) {
            // If it's a glitchable character, randomly pick one from the glitchable set
            return glitchableChars[Math.floor(Math.random() * glitchableChars.length)];
          } else if (char === fixedChar) {
            // If it's the fixed character, keep it as is
            return fixedChar;
          } else if (char === separatorChar) {
            // Keep separator as is
            return separatorChar;
          }
          // For any other character, keep it as is
          return char;
        })
        .join("");

      setDisplayText(glitchedText);
    }, glitchSpeed);

    return () => clearInterval(interval);
  }, [glitchSpeed, repeatedPattern]); // `repeatedPattern` is a dependency because it's used inside the effect

  return (
    <div className="bg-[#fff] overflow-hidden whitespace-nowrap py-2 w-screen h-auto flex justify-center items-center border-2 border-black">
      <div className="inline-block">
        <span className="font-mono text-[10px] tracking-widest">
          {displayText.split("").map((char, index) => (
            <span
              key={index}
              style={{ color: getRandomColor() }}
              className={`inline-block transition-colors duration-75 ${char === '|' ? 'ml-[1cm]' : ''}`}
            >
              {char === '|' ? '' : char}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default LetterGlitch;
