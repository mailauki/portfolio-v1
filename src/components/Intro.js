import { Link } from 'react-router-dom';
import Logo from '../images/JE-logo.png';
import { Typography, Avatar, Box, Button } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider, useTheme } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import JulieEvansResume from '../files/JulieEvansResume.pdf';

function Intro() {
  const theme = useTheme()

  let fontTheme = createTheme()
  fontTheme = responsiveFontSizes(fontTheme)

  return (
    <ThemeProvider theme={fontTheme}>
      <Box 
        sx={{ 
          backgroundColor: theme.palette.box, 
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <Box className="row">
          <Avatar
            alt="Julie Evans"
            src={Logo}
            sx={{ width: 90, height: 90, mr: 2 }}
          />
          <Typography variant="h3" noWrap sx={{ mt: 4 }}>About Me</Typography>
        </Box>
        <Typography variant="body1" align="justify" paragraph>
          <Typography variant="h4" component="span">H</Typography>ello, my name is Julie. For as long as I can remember I have been an avid learner. I enjoy learning new things, especially pertaining to languages. I like to understand the fundamentals of things and know how they function. My greatest passion is making something visual and functions using words. I'm quite the perfectionist, but I try to use it to my advantage when I can. I consider myself a problem-solver, and I like to solve puzzles or make puzzles out of difficult things. 
        </Typography>
        <Typography variant="body1" align="justify" paragraph>
          I'm experienced in React, JavaScript, and Ruby on Rails based programming. I have a Bachelors Degree in Integrative Studies with focuses in Linguistics and Anthropology. My understanding of Linguistics helps to provide a basis for ease in language learning, including programming languages.
        </Typography>
        <Button 
          aria-label="download" 
          component={Link} to={JulieEvansResume} target="_blank"
          download="JulieEvansResume.pdf"
          startIcon={<DownloadIcon />}
          sx={{ mr: 1 }}
        >
          DownLoad Resume
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default Intro;
