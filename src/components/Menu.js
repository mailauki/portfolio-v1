import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, IconButton, Button, ButtonGroup, Link as Anchor} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Web';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DevIcon from '@mui/icons-material/LogoDev';

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '64px',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

function Menu({ open, handleDrawerClose }) {
  let location = useLocation()
  const theme = useTheme()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        }
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader
        sx={{
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <IconButton 
          onClick={handleDrawerClose} 
          aria-label="menu-close"
        >
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>

      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            onClick={handleDrawerClose} 
            sx={{
              color: location.pathname === "/" ? "secondary.main" : ""
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === "/" ? "secondary.main" : ""
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/projects"
            onClick={handleDrawerClose} 
            sx={{
              color: location.pathname === "/projects" ? "secondary.main" : ""
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === "/projects" ? "secondary.main" : ""
              }}
            >
              <WebIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/about-me"
            onClick={handleDrawerClose} 
            sx={{
              color: location.pathname === "/about-me" ? "secondary.main" : ""
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === "/about-me" ? "secondary.main" : ""
              }}
            >
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItemButton>
        </ListItem>
      </List>

      <List
        sx={{
          width: '100%',
          mb: 2,
          position: 'absolute',
          bottom: 0,
          color: theme.palette.text.secondary
        }}
      >
        <ListItem sx={{ justifyContent: "center" }}>
          <ButtonGroup variant="text" color="inherit">
            <Button 
              component={Anchor}  
              href="mailto:juliemevans17@gmail.com" 
              target="_blank"
            >
              <EmailIcon />
            </Button>
            <Button 
              component={Anchor}  
              href="https://linkedin.com/in/julie-evans-38144180" 
              target="_blank"
            >
              <LinkedInIcon />
            </Button>
            <Button 
              component={Anchor}  
              href="https://github.com/mailauki" 
              target="_blank"
            >
              <GitHubIcon />
            </Button>
            <Button 
              component={Anchor}  
              href="https://dev.to/mailauki" 
              target="_blank"
            >
              <DevIcon />
            </Button>
          </ButtonGroup>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Menu;
