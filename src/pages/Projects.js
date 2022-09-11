import ProjectCard from '../components/ProjectCard';
import CatTubeProjectImage from '../images/cat-tube.png';
import PicWorthyProjectImage from '../images/pic-worthy.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel } from "swiper";

function Projects() {
  return (
    <div className="Page">
      <h1>Projects</h1>
      <Swiper
        direction={"vertical"}
        scrollbar={{
          // hide: true
          draggable: true
        }}
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
