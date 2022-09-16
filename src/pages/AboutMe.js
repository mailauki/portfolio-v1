import Intro from '../components/Intro';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import { Box } from '@mui/material';

function AboutMe() {
  return (
    <Box className="Page">
      <Box className="row split-column">
        <Intro />
        <Contact />
      </Box>
      <Skills />
    </Box>
  )
}
export default AboutMe;
