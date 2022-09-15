import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';import OpenIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({ title, description, image, githubLink, deployLink }) {
  return (
    <Card sx={{ maxWidth: 340, minHeight: "fit-content", textAlign: "left" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          aria-label="github" 
          component="a" href={githubLink} target="_blank"
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
        <Button 
          size="small" 
          aria-label="visit-site" 
          component="a" href={deployLink} target="_blank"
          startIcon={<OpenIcon />}
        >Visit Site</Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard;
