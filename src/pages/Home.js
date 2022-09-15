import { Link } from 'react-router-dom';
import { Typography, Fab, Button, Link as Anchor } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel } from "swiper";

function Home() {
  return (
    <div className="Page">
      <Swiper
        className="Swiper"
        direction={"vertical"}
        slidesPerView="auto"
        scrollbar
        mousewheel={true}
        modules={[Scrollbar, Mousewheel]}
      >
        <SwiperSlide>
          <div className="Slide">
            <Typography variant="h3">Julie M. Evans</Typography>
            <Typography variant="subtitle1">Web Developer / Software Engineer / Full-Stack Developer</Typography>
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide">
            <Typography variant="h3">Projects</Typography>
            <Typography variant="subtitle1">Some of my most recent Projects that I've made.</Typography>
            <Button component={Link} to="/projects">See More</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide">
            <Typography variant="h3">About Me</Typography>
            <Typography variant="subtitle1">New to Tech, but excited for more.</Typography>
            <Button component={Link} to="/about-me">Learn More</Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home;
