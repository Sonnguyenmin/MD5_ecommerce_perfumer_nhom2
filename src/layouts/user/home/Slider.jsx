import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <section className="slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-item-next',
            prevEl: '.swiper-button-item-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="slider-item-img" src="/vperfume/slide/nicheperfume.webp" alt="Banner 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider-item-img" src="/vperfume/slide/2.webp" alt="Banner 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider-item-img" src="/vperfume/slide/3.webp" alt="Banner 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider-item-img" src="/vperfume/slide/4.webp" alt="Banner 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider-item-img" src="/vperfume/slide/5.webp" alt="Banner 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider-item-img" src="/vperfume/slide/6.webp" alt="Banner 6" />
          </SwiperSlide>

          <div className="swiper-button-item-prev">
            <img src="/fonts/arrow-back-outline.svg" alt="Previous" />
          </div>
          <div className="swiper-button-item-next">
            <img src="/fonts/arrow-forward-outline.svg" alt="Next" />
          </div>
        </Swiper>
      </section>
    </>
  );
}
