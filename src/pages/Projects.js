import ProjectCard from '../components/ProjectCard';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CatTubeProjectImage from '../images/cat-tube.jpg';
import PicWorthyProjectImage from '../images/pic-worthy.jpg';
import LeBanqueDuPorcineImage from '../images/le-banque-du-porcine.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel } from "swiper";

function Projects() {
  const theme = useTheme()

  return (
    <Box className="Page">
      <Box sx={{ position: "absolute", top: "84px", width: "100%", alignItems: "center", textAlign: "center", zIndex: 1 }}>
        <Typography variant="h3">Projects</Typography>
      </Box>
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
            <ProjectCard 
              title="CatTube" 
              description="This is a website for posting and commenting on cat-related videos. For more information see README on GitHub." 
              image={CatTubeProjectImage} 
              githubLink="https://github.com/mailauki/phase-4-project-cattube" 
              deployLink="https://cattube-project.herokuapp.com" 
              tags={["React", "Rails", "PostgreSQL", "Netlify", "Render"]}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="Slide">
            <ProjectCard 
              title="PicWorthy" 
              description="This is a website for posting, liking, and commenting on photos. For more information see README on GitHub." 
              image={PicWorthyProjectImage} 
              githubLink="https://github.com/mailauki/pic-worthy" 
              deployLink="https://pic-worthy-project.herokuapp.com" 
              tags={["React", "Rails", "PostgreSQL", "Netlify", "Render", "MaterialUI", "SwiperJs"]}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="Slide">
            <ProjectCard 
              title="Le Banque du Porcine" 
              description="This is a website for viewing balances and wish-list items, with progress bars calculated based on both. For more information see README on GitHub." 
              image={LeBanqueDuPorcineImage}
              githubLink="https://github.com/mailauki/le-banque-du-porcine-version-2" 
              deployLink="https://le-banque-du-porcine.netlify.app/" 
              tags={["NextJs", "Netlify", "Supabase", "MaterialUI", "SwiperJs"]}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="Slide">
            <ProjectCard 
              title="PokeTracker" 
              description="This is a website for viewing viewing pokemon, pokedexes, and tracking your collection. For more information see README on GitHub." 
              image=""
              githubLink="https://github.com/mailauki/poke-tracker" 
              deployLink="https://poke-tracker.netlify.app/" 
              tags={["React", "TypeScript", "Netlify", "MaterialUI"]}
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
export default Projects;
