import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemButton, ListItemText, Drawer, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
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

  return (
    <div className="Header">
      <Toolbar>
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
      </Toolbar>
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
        <List>
          <ListItem disablePadding>
            <ListItemButton compontent={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compontent={Link} to="/projects">
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compontent={Link} to="/about-me">
              <ListItemText primary="About Me" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default Header;
