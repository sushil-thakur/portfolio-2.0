import "./App.css";
import Navbar from "./Components/Navbar/navbar.jsx";
import Waves from "./Components/wave/Waves.jsx";
import About from "./Components/pages/About.jsx";
import TextPressureSection from "./Components/section.jsx";
import Section_creative from "./Components/section_creative.jsx";
import Grid from "./Components/Grid/Grid.jsx";
import Quote from "./Components/Quote/Quote.jsx";
import InfiniteMenu from "./Components/InfiniteMenu/InfiniteMenu.jsx";

function App() {
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];
  return (
    <div className="overflow-hidden">
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
      <div className="about">
        <About />
      </div>
      <div className="projects">
        <div style={{ height: "100vh", position: "relative" }}>
          <InfiniteMenu items={items} />
        </div>
      </div>
      <div className="w-full h-[350px] m-5 ">
        <TextPressureSection />
      </div>
    </div>
  );
}

export default App;
