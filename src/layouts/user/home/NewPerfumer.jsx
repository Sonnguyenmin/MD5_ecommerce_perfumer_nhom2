import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductByCategory } from "../../../services/productService";

export default function NewPerfumer() {
  const { dataProduct } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductByCategory(3));
  }, []);

  return (
    <>
      {console.log(dataProduct)}
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
              nextEl: ".swiper-new-next",
              prevEl: ".swiper-new-prev",
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
            {dataProduct?.data?.content?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="product_item">
                  <div className="product_withList">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="product_free">
                    <img
                      src="/imgs/sale/newproduct.webp"
                      alt=""
                      className="product_free-img"
                    />
                  </div>
                  <Link
                    href=""
                    className="product_item-img"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></Link>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <Link
                      to={`/productDetail/${item.id}`}
                      className="product_item-head"
                    >
                      {item.productName}
                    </Link>
                    <div className="product_item-price">889.000 ₫</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

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
