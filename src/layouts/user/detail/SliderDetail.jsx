import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Pagination, Navigation, Thumbs } from 'swiper/modules';

export default function SliderDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="sliderContainer">
      {/* Main Swiper */}
      <Swiper
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // }}
        loop={true}
        spaceBetween={10}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-new-next',
          prevEl: '.swiper-new-prev',
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mainSwiper"
      >
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/3.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/4.jpg" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/5.jpg" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/6.jpg" alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/7.jpg" alt="Slide 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/8.jpg" alt="Slide 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/9.jpg" alt="Slide 9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/10.jpg" alt="Slide 10" />
        </SwiperSlide>
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
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/1.jpg" alt="Thumbnail 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/2.jpg" alt="Thumbnail 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/3.jpg" alt="Thumbnail 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/4.jpg" alt="Thumbnail 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/5.jpg" alt="Thumbnail 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/6.jpg" alt="Thumbnail 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/7.jpg" alt="Thumbnail 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/8.jpg" alt="Thumbnail 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/9.jpg" alt="Thumbnail 9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/vperfume/nuochoanam/10.jpg" alt="Thumbnail 10" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
