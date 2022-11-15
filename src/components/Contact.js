import { List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Link as Anchor } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HouseIcon from '@mui/icons-material/House';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DevIcon from '@mui/icons-material/LogoDev';

function Contact() {
  const theme = useTheme()

  return (
    <List
      sx={{ 
        backgroundColor: theme.palette.box,
        borderRadius: "10px",
        height: "100%"
      }}
    >
      <ListItem>
        <ListItemText 
          primary={<Typography variant="h6">Contact</Typography>} 
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Email" 
          secondary={
            <Anchor 
              href="mailto:juliemevans17@gmail.com" 
              target="_blank"
              color="inherit"
              underline="hover"
            >
              juliemevans17@gmail.com
            </Anchor>
          } 
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PhoneIphoneIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Phone"  
          secondary={
            <Anchor 
              href="tel:7134470724" 
              target="_blank"
              color="inherit"
              underline="hover"
            >
              (713) 447 - 0724
            </Anchor>
          } 
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HouseIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Address" 
          secondary="Kilgore, TX 75442" 
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LinkedInIcon />
        </ListItemIcon>
        <ListItemText 
          primary="LinkedIn" 
          secondary={
            <Anchor 
              href="https://linkedin.com/in/julie-evans-38144180" 
              target="_blank"
              color="inherit"
              underline="hover"
            >
              https://linkedin.com/in/julie-evans-38144180
            </Anchor>
          } 
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <GitHubIcon />
        </ListItemIcon>
        <ListItemText 
          primary="GitHub" 
          secondary={
            <Anchor 
              href="https://github.com/mailauki" 
              target="_blank"
              color="inherit"
              underline="hover"
            >
              https://github.com/mailauki
            </Anchor>
          } 
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <DevIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Blog" 
          secondary={
            <Anchor 
              href="https://dev.to/mailauki" 
              target="_blank"
              color="inherit"
              underline="hover"
            >
              https://dev.to/mailauki
            </Anchor>
          } 
        />
      </ListItem>
    </List>
  )
}

export default Contact;
