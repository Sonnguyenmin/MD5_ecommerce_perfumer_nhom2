import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { FreeMode, Pagination, Navigation, Thumbs } from "swiper/modules";

export default function SliderDetail({ listProductDetail }) {
  // console.log(listProductDetail?.content[0]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = listProductDetail?.content.map((item) => item.image) || [];

  return (
    <div className="sliderContainer">
      {/* Main Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }} // Kết nối với thumbsSwiper
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-new-next",
          prevEl: ".swiper-new-prev",
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mainSwiper"
      >
        {listProductDetail?.content[0].images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}

        <div className="swiper-new-prev">
          <img src="/fonts/chevron-back-outline.svg" alt="Previous" />
        </div>
        <div className="swiper-new-next">
          <img src="/fonts/chevron-right-outline.svg" alt="Next" />
        </div>
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbsSwiper"
      >
        {listProductDetail?.content[0].images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="object-cover"
              src={item}
              alt={`Thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
