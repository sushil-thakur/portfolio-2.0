import "./App.css";
import Navbar from "./Components/Navbar/navbar.jsx";
import Waves from "./Components/Navbar/wave/Waves.jsx";
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <div className="wave-container w-full h-[350px] relative overflow-hidden">
        <Waves />
      </div>
    </>
  );
}

export default App;
