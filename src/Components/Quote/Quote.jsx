import ScrollFloat from "../pages/ScrollFloat";
import "../../Components/pages/About.css";

const Quote = () => {
  return (
    <div className="w-full min-h-[70vh] sm:min-h-[60vh] flex items-center justify-center bg-white text-black">
      <div className="text-center max-w-5xl w-full px-4">
        <div style={{ fontFamily: "Bebas Neue, sans-serif" }}>
          <ScrollFloat
            containerClassName="mb-8"
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide transition-all duration-700 ease-out"
            delay={0.2}
            duration={0.8}
            threshold={0.3}
          >
            " Still learning, still building...
          </ScrollFloat>

          <ScrollFloat
            containerClassName="mb-6"
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wide transition-all duration-700 ease-out"
            delay={19}
            duration={0.8}
            threshold={0.3}
          >
            occasionally debugging for hours
          </ScrollFloat>

          <ScrollFloat
            containerClassName="mt-6"
            textClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide opacity-80 transition-all duration-700 ease-out"
            delay={15}
            duration={0.8}
            threshold={0.3}
          >
            because I missed a semicolon "
          </ScrollFloat>
        </div>
      </div>
    </div>
  );
};

export default Quote;
