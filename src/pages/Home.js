import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

function Home() {
  return (
    <div>
      <Swiper
        direction={"vertical"}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
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
