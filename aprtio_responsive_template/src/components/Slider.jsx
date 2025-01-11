import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../style/slider.css";
import pic1 from "../imgs/pic1.jpg";
import pic2 from "../imgs/pic2.jpg";
import pic3 from "../imgs/pic3.jpg";

function Slider() {
  return (
    <div>
      <Swiper
        direction="vertical"
        spaceBetween={30}
        centeredSlides={true}
        allowTouchMove={false}
        freeMode={true}
        speed={500} // Reduced speed for smoother transitions
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img src={pic1} alt="Slide 1" loading="lazy" /> {/* Use lazy loading */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero
            cupiditate, totam et porro sint praesentium ipsam ut corporis.
          </p>
          <h3>Slide 1</h3>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img src={pic2} alt="Slide 2" loading="lazy" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero
            cupiditate, totam et porro sint praesentium ipsam ut corporis.
          </p>
          <h3>Slide 2</h3>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img src={pic3} alt="Slide 3" loading="lazy" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero
            cupiditate, totam et porro sint praesentium ipsam ut corporis.
          </p>
          <h3>Slide 3</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// Wrap the Slider component in React.memo for performance optimization
export default React.memo(Slider);
