import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaHeart } from 'react-icons/fa';

import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductByCategory } from '../../../services/productService';
import { addWishList, getAllWishlist } from '../../../services/wishlistService';
import { CiHeart } from 'react-icons/ci';
import { notification } from 'antd';
import { Cookies } from 'react-cookie';

export default function NewPerfumer() {
  const dispatch = useDispatch();
  const { dataProduct } = useSelector((state) => state.product);
  const { dataWishlist } = useSelector((state) => state.wishList);

  useEffect(() => {
    dispatch(listProductByCategory(3));
  }, []);

  useEffect(() => {
    dispatch(getAllWishlist());
  }, []);

  // Add sản phẩm vào danh sách ưu thích
  const handleAddWishList = (id) => {
    const accessToken = new Cookies().get('accessToken');
    if (!accessToken) {
      notification.error({
        message: 'Thất bại',
        description: 'Bạn chưa đăng nhập. Mời bạn đăng nhập để thêm sản phẩm yêu thích.',
        duration: 1,
      });
      return;
    }
    const checkWish = dataWishlist?.content?.map((wl) => wl.product.id).includes(id);
    if (checkWish) {
      notification.success({
        message: 'Thành công',
        description: 'Xóa thành công danh sách sản phẩm',
        duration: 1,
      });
    } else {
      notification.success({
        message: 'Thành công',
        description: 'Thêm thành công danh sách sản phẩm',
        duration: 1,
      });
    }
    // Gọi API
    dispatch(addWishList(id)).then(() => {
      dispatch(getAllWishlist());
    });
  };

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
            {dataProduct?.data?.content?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="product_item">
                  {/* Nếu ID sản phẩm hiện tại (item.id) có trong danh sách yêu thích (dataWishlist),
                thì hiển thị biểu tượng trái tim màu đỏ (biểu thị sản phẩm đã được yêu thích). và ngược lại */}
                  <div onClick={() => handleAddWishList(item.id)} className="product_withList">
                    {dataWishlist && dataWishlist?.content?.map((wl) => wl.product.id).includes(item.id) ? (
                      <FaHeart size={20} className="text-red-600" />
                    ) : (
                      <CiHeart size={20} />
                    )}
                  </div>
                  <div className="product_free">
                    <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                  </div>
                  <Link
                    to={`/productDetail/${item.id}`}
                    className="product_item-img"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></Link>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <Link to={`/productDetail/${item.id}`} className="product_item-head">
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
