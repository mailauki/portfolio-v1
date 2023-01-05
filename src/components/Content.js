import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';
import Blogs from '../pages/Blogs';
import { Box } from '@mui/material';
import Project from '../pages/Project';

function Content() {
  const info = {
    id: "tic-tic-toe",
    title: "Tic-Tac-Toe",
    description: [
      "This is a website for playing tic-tac-toe, either against the computer or a friend.", 
      [
        "Created Front-End only game based off of previous project using Ruby.", 
        "Used Javascript functions and React hooks to provide game functionality and a “computer” opponent.", 
        "Provided color options of the tokens to the user that are unlockable based on the number of wins tally."
      ]
    ],
    image: "",
    links: {githubLink: "https://github.com/mailauki/tic-tac-toe", demoLink: "https://mailauki-tic-tac-toe.netlify.app"},
    tags: ["React", "Netlify", "Chakra UI"]
  }
  return (
    <>
      <Box className="gradiant-wrapper">
        <Box className="gradiant-1"></Box>
        <Box className="gradiant-2"></Box>
        <Box className="gradiant-3"></Box>
      </Box>
      
      <Box className="Content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project info={info} />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Box>
    </>
  )
}

export default Content;
