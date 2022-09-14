import Logo from '../images/JE-logo.png';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, Divider, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HouseIcon from '@mui/icons-material/House';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DevIcon from '@mui/icons-material/LogoDev';

function AboutMe() {
  return (
    <div className="Page">
      <div className="split-column row">
        <div className="Intro">
          <div className="row">
            <Avatar
              alt="Julie Evans"
              src={Logo}
              sx={{ width: 90, height: 90, mr: 2 }}
            />
            <Typography variant="h3" sx={{ mt: 4 }}>About Me</Typography>
          </div>
          <Typography variant="body1" align="justify" paragraph>
            <Typography variant="h4" component="span">H</Typography>ello, my name is Julie. For as long as I can remember I have been an avid learner. I enjoy learning new things, especially pertaining to languages, including programming languages. I like to understand the fundamentals of things and know how they function. I have an eye for design, and I like it when what I work on turns out looking nice. I'm quite the perfectionist, but I try to use it to my advantage when I can. I consider myself a problem-solver, and I like to solve puzzles or make puzzles out of difficult things. My strengths in cultural and linguistic knowledge backed by training in Integrative Studies and Study Abroad experience. I'm skilled with Microsoft Office, as well as Google and Apple counterparts.
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemText 
              primary={<Typography variant="h6">Contact</Typography>} 
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Email" 
              secondary={
                <Link 
                  href="mailto:juliemevans17@gmail.com" 
                  target="_blank"
                  color="inherit"
                  underline="hover"
                >
                  juliemevans17@gmail.com
                </Link>
              } 
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIphoneIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Phone"  
              secondary={
                <Link 
                  href="tel:7134470724" 
                  target="_blank"
                  color="inherit"
                  underline="hover"
                >
                  (713) 447 - 0724
                </Link>
              } 
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HouseIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Address" 
              secondary="Kilgore, TX 75442" 
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText 
              primary="LinkedIn" 
              secondary={
                <Link 
                  href="https://linkedin.com/in/julie-evans-38144180" 
                  target="_blank"
                  color="inherit"
                  underline="hover"
                >
                  https://linkedin.com/in/julie-evans-38144180
                </Link>
              } 
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText 
              primary="GitHub" 
              secondary={
                <Link 
                  href="https://github.com/mailauki" 
                  target="_blank"
                  color="inherit"
                  underline="hover"
                >
                  https://github.com/mailauki
                </Link>
              } 
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DevIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Blog" 
              secondary={
                <Link 
                  href="https://dev.to/mailauki" 
                  target="_blank"
                  color="inherit"
                  underline="hover"
                >
                  https://dev.to/mailauki
                </Link>
              } 
            />
          </ListItem>
        </List>
      </div>
    </div>
  )
}
export default AboutMe;
