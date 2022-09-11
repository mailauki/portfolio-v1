import { Card, CardActions, CardContent, CardMedia, Button, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCard({ title, description, image, githubLink, deployLink }) {
  return (
    <Card sx={{ maxWidth: 345, textAlign: "left" }}>
      <CardMedia
        component="img"
        height="240"
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
        <IconButton 
          aria-label="github" 
          component="a" href={githubLink} target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <Button 
          size="small" 
          aria-label="visit-site" 
          component="a" href={deployLink} target="_blank"
        >Visit Site</Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard;
