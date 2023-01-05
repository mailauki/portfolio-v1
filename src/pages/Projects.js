import ProjectCard from '../components/ProjectCard';
import { Box, Typography } from '@mui/material';
import { projectData } from '../data';

function Projects() {
  return (
    <>
      <Box className="SubHeader">
        <Typography variant="h4">Projects</Typography>
      </Box>
      
      <Box className="Page">
        {projectData.reverse().map((info) => (
          <ProjectCard info={info} key={info.title} />
        ))}
      </Box>
    </>
  )
}
export default Projects;
