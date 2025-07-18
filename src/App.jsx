import "./App.css";
import Navbar from "./Components/Navbar/navbar.jsx";
import Waves from "./Components/wave/Waves.jsx";
import About from "./Components/pages/About.jsx";
import TextPressureSection from "./Components/section.jsx";
import Section_creative from "./Components/section_creative.jsx";
import Grid from "./Components/Grid/Grid.jsx";
import Quote from "./Components/Quote/Quote.jsx";
// import InfiniteMenu from "./Components/InfiniteMenu/InfiniteMenu.jsx";
import FallingText from "./Components/FallingText/FallingText.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Cursor from "./Components/Cursor/Cursor.jsx";
import Projects from "./Components/pages/projects.jsx";
function App() {
  return (
    <div className="overflow-hidden">
      <Cursor />
      <div className="container">
        <Navbar />
      </div>

      <div className="wave-container w-full h-[350px] relative overflow-hidden">
        <Waves />
      </div>
      <div>
        <Grid />

        <Section_creative />
        <Grid />
      </div>

      <div>
        <Quote />
      </div>
      <Grid />

      <div className="about" id="about">
        <About />
      </div>
      <Grid />

      <div className="h-[40vh] sm:h-[70vh] lg:h-[40vh] px-4 py-6 sm:px-8 lg:px-16 flex flex-col justify-center">
        <h1
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center sm:text-left"
        >
          My Tech Stack
        </h1>
        <FallingText
          text={`My tech stack spans JavaScript,  LaTeX · React,  Tailwind CSS, GSAP, Express.js,  Docker, Git, Postman,  MongoDB, MySQL, TensorFlow, PyTorch,  Pandas, NumPy, Matplotlib, Figma,Drizzle and Canva .`}
          highlightWords={["React", "PyTorch", "OpenCV"]}
          highlightClass="highlighted"
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
      <Grid />

      <div className="w-full h-[20vh] m-5 ">
        <TextPressureSection />
      </div>
      <div className="projects" id="works">
        <Projects />
      </div>
      {/* <div className="projects" id="works">
        <div style={{ height: "100vh", position: "relative" }}>
          <InfiniteMenu items={items} />
        </div>
      </div> */}

      <div id="contacts">
        <Contact />
      </div>
    </div>
  );
}

export default App;
