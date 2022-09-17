import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function handleDarkMode() {
    setDarkMode(!darkMode)
  }
  
  const theme = createTheme({
    palette: {
      mode: "light",
      box: "rgba(225,225,225,0.3)",
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
      box: "rgba(60,60,60,0.3)",
      secondary: {
        main: "#E4B828",
        light: "#E9C653",
        dark: "#9F801C",
      }
    }
  })

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <CssBaseline />
      <div className="App">
        <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
