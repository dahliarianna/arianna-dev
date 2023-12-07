import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Landing from "./components/Landing";
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
