import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">

        <Link to="/" className="logo">
          NU<span>.</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </nav>

      {/* Pages */}
      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 Niveditha Unni. Built with React & Docker.</p>
      </footer>

    </div>
  );
}

export default App;