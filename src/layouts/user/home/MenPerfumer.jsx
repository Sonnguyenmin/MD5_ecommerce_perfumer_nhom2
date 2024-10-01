import React from 'react';
import { Link } from 'react-router-dom';

export default function MenPerfumer() {
  return (
    <>
      <section className="suncreen apps_content">
        <div className="grid wide">
          <div className="suncreen_wrapper">
            <h2 className="suncreen_head">Nước hoa nam</h2>
            <a href="" className="suncreen_slider">
              <img src="/vperfume/slide/nicheperfume.webp" alt="" className="suncreen_slider" />
            </a>
          </div>
          <div className="product">
            <div className="rows sm-gutter">
              <div className="cols l-3 medium-6 c-6">
                <div className="product_item">
                  <div className="product_withList">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="product_free">
                    <img src="/imgs/sale/freeship.webp" alt="" className="product_free-img" />
                  </div>
                  <a
                    href="/productDetails.html"
                    className="product_item-img"
                    style={{ backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)' }}
                  ></a>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <a href="/productDetails.html" className="product_item-head">
                      Áo khoác chống nắng nam
                    </a>
                    <div className="product_item-price">549.000 ₫</div>
                  </div>
                </div>
              </div>
              <div className="cols l-3 medium-6 c-6">
                <div className="product_item">
                  <div className="product_withList">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="product_free">
                    <img src="/imgs/sale/freeship.webp" alt="" className="product_free-img" />
                  </div>
                  <a
                    href="/productDetails.html"
                    className="product_item-img"
                    style={{ backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)' }}
                  ></a>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <a href="/productDetails.html" className="product_item-head">
                      Áo khoác chống nắng nam
                    </a>
                    <div className="product_item-price">549.000 ₫</div>
                  </div>
                </div>
              </div>
              <div className="cols l-3 medium-6 c-6">
                <div className="product_item">
                  <div className="product_withList">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="product_free">
                    <img src="/imgs/sale/freeship.webp" alt="" className="product_free-img" />
                  </div>
                  <a
                    href="/productDetails.html"
                    className="product_item-img"
                    style={{ backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)' }}
                  ></a>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <a href="/productDetails.html" className="product_item-head">
                      Áo khoác chống nắng nam
                    </a>
                    <div className="product_item-price">549.000 ₫</div>
                  </div>
                </div>
              </div>
              <div className="cols l-3 medium-6 c-6">
                <div className="product_item">
                  <div className="product_withList">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="product_free">
                    <img src="/imgs/sale/freeship.webp" alt="" className="product_free-img" />
                  </div>
                  <a
                    href="/productDetails.html"
                    className="product_item-img"
                    style={{ backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)' }}
                  ></a>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <a href="/productDetails.html" className="product_item-head">
                      Áo khoác chống nắng nam
                    </a>
                    <div className="product_item-price">549.000 ₫</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_move">
              <button className="btn btn-white">Xem tất cả</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
