import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSwiper } from 'swiper/react';

function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <IconButton onClick={() => swiper.slideNext()}>
      <ExpandMoreIcon />
    </IconButton>
  )
}

export default SlideNextButton;
