import "./App.css";
import Navbar from "./Components/Navbar/navbar.jsx";
import Waves from "./Components/wave/Waves.jsx";
import About from "./Components/pages/About.jsx";
import TextPressureSection from "./Components/section.jsx";
import Section_creative from "./Components/section_creative.jsx";
function App() {
  return (
    <div className="overflow-hidden">
      <div className="container">
        <Navbar />
      </div>

      <div className="wave-container w-full h-[350px] relative overflow-hidden">
        <Waves />
      </div>
      <div>
        <Section_creative />
      </div>
      {/* <div className="about">
        <About />
      </div> */}
      {/* <div className="w-full h-[350px] m-5 ">
        <TextPressureSection />
      </div> */}
    </div>
  );
}

export default App;
