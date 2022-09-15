import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { IconButton, Typography, Box, Tooltip } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

function Header({ darkMode, handleDarkMode }) {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  
  const theme = useTheme()

  return (
    <>
      <Box 
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "background.paper",
          height: "64px",
          width: "100%",
          margin: 0,
          padding: "0 20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          zIndex: 2,
        }}
        // className="Header"
      >
        <Typography 
          variant="h6" 
          noWrap  
          sx={{ 
            "&:hover": {
              color: "primary.main"
            }
          }}
          component={Link} to="/"
          color="inherit"
        >
          Julie Evans
        </Typography>
        <Box>
          <Tooltip title={`${theme.palette.mode === "dark" ? "Dark" : "Light"} Mode`} arrow>
            <IconButton onClick={handleDarkMode}>
              {theme.palette.mode === "dark" ? <NightlightIcon /> : <LightModeIcon />}
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
