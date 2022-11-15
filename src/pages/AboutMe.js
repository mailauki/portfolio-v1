import Intro from '../components/Intro';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import { Box } from '@mui/material';

function AboutMe() {
  return (
    <Box className="Page Panels">
      <Box className="Panel hidden">
        <Intro />
      </Box>
      <Box className="Panel hidden">
        <Contact />
      </Box>
      <Box className="Panel hidden">
        <Skills />
      </Box>
    </Box>
  )
}
export default AboutMe;
