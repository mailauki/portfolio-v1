import { Button, Typography, Box, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({ info }) {
  const { title, description, image, links, tags } = info
  const { githubLink, demoLink } = links
  const theme = useTheme()

  return (
    <Box 
      className="Card"
      sx={{ backgroundColor: theme.palette.box }}
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
          flexGrow: 1,
          flexShrink: 1
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

        <Typography variant="body1" color="text.secondary">
          {description[0]}
        </Typography>

        {description.length > 1 ? (
          <ul style={{ listStyle: "none", paddingInlineStart: 0 }}>
            {description[1].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start" }}>
                <span style={{ margin: "0 10px 0 0", color: theme.palette.text.secondary }}>•</span>
                <Typography variant="body2" color="text.secondary">{item}</Typography>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}

        {tags ? (
          <Box 
            sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
            className="Tags"
          >
            {tags.map((tag) => <Chip key={tag} label={tag} />)}
          </Box>
        ) : (
          <></>
        )}

        <Box>
          {!githubLink ? (
            <></>
          ) : (
            <Button 
              aria-label="visit-site" 
              component="a" href={githubLink} target="_blank"
              startIcon={<GitHubIcon />}
              sx={{ mr: 1 }}
            >
              GitHub
            </Button>
          )}

          {!demoLink ? (
            <></>
          ) : (
            <Button 
              aria-label="visit-site" 
              component="a" href={demoLink} target="_blank"
              startIcon={<OpenIcon />}
            >
              Visit Site
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectCard;
