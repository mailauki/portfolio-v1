import Logo from '../images/logo.png';
import { List, ListItem, ListSubheader, ListItemButton, ListItemText, Typography, Avatar } from '@mui/material';

function AboutMe() {
  return (
    <div className="Page">
      <div className="row" style={{ alignItems: "flex-start", marginLeft: "20px", marginRight: "20px" }}>
        <div style={{ marginRight: "10px" }}>
          <div className="row" style={{ alignItems: "stretch" }}>
            <Avatar
              alt="Julie Evans"
              src={Logo}
              sx={{ width: 90, height: 90, mr: 2 }}
            />
            <Typography variant="h3" sx={{ mt: 4 }}>About Me</Typography>
          </div>
          <Typography variant="body1" align="justify">
            <Typography variant="h4" component="span">H</Typography>ello, my name is Julie. For as long as I can remember I have been an avid learner. I enjoy learning new things, especially pertaining to languages, including programming languages. I like to understand the fundamentals of things and know how they function. I have an eye for design, and I like it when what I work on turns out looking nice. I'm quite the perfectionist, but I try to use it to my advantage when I can. I consider myself a problem-solver, and I like to solve puzzles or make puzzles out of difficult things. My strengths in cultural and linguistic knowledge backed by training in Integrative Studies and Study Abroad experience. I'm skilled with Microsoft Office, as well as Google and Apple counterparts.
          </Typography>
        </div>
        <List
          subheader={
            <ListSubheader component="div" sx={{ borderBottom: 1 }}>
              <Typography variant="h6">Contact</Typography>
            </ListSubheader>
          }
        >
          <ListItem>
            <ListItemText primary="Email" secondary="juliemevans17@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary="(713) 447 - 0724" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary="Kilgore, TX 75442" />
          </ListItem>
          <ListItem>
            <ListItemText primary="LinkedIn" secondary="https://linkedin.com/in/julie-evans-38144180" />
          </ListItem>
          <ListItem>
            <ListItemText primary="GitHub" secondary="https://github.com/mailauki" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Blog" secondary="https://dev.to/mailauki" />
          </ListItem>
        </List>
      </div>
    </div>
  )
}
export default AboutMe;
