import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';
import { Box } from '@mui/material';

function Content() {
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
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Box>
    </>
  )
}

export default Content;
