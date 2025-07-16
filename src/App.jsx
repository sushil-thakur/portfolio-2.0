import "./App.css";
import Navbar from "./Components/Navbar/navbar.jsx";
import Waves from "./Components/wave/Waves.jsx";
import About from "./Components/pages/About.jsx";
import Grid from "./Components/Grid/Grid.jsx";
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <div className="wave-container w-full h-[350px] relative overflow-hidden">
        <Waves />
      </div>
      
      <div className="grid">
        <Grid/>
      </div>
      
      <div className="about">
        <About />
      </div>
      
    </>
  );
}

export default App;
