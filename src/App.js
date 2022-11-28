import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import './styles/App.css';
import './styles/Background.css';
import './styles/WaveEmoji.css';
import './styles/SlideIn.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography } from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()

  function handleDarkMode() {
    setDarkMode(!darkMode)
  }
  
  const theme = createTheme({
    palette: {
      mode: "light",
      box: "rgba(225,225,225,0.4)",
      secondary: {
        main: "#E1A100",
        light: "#E7B333",
        dark: "#9D7000",
      }
    }
  })
  
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      box: "rgba(60,60,60,0.4)",
      secondary: {
        main: "#E4B828",
        light: "#E9C653",
        dark: "#9F801C",
      }
    }
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add("show")
        } else {
          entry.target.classList.remove("show")
        }
      })
    })
  
    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el) => observer.observe(el))

    window.scrollTo(0,0)
  }, [location.pathname])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <CssBaseline />
      <Box className="App">
        <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />

        <Content />

        <Box className="Footer">
          <Typography variant="body1" color="text.secondary">❤ Julie Evans</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
