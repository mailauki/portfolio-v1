import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, IconButton, Button, ButtonGroup, Link as Anchor} from '@mui/material';
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
            sx={{
              color: location.pathname === "/" ? "primary.main" : ""
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === "/" ? "primary.main" : ""
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
            sx={{
              color: location.pathname === "/projects" ? "primary.main" : ""
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === "/projects" ? "primary.main" : ""
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
            sx={{
              color: location.pathname === "/about-me" ? "primary.main" : ""
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === "/about-me" ? "primary.main" : ""
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
        }}
      >
        <ListItem sx={{ justifyContent: "center" }}>
          <ButtonGroup variant="text">
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
            >
              <GitHubIcon />
            </Button>
            <Button 
              component={Anchor}  
              href="https://dev.to/mailauki" 
              target="_blank"
              underline="hover"
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
