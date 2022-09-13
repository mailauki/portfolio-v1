import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, IconButton, Typography, Divider, Box, Switch, Link as Anchor } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Web';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DevIcon from '@mui/icons-material/LogoDev';
import NightlightIcon from '@mui/icons-material/Nightlight';

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '64px',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

function Header() {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [checked, setChecked] = useState(['dark'])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }

  return (
    <div>
      <Box className="Header">
        <Typography 
          variant="h6" 
          noWrap  
          sx={{ flexGrow: 1 }}
          component={Link} to="/"
          color="inherit"
        >
          Julie Evans
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu-open"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton 
            onClick={handleDrawerClose} 
            aria-label="menu-close"
          >
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton compontent={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compontent={Link} to="/projects">
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compontent={Link} to="/about-me">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="About Me" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <NightlightIcon />
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
            <Switch
              edge="end"
              onChange={handleToggle('dark')}
              checked={checked.indexOf('dark') !== -1}
              inputProps={{
                'aria-labelledby': 'switch-dark-mode',
              }}
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ justifyContent: "center" }}>
            <IconButton 
              component={Anchor}  
              href="mailto:juliemevans17@gmail.com" 
              target="_blank"
              underline="hover"
            >
              <EmailIcon />
            </IconButton>
            <IconButton 
              component={Anchor}  
              href="https://linkedin.com/in/julie-evans-38144180" 
              target="_blank"
              underline="hover"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              component={Anchor}  
              href="https://github.com/mailauki" 
              target="_blank"
              underline="hover"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton 
              component={Anchor}  
              href="https://dev.to/mailauki" 
              target="_blank"
              underline="hover"
            >
              <DevIcon />
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default Header;
