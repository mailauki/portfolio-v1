import { useState, useEffect } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import JavaScriptIcon from './icons/JavaScriptIcon';
import RubyIcon from './icons/RubyIcon';
import ReactIcon from './icons/ReactIcon';
import RailsIcon from './icons/RailsIcon';
import TypeScriptIcon from './icons/TypeScriptIcon';
import ReduxIcon from './icons/ReduxIcon';
import NextJsIcon from './icons/NextJsIcon';

function Skills() {
  const theme = useTheme()
  const [mobileView, setMoblieView] = useState(window.innerWidth < 640)

  function updateMedia() {
    setMoblieView(window.innerWidth < 640)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  }, [])

  return (
    <Box
      className="wrap"
      sx={{ 
        backgroundColor: theme.palette.box, 
        borderRadius: "10px", 
        // margin: "20px",
        padding: 0
      }}
    >
      <ListItem sx={{ width: "fit-content", mr: 1 }}>
        <ListItemText 
          primary={<Typography variant="h6">Skills</Typography>} 
        />
      </ListItem>
      {mobileView ? (
        <Divider />
      ) : (
        <Divider orientation="vertical" flexItem />
      )}

      <Box sx={{ width: "100%" }}>
        <List className="wrap" >
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded">
                <HtmlIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="HTML" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded">
                <CssIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="CSS" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded">
                <JavaScriptIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="JavaScript" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded">
                <RubyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Ruby" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded">
                <TypeScriptIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="TypeScript" />
          </ListItem>
        </List>

        <Divider />

        <List className="wrap">
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded">
                <ReactIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="React" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded">
                <RailsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Ruby on Rails" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded">
                <ReduxIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Redux" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded">
                <NextJsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="NextJS" />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Skills;
