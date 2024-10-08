import React, { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { listBanner } from '../../../services/bannerService';

export default function Slider() {
  const { data } = useSelector((state) => state.banner);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listBanner());
  }, []);
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
          {data?.map((banner, index) => {
            return (
              <SwiperSlide key={banner.id}>
                <img className="slider-item-img" src={banner.urlImage} alt="Banner 1" />
              </SwiperSlide>
            );
          })}

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
