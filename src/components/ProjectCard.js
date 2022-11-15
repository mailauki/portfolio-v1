import { Button, Typography, Box, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({ info }) {
  const { title, description, image, githubLink, deployLink, tags } = info
  const theme = useTheme()

  return (
    <Box 
      className="Card"
      sx={{ 
        backgroundColor: theme.palette.mode === "dark" ? "rgba(60,60,60,0.3)" : "rgba(225,225,225,0.3)"
      }}
    >
      <img 
        src={image ? image : `https://via.placeholder.com/310x200?text=${title}`} 
        alt={title} 
        className="project-image"
        style={{ 
          filter: theme.palette.mode === "dark" ? "opacity(0.8)" : "opacity(1)", 
          minHeight: "100px",
          height: "40%",
          objectFit: "contain",
          background: `linear-gradient(to top, ${theme.palette.divider}, transparent 60%)`,
          flexGrow: 1
        }} 
      />
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: 1, 
          padding: "10px"
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
        {description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {tags.map((tag) => <Chip label={tag} />)}
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
            aria-label="visit-site" 
            component="a" href={deployLink} target="_blank"
            startIcon={<OpenIcon />}
          >
            Visit Site
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectCard;
