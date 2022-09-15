import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';
import { createTheme, responsiveFontSizes, ThemeProvider, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

let fontTheme = createTheme()
fontTheme = responsiveFontSizes(fontTheme)

function Content() {
const theme = useTheme()

  return (
    <ThemeProvider theme={fontTheme}>
      <Box 
        className="Content"
        sx={{
          background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, 20%, ${theme.palette.background.paper} 40%)`,
          // background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ` + `${theme.palette.primary.light} 50%, ${theme.palette.background.paper} 100%)`,
          // background:
          //   "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
          //   "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          // backgroundColor: "background.paper",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default Content;
