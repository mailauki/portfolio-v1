import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { IconButton, Typography, Box, Tooltip, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import Logo from '../images/JE-logo.png';

function Header({ darkMode, handleDarkMode }) {
  const [open, setOpen] = useState(false)

  function handleDrawerOpen() {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }
  
  const theme = useTheme()

  return (
    <>
      <Box 
        className="Header"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}
      >
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            color: "inherit",
            "&:hover": {
              color: "primary.main"
            },
            cursor: "pointer"
          }}
          component={Link} to="/"
        >
          <Avatar
            alt="Julie Evans"
            src={Logo}
            sx={{ mr: 0.5 }}
          />
          <Typography variant="h6" noWrap>Julie Evans</Typography>
        </Box>
        
        <Box>
          <Tooltip title={`${theme.palette.mode === "dark" ? "Light" : "Dark"} Mode`} arrow>
            <IconButton onClick={handleDarkMode}>
              {theme.palette.mode === "dark" ? <LightModeIcon /> : <NightlightIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Menu" arrow>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu-open"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Menu 
        open={open} 
        handleDrawerClose={handleDrawerClose} 
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
    </>
  )
}

export default Header;
