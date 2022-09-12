import ProjectCard from '../components/ProjectCard';
import { Box, Typography } from '@mui/material';
import CatTubeProjectImage from '../images/cat-tube.png';
import PicWorthyProjectImage from '../images/pic-worthy.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel } from "swiper";

function Projects() {
  return (
    <div className="Page">
      <Box sx={{ position: "absolute", top: "60px", width: "calc(100% - 40px)", alignItems: "center", textAlign: "center", zIndex: 1 }}>
        <Typography variant="h3">Projects</Typography>
      </Box>
      {/* <Typography variant="h3" sx={{ position: "absolute", top: "60px" }}>Projects</Typography> */}
      <Swiper
        className="Swiper"
        direction={"vertical"}
        scrollbar
        mousewheel={true}
        modules={[Scrollbar, Mousewheel]}
      >
        <SwiperSlide>
          <div className="Slide">
            <ProjectCard 
              title="CatTube" 
              description="This is a website for posting and commenting on cat-related videos. For more information see README on GitHub." 
              image={CatTubeProjectImage} 
              githubLink="https://github.com/mailauki/phase-4-project-cattube" 
              deployLink="https://cattube-project.herokuapp.com" 
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide">
            <ProjectCard 
              title="PicWorthy" 
              description="This is a website for posting, liking, and commenting on photos. For more information see README on GitHub." 
              image={PicWorthyProjectImage} 
              githubLink="https://github.com/mailauki/pic-worthy" 
              deployLink="https://pic-worthy-project.herokuapp.com" 
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide">
            <ProjectCard 
              title="Le Banque du Porcine" 
              description="For more information see README on GitHub." 
              image="" 
              githubLink="https://github.com/mailauki/le-banque-du-porcine" 
              deployLink="https://le-banque-du-porcine.herokuapp.com" 
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Projects;
