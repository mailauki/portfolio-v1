import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data';

function Project() {
  const { id } = useParams()
  const info = projectData.find((data) => data.id === id)

  return (
    <>
      <Box className="SubHeader">
        <Typography variant="h4">{info.title}</Typography>
      </Box>
      
      <Box className="Page">
        <ProjectCard info={info} key={info.title} />
      </Box>
    </>
  )
}

export default Project;