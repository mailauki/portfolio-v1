import ProjectCard from '../components/ProjectCard';
import { Box, Typography } from '@mui/material';

function Blogs() {
  const cardInfo = [
    { 
      title: "currentTarget vs. target", 
      description: ["One of the things I have learned recently is the difference between currentTarget and target. I learned this by experimentation, so there is probably a better and more explicit explanation out there. But with my newbie knowledge, I am going to explain the difference of these two based on what I learned. On a side note, I have not looked up any information pertaining to this topic. This is solely based on what I found out through my trial and error..."], 
      links: { 
        demoLink: "https://dev.to/mailauki/currenttarget-vs-target-3427" 
      }, 
      image: "https://res.cloudinary.com/practicaldev/image/fetch/s--V25osVcI--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/snce09ss0z0i0zw8nmdn.png", 
      tags: ["JavaScript", "Beginners", "Functional", "CodeNewbie"] 
    },
    { 
      title: "Creating a “Follow” button: from Rails to React using Self-Join", 
      description: ["For the first time, I attempted creating a button that a user could click to follow or unfollow another user..."], 
      links: { 
        demoLink: "https://dev.to/mailauki/creating-a-follow-button-from-rails-to-react-using-self-join-jc2" 
      }, 
      image: "https://res.cloudinary.com/practicaldev/image/fetch/s--VuFEwe_w--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r5y1hpwr1wvvhu18xp2a.jpeg", 
      tags: ["Tutorial", "Rails", "React", "Database", ] 
    },
    { 
      title: "Fetching in Tandem", 
      description: ["To start off let me first explain what I mean by fetching in tandem. Fetching is a process to access the data from a database or API with a fetch request. To have this process run in duality is what I mean for it to be in tandem. That is if I make a fetch request that requires either the data from another fetch request or at least the process to have run. In this particular case, I wanted to have a fetch request nested inside another, so that it would run right after the other within a single motion. So it’s not exactly simultaneous but in my case I had it run in a single handler function, so I consider that to be a single motion and thus in tandem..."], 
      links: { 
        demoLink: "https://dev.to/mailauki/fetching-in-tandem-20o9" 
      }, 
      image: "https://res.cloudinary.com/practicaldev/image/fetch/s--bB_87I6T--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/135awjsekr3dyk1eg9f3.jpeg",
      tags: ["React", "Database", "Tutorial"] 
    }
  ]

  return (
    <>
      <Box className="SubHeader">
        <Typography variant="h4">Blogs</Typography>
      </Box>

      <Box className="Page">
        {cardInfo.reverse().map((info) => (
          <ProjectCard info={info} key={info.title} />
        ))}
      </Box>
    </>
  )
}

export default Blogs;
