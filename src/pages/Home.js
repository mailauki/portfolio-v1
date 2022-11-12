import { Link } from 'react-router-dom';
import { Typography, Fab, Button, Link as Anchor, Box, Avatar, Badge } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel } from "swiper";
import AvatarImage from '../images/avatar.jfif';

function Home() {
  const theme = useTheme()

  return (
    <Box className="Page">
      <Swiper
        className={`Swiper ${theme.palette.mode === "dark" ? "dark" : "light"}`}
        direction={"vertical"}
        slidesPerView="auto"
        scrollbar
        mousewheel={true}
        modules={[Scrollbar, Mousewheel]}
      >
        <SwiperSlide>
          <Box className="Slide">
            <Typography variant="h3" noWrap>
              Julie <span className="span">M. </span>Evans
            </Typography>
            <Box className="wrap">
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
            <Fab 
              variant="extended" 
              color="primary" 
              aria-label="contact-me"
              sx={{ mt: 1 }} 
              component={Anchor}  
              href="mailto:juliemevans17@gmail.com" 
              target="_blank"
            >
              <EmailIcon sx={{ mr: 1 }} />
              Contact Me
            </Fab>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="Slide">
            <Typography variant="h3">Projects</Typography>
            <Typography variant="subtitle1">Some of my most recent Projects that I've made.</Typography>
            <Button component={Link} to="/projects">See My Work</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="Slide">
            <Box>
              <Badge 
                overlap="circular"
                badgeContent={<Typography sx={{ fontSize: "5rem" }}>👋</Typography>}
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
            <Typography variant="h3">About Me</Typography>
            <Typography variant="subtitle1">New to Tech, but excited for more.</Typography>
            <Button component={Link} to="/about-me">Learn More</Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default Home;
