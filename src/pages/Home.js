import { Link } from 'react-router-dom';
import { Typography, Fab, Button, Link as Anchor, Box, Avatar, Badge } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import AvatarImage from '../images/avatar.jfif';

function Home() {
  const theme = useTheme()

  return (
    <Box className="Page">
      <Box className="Slide">
        <Typography variant="h3" noWrap className="hidden">
          Julie <span className="span">M. </span>Evans
        </Typography>
        <Box className="wrap hidden">
          <Typography variant="subtitle1" noWrap>
            Web Developer<span className="span">/</span>
          </Typography>
          <Typography variant="subtitle1" noWrap>
            Software Engineer<span className="span">/</span>
          </Typography>
          <Typography variant="subtitle1" noWrap>
            Full-Stack Developer
          </Typography>
        </Box>
        <Box className="hidden">
          <Fab 
            variant="extended" 
            color="primary" 
            aria-label="contact-me"
            sx={{ mt: 1, zIndex: 1 }} 
            component={Anchor}  
            href="mailto:juliemevans17@gmail.com" 
            target="_blank"
          >
            <EmailIcon sx={{ mr: 1 }} />
            Contact Me
          </Fab>
        </Box>
      </Box>

      <Box className="Slide">
        <Typography variant="h3" className="hidden">Projects</Typography>
        <Typography variant="subtitle1" className="hidden">Some of my most recent Projects that I've made.</Typography>
        <Box className="hidden">
          <Button component={Link} to="/projects" className="hidden">See My Work</Button>
        </Box>
      </Box>

      <Box className="Slide">
        <Box className="hidden">
          <Badge 
            overlap="circular"
            badgeContent={<Typography className="wave-emoji" sx={{ fontSize: "5rem" }}>👋</Typography>}
            anchorOrigin={{ 
              vertical: "bottom", horizontal: "left" 
            }}
            sx={{ margin: 2 }}
          >
            <Avatar 
              src={AvatarImage}
              sx={{ 
                width: 184,
                height: 184
              }} 
            />
          </Badge>
        </Box>
        <Typography variant="h3" className="hidden">About Me</Typography>
        <Typography variant="subtitle1" className="hidden">New to Tech, but excited for more.</Typography>
        <Box className="hidden">
          <Button component={Link} to="/about-me">Learn More</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Home;
