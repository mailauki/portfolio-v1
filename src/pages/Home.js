import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel } from "swiper";

function Home() {
  return (
    <div className="Page">
      <Swiper
        className="Swiper"
        direction={"vertical"}
        slidesPerView="auto"
        scrollbar
        mousewheel={true}
        modules={[Scrollbar, Mousewheel]}
      >
        <SwiperSlide onClick={() => console.log("click")}>
          <div className="Slide">
            <h1>Julie M. Evans</h1>
            <p>Web Developer / Software Engineer / Full-Stack Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => console.log("click")}>
          <div className="Slide">
            <h1>About Me</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => console.log("click")}>
          <div className="Slide">
            <h1>Projects</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home;
