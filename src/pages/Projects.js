import ProjectCard from '../components/ProjectCard';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CatTubeProjectImage from '../images/cat-tube.jpg';
import PicWorthyProjectImage from '../images/pic-worthy.jpg';
import LeBanqueDuPorcineImage from '../images/le-banque-du-porcine.jpg';
import PokeTrackerImage from '../images/poke-tracker.jpg';
import TicTacToeImage from '../images/tic-tac-toe.jpg';

function Projects() {
  const theme = useTheme()

  const cardInfo = [{ 
    title: "CatTube", 
    description: "This is a website for posting and commenting on cat-related videos. For more information see README on GitHub.", 
    image: CatTubeProjectImage, 
    githubLink: "https://github.com/mailauki/phase-4-project-cattube", 
    deployLink: "https://cattube-project.herokuapp.com", 
    tags: ["React", "Ruby", "Rails", "PostgreSQL", "Heroku"] 
  },
  { 
    title: "PicWorthy", 
    description: "This is a website for posting, liking, and commenting on photos. For more information see README on GitHub.", 
    image: PicWorthyProjectImage, 
    githubLink: "https://github.com/mailauki/pic-worthy", 
    deployLink: "https://pic-worthy.onrender.com", 
    tags: ["React", "Redux", "Ruby", "Rails", "PostgreSQL", "Render", "Material UI", "Swiper JS"] 
  },
  { 
    title: "Le Banque du Porcine", 
    description: "This is a website for viewing balances and wish-list items, with progress bars calculated based on both. For more information see README on GitHub.", 
    image: LeBanqueDuPorcineImage, 
    githubLink: "https://github.com/mailauki/le-banque-du-porcine-version-2", 
    deployLink: "https://le-banque-du-porcine.netlify.app", 
    tags: ["Next JS", "Redux", "Netlify", "Supabase", "Material UI", "Swiper JS"] 
  },
  { 
    title: "PokeTracker", 
    description: "This is a website for viewing viewing pokemon, pokedexes, and tracking your collection. For more information see README on GitHub.", 
    image: PokeTrackerImage, 
    githubLink: "https://github.com/mailauki/poke-tracker", 
    deployLink: "https://poke-tracker.netlify.app", 
    tags: ["React", "TypeScript", "Redux", "Netlify", "Material UI"]
  },
  {
    title: "Tic-Tac-Toe",
    description: "This is a website for playing tic-tac-toe, either against the computer or a friend. For more information see README on GitHub.",
    image: TicTacToeImage,
    githubLink: "https://github.com/mailauki/tic-tac-toe",
    deployLink: "https://mailauki-tic-tac-toe.netlify.app",
    tags: ["React", "Netlify", "Chakra UI"]
  }]

  return (
    <Box className="Page">
      <Box 
        sx={{ 
          position: "fixed", 
          top: "64px", 
          height: "64px",
          width: "100%", 
          textAlign: "center", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
          zIndex: 1, 
          backdropFilter: "blur(5px)"
        }}
      >
        <Typography variant="h3">Projects</Typography>
      </Box>

      <Box sx={{ height: "64px" }}></Box>

      {cardInfo.reverse().map((info) => (
        <Box className="Slide hidden">
          <ProjectCard 
            info={info}
          />
        </Box>
      ))}
    </Box>
  )
}
export default Projects;
