import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="title">Welcome to My Portfolio</h1>
          <p className="subtitle">Building amazing web experiences</p>
        </div>

        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <div className="card">
          <h2 className="mb-2">About Me</h2>
          <p>
            I'm a passionate developer who loves creating beautiful and
            functional web applications. Welcome to my portfolio!
          </p>
        </div>

        <div className="card">
          <h2 className="mb-2">My Projects</h2>
          <p>Here are some of the projects I've worked on recently.</p>
          <div className="mt-4">
            <button className="btn btn-primary">View Projects</button>
            <button className="btn btn-secondary">Download Resume</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
