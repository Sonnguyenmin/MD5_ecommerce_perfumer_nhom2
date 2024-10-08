import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Pagination, Navigation, Thumbs } from 'swiper/modules';

export default function SliderDetail({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // useEffect(() => {
  //   if (product) {
  //     setThumbsSwiper(product.content.map((item) => item.image));
  //   }
  // }, [product]);

  return (
    <div className="sliderContainer">
      {/* Main Swiper */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }} // Kết nối với thumbsSwiper
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-new-next',
          prevEl: '.swiper-new-prev',
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mainSwiper"
      >
        {product &&
          product?.content
            .map((item) => item.image)
            .map((item) => (
              <SwiperSlide>
                <img src={item} alt="Slide 1" />
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
        {product &&
          product?.content
            .map((item) => item.image)
            .map((item) => (
              <SwiperSlide>
                <img src={item} alt="Slide 1" />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
