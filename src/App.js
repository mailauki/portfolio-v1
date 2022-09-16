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
      mode: darkMode ? "dark" : "light",
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
