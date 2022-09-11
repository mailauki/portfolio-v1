import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';

function Content() {
  return (
    <div className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  )
}

export default Content;
