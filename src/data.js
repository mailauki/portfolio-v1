import CatTubeProjectImage from './images/cat-tube.jpg';
import PicWorthyProjectImage from './images/pic-worthy.jpg';
import LeBanqueDuPorcineImage from './images/le-banque-du-porcine.jpg';
import PokeTrackerImage from './images/poke-tracker.jpg';
import TicTacToeImage from './images/tic-tac-toe.jpg';

export const projectData = [{ 
  id: "cat-tube",
  title: "CatTube", 
  description: [
    "This is a website for posting and commenting on cat-related videos.", 
    [
      "Limited content to only pertain to cats through ActiveRecord Validations.", 
      "Provided stored user information in the database and interaction to content through Auth.", 
      "Utilized a Self-Join database table to allow for user-to-user interaction."
    ]
  ], 
  image: CatTubeProjectImage, 
  links: {
    githubLink: "https://github.com/mailauki/phase-4-project-cattube"
  },
  tags: ["React", "Ruby", "Rails", "PostgreSQL", "Heroku"] 
},
{ 
  id: "pic-worthy",
  title: "PicWorthy", 
  description: [
    "This is a website for posting, liking, and commenting on photos.", 
    [
      "Structured using mobile-first design with phone screen-size layout in mind and later upscaling.", 
      "Added Redux usage to help maximize database functionality.", 
      "Included external components and tools such as Material UI and Swiper JS through React plugins."
    ]
  ], 
  image: PicWorthyProjectImage, 
  links: {
    githubLink: "https://github.com/mailauki/pic-worthy", 
    demoLink: "https://pic-worthy.onrender.com"
  },
  tags: ["React", "Redux", "Ruby", "Rails", "PostgreSQL", "Render", "Material UI", "Swiper JS"] 
},
{ 
  id: "le-banque-du-porcine",
  title: "Le Banque du Porcine", 
  description: [
    "This is a website for viewing balances and wish-list items, with progress bars calculated based on both.", 
    [
      "Created minimalistic Next JS Application using Supabase for the database API.", 
      "Utilized nested routes to personalize data shown limited to the logged-in user.", 
      "Stored data with integrations interconnecting them to each other, such as having an item only exist if there is a user."
    ]
  ], 
  image: LeBanqueDuPorcineImage,  
  links: {
    githubLink: "https://github.com/mailauki/le-banque-du-porcine-version-2", 
    demoLink: "https://le-banque-du-porcine.netlify.app"
  },
  tags: ["Next JS", "Redux", "Netlify", "Supabase", "Material UI", "Swiper JS"] 
},
{ 
  id: "poke-tracker",
  title: "PokeTracker", 
  description: ["This is a website for viewing viewing pokemon, pokedexes, and tracking your collection."], 
  image: PokeTrackerImage,   
  links: {
    githubLink: "https://github.com/mailauki/poke-tracker", 
    demoLink: "https://poke-tracker.netlify.app"
  },
  tags: ["React", "TypeScript", "Redux", "Netlify", "Material UI"]
},
{
  id: "tic-tic-toe",
  title: "Tic-Tac-Toe",
  description: [
    "This is a website for playing tic-tac-toe, either against the computer or a friend.", 
    [
      "Created Front-End only game based off of previous project using Ruby.", 
      "Used Javascript functions and React hooks to provide game functionality and a “computer” opponent.", 
      "Provided color options of the tokens to the user that are unlockable based on the number of wins tally."
    ]
  ],
  image: TicTacToeImage,
  links: {
    githubLink: "https://github.com/mailauki/tic-tac-toe", 
    demoLink: "https://mailauki-tic-tac-toe.netlify.app"
  },
  tags: ["React", "Netlify", "Chakra UI"]
}]