import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { IconButton, Typography, Box, Tooltip, SvgIcon } from '@mui/material';
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
            "&:hover": {
              color: "primary.main"
            },
            cursor: "pointer"
          }}
        >
          <span style={{ marginLeft: "-10px", marginRight: "-22px" }}>
            <svg width="60px" height="60px" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0,400) scale(0.1,-0.1)" fill="currentColor" stroke="none">
                <path d="M2380 3274 c-98 -109 -262 -377 -421 -691 -311 -617 -533 -1288 -477 -1442 16 -42 58 -62 104 -50 69 19 229 201 412 467 50 73 71 97 66 77 -43 -187 -271 -934 -345 -1130 -51 -136 -54 -159 -17 -163 17 -2 33 4 46 19 35 37 241 683 371 1159 113 416 386 1588 398 1706 7 78 -6 104 -51 104 -28 0 -42 -9 -86 -56z m-55 -554 c-173 -762 -212 -914 -238 -925 -24 -11 -69 -68 -232 -295 -60 -85 -150 -194 -198 -244 -102 -105 -111 -104 -97 11 44 348 363 1127 677 1653 95 158 185 289 190 274 2 -5 -44 -219 -102 -474z" />
              </g>
            </svg>
          </span>
          <Typography 
            variant="h6" 
            noWrap
            component={Link} to="/"
            color="inherit"
          >
            ulie
          </Typography>

          <span style={{ marginRight: "-22px" }}>
            <svg width="60px" height="60px" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0,400) scale(0.1,-0.1)" fill="currentColor" stroke="none">
                <path d="M2264 3114 c-140 -71 -424 -337 -485 -456 -55 -107 5 -176 131 -151 36 7 47 7 43 -1 -4 -6 -62 -95 -129 -197 -241 -367 -409 -681 -484 -904 -90 -270 -29 -375 165 -281 126 60 451 284 1030 711 434 320 579 424 675 488 134 89 135 90 121 115 -32 59 -69 36 -786 -493 -726 -536 -1080 -775 -1146 -775 -65 0 37 310 203 615 87 159 168 291 327 534 140 212 157 251 129 279 -16 16 -52 15 -137 -4 -40 -9 -75 -13 -79 -10 -14 14 37 85 133 184 115 120 223 212 315 270 91 57 104 70 89 88 -17 21 -57 17 -115 -12z"/>
              </g>
            </svg>
          </span>
          <Typography 
            variant="h6" 
            noWrap 
            component={Link} to="/"
            color="inherit"
          >
            vans
          </Typography>
        </Box>

        {/* <Typography 
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
        </Typography> */}
        
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
