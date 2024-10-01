import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function NewPerfumer() {
  return (
    <>
      <section className="colections apps_content">
        <div className="grid wide">
          <div className="colection_wrapper">
            <h2 className="colection_head">Nước hoa mới</h2>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={12}
            freeMode={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-new-next',
              prevEl: '.swiper-new-prev',
            }}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 2 },
              320: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {/* Thêm các SwiperSlide như sau */}
            <SwiperSlide>
              <div className="product_item">
                <div className="product_withList">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="product_free">
                  <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                </div>
                <Link
                  href=""
                  className="product_item-img"
                  style={{ backgroundImage: 'url(/vperfume/nuochoanam/1.jpg)' }}
                ></Link>
                <div className="product_item-tocart">
                  <span>Thêm nhanh vào giỏ</span>
                </div>
                <div className="product_opsions">
                  <a href="/productDetails.html" className="product_item-head">
                    Váy liền nữ
                  </a>
                  <div className="product_item-price">889.000 ₫</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_item">
                <div className="product_withList">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="product_free">
                  <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                </div>
                <Link
                  href=""
                  className="product_item-img"
                  style={{ backgroundImage: 'url(/vperfume/nuochoachiet/3.jpg)' }}
                ></Link>
                <div className="product_item-tocart">
                  <span>Thêm nhanh vào giỏ</span>
                </div>
                <div className="product_opsions">
                  <a href="/productDetails.html" className="product_item-head">
                    Váy liền nữ
                  </a>
                  <div className="product_item-price">889.000 ₫</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_item">
                <div className="product_withList">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="product_free">
                  <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                </div>
                <Link
                  href=""
                  className="product_item-img"
                  style={{ backgroundImage: 'url(/vperfume/nuochoaniche/1.jpg)' }}
                ></Link>
                <div className="product_item-tocart">
                  <span>Thêm nhanh vào giỏ</span>
                </div>
                <div className="product_opsions">
                  <a href="/productDetails.html" className="product_item-head">
                    Váy liền nữ
                  </a>
                  <div className="product_item-price">889.000 ₫</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_item">
                <div className="product_withList">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="product_free">
                  <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                </div>
                <Link
                  href=""
                  className="product_item-img"
                  style={{ backgroundImage: 'url(/vperfume/nuochoaunisex/2.jpg)' }}
                ></Link>
                <div className="product_item-tocart">
                  <span>Thêm nhanh vào giỏ</span>
                </div>
                <div className="product_opsions">
                  <a href="/productDetails.html" className="product_item-head">
                    Váy liền nữ
                  </a>
                  <div className="product_item-price">889.000 ₫</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_item">
                <div className="product_withList">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="product_free">
                  <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                </div>
                <Link
                  href=""
                  className="product_item-img"
                  style={{ backgroundImage: 'url(/vperfume/nuochoanam/7.jpg)' }}
                ></Link>
                <div className="product_item-tocart">
                  <span>Thêm nhanh vào giỏ</span>
                </div>
                <div className="product_opsions">
                  <a href="/productDetails.html" className="product_item-head">
                    Váy liền nữ
                  </a>
                  <div className="product_item-price">889.000 ₫</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_item">
                <div className="product_withList">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="product_free">
                  <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                </div>
                <Link
                  href=""
                  className="product_item-img"
                  style={{ backgroundImage: 'url(/vperfume/nuochoanu/5.jpg)' }}
                ></Link>
                <div className="product_item-tocart">
                  <span>Thêm nhanh vào giỏ</span>
                </div>
                <div className="product_opsions">
                  <a href="/productDetails.html" className="product_item-head">
                    Váy liền nữ
                  </a>
                  <div className="product_item-price">889.000 ₫</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_item">
                <div className="product_withList">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="product_free">
                  <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                </div>
                <Link
                  href=""
                  className="product_item-img"
                  style={{ backgroundImage: 'url(/vperfume/nuochoachiet/8.jpg)' }}
                ></Link>
                <div className="product_item-tocart">
                  <span>Thêm nhanh vào giỏ</span>
                </div>
                <div className="product_opsions">
                  <a href="/productDetails.html" className="product_item-head">
                    Váy liền nữ
                  </a>
                  <div className="product_item-price">889.000 ₫</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_item">
                <div className="product_withList">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="product_free">
                  <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                </div>
                <Link
                  href=""
                  className="product_item-img"
                  style={{ backgroundImage: 'url(/vperfume/nuochoanu/3.jpg)' }}
                ></Link>
                <div className="product_item-tocart">
                  <span>Thêm nhanh vào giỏ</span>
                </div>
                <div className="product_opsions">
                  <a href="/productDetails.html" className="product_item-head">
                    Váy liền nữ
                  </a>
                  <div className="product_item-price">889.000 ₫</div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-new-prev">
              <img src="/fonts/arrow-back-outline.svg" alt="Previous" />
            </div>
            <div className="swiper-new-next">
              <img src="/fonts/arrow-forward-outline.svg" alt="Next" />
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
