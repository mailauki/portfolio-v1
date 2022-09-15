import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ darkMode, handleDarkMode }) {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

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
