import Logo from '../images/JE-logo.png';
import { List, ListItem, ListSubheader, ListItemIcon, ListItemText, Typography, Avatar, Divider, SvgIcon } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import RssFeedIcon from '@mui/icons-material/RssFeed';

let theme = createTheme()
theme = responsiveFontSizes(theme)

function AboutMe() {
  return (
    <div className="Page">
      <ThemeProvider theme={theme}>
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
              <ListItemText primary={<Typography variant="h6">Contact</Typography>} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Email" secondary="juliemevans17@gmail.com" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Phone" secondary="(713) 447 - 0724" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Address" secondary="Kilgore, TX 75442" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SvgIcon viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="LinkedIn" secondary="https://linkedin.com/in/julie-evans-38144180" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="GitHub" secondary="https://github.com/mailauki" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RssFeedIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" secondary="https://dev.to/mailauki" />
            </ListItem>
          </List>
        </div>
      </ThemeProvider>
    </div>
  )
}
export default AboutMe;
