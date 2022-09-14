import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme()
theme = responsiveFontSizes(theme)

function Content() {
  return (
    <div className="Content">
      {/* <div className="Page"><h1>Home</h1></div> */}
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default Content;
