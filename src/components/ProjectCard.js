import { Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';import OpenIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({ title, description, image, githubLink, deployLink }) {
  const theme = useTheme()

  return (
    <Box 
      className="Intro"
      width="80%"
      sx={{ 
        textAlign: "left", 
        backgroundColor: theme.palette.mode === "dark" ? "rgba(60,60,60,0.3)" : "rgba(225,225,225,0.3)",
        borderRadius: "10px", 
        margin: "0 auto"
      }}
    >
      <img 
        src={image} 
        alt={title} 
        className="project"
        style={{ 
          filter: theme.palette.mode === "dark" ? "opacity(0.8)" : "opacity(1)", 
          minHeight: "100px",
          maxHeight: "200px",
          width: "calc(100% + 20px)",
          margin: "-10px -10px 10px -10px",
          objectFit: "contain",
          background: `linear-gradient(to top, ${theme.palette.divider}, transparent 60%)`,
        }} 
      />
      <Box>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
        {description}
        </Typography>
      </Box>
      <Box>
        <Button 
          aria-label="github" 
          component="a" href={githubLink} target="_blank"
          startIcon={<GitHubIcon />}
          sx={{ mr: 1 }}
        >
          GitHub
        </Button>
        <Button 
          size="small" 
          aria-label="visit-site" 
          component="a" href={deployLink} target="_blank"
          startIcon={<OpenIcon />}
        >
          Visit Site
        </Button>
      </Box>
    </Box>
  )
}

export default ProjectCard;
