import { useState } from 'react';
import './productDetail.scss';
import SliderDetail from '../../../layouts/user/detail/SliderDetail';

export default function ProductDetails() {
  const [visible, setVisible] = useState({});

  const toggleVisibility = (key) => {
    setVisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const [currentImage, setCurrentImage] = useState(1); // Bắt đầu với hình ảnh đầu tiên

  return (
    <>
      <div className="grid wide">
        <div className="breadcrumb apps_content">
          <ul className="breadcrumb_list">
            <li className="breadcrumb_item">
              <ion-icon name="home-outline" />
              <a href="/home.html" className="breadcrumb_link">
                Trang chủ
              </a>
            </li>
            <li className="breadcrumb_item">
              <a href="" className="breadcrumb_link">
                Nữ
              </a>
            </li>
            <li className="breadcrumb_item">
              <a href="" className="breadcrumb_link">
                Chống nắng
              </a>
            </li>
            <li className="breadcrumb_item">
              <strong>Áo khoác chống nắng</strong>
            </li>
          </ul>
        </div>
        <div className="product-details apps_content">
          <div className="rows sm-gutter">
            <div className="cols l-7 medium-12 c-12">
              <SliderDetail />
            </div>

            <div className="cols l-5 medium-12 c-12">
              <div className="product-details-right">
                <div className="product-details-title">
                  <div className="product-details-group">
                    <h2 className="product-details-title-head">Áo phông unisex trẻ em có hình in</h2>
                    <div className="product-details-code">
                      Mã sp: <span className="prodruct-code-value"> 60T24S002</span>
                    </div>
                    <div className="flex items-center my-[16px] flex-wrap gap-2">
                      <div className="text-[1.4rem]">
                        Thương hiệu:{' '}
                        <span className="text-[var(--primary-user-color)] text-[1.4rem] font-medium mr-3">Afnan</span>|
                      </div>
                      <div className="text-[1.4rem] mx-3">
                        Giới tính:{' '}
                        <span className="text-[var(--primary-user-color)] text-[1.4rem] font-medium mr-3">Nữ</span>|
                      </div>
                      <div className="flex items-center text-[1.4rem]">
                        (<p className="mr-2">12</p> Đánh giá)
                        <div className="rating-active ml-3">
                          <input defaultValue={5} name="rate" id="star5" type="radio" />
                          <label title="text" htmlFor="star5" />
                          <input defaultValue={4} name="rate" id="star4" type="radio" />
                          <label title="text" htmlFor="star4" />
                          <input defaultValue={3} name="rate" id="star3" type="radio" defaultChecked="" />
                          <label title="text" htmlFor="star3" />
                          <input defaultValue={2} name="rate" id="star2" type="radio" />
                          <label title="text" htmlFor="star2" />
                          <input defaultValue={1} name="rate" id="star1" type="radio" />
                          <label title="text" htmlFor="star1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="product-details-title-heart" />
                </div>

                <div className="product-details-price">
                  <div className="price-before">
                    <div className="price-after">449.100 ₫</div>
                    <span className="price-cost">499.000 ₫</span>
                    <span className="price-percent">
                      Tiết kiệm <p className="ml-1">10%</p>
                    </span>
                  </div>
                </div>
                <div className="product-swatch-options">
                  <div className="product-swatch-attribute">
                    <span className="attribute-size">Dung tích:</span>
                    <div className="swatch-size-inner">
                      <div className="swatch-size-item active-capacity">
                        <div className="flex items-center text-[1.1rem] font-medium my-1">
                          <ion-icon name="checkmark-circle-outline"></ion-icon>
                          <p className="ml-2">Chiết 10ml</p>
                        </div>
                        <div className="text-[1.4rem] font-semibold my-1">1500000</div>
                      </div>
                    </div>
                    <div className="swatch-size-inner">
                      <div className="swatch-size-item ">
                        <div className="flex items-center text-[1.1rem] font-medium my-1">
                          <ion-icon name="checkmark-circle-outline"></ion-icon>
                          <p className="ml-2">Chiết 10ml</p>
                        </div>
                        <div className="text-[1.4rem] font-semibold my-1">1500000</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-5 text-[1.5rem] font-semibold">Số lượng: </div>
                    <div className="swatch-inner--qty">
                      <button className="swatch-inner-minus">
                        <ion-icon name="remove-outline" />
                      </button>
                      <input type="text" className="swatch-inner--input" defaultValue={1} />
                      <button className="swatch-inner-plus">
                        <ion-icon name="add-outline" />
                      </button>
                    </div>
                  </div>
                  <div className="product-swatch-btn">
                    <button className="product-swatch-bottom-check">Thêm vào giỏ hàng</button>
                  </div>
                </div>
                <div className="product-details-desc">
                  <div className="details-desc-wrap" onClick={() => toggleVisibility('description')}>
                    <div className={visible.description ? 'details-desc-list action' : 'details-desc-list'}>Mô tả</div>
                    {visible.description && (
                      <div className="details-desc-content">
                        Áo khoác chống nắng chất liệu polyester, có mũ, kéo khoá, túi 2 bên. Chất liệu co dãn thoải mái
                        khi mặc.
                        <br />
                        Nguyên liệu mềm mại thoáng mát, chống tia UV bảo vệ làn da dưới nắng.
                      </div>
                    )}
                  </div>

                  <div className="details-desc-wrap" onClick={() => toggleVisibility('material')}>
                    <div className={visible.material ? 'details-desc-list action' : 'details-desc-list'}>Chất liệu</div>
                    {visible.material && <div className="details-desc-content">94% polyester 6% spandex.</div>}
                  </div>

                  <div className="details-desc-wrap" onClick={() => toggleVisibility('instructions')}>
                    <div className={visible.instructions ? 'details-desc-list action' : 'details-desc-list'}>
                      Hướng dẫn sử dụng
                    </div>
                    {visible.instructions && (
                      <div className="details-desc-content">
                        Giặt máy ở chế độ nhẹ, nhiệt độ thường.
                        <br />
                        Không sử dụng chất tẩy.
                        <br />
                        Phơi trong bóng mát.
                        <br />
                        Sấy khô ở nhiệt độ thấp.
                        <br />
                        Là ở nhiệt độ thấp 110 độ C.
                        <br />
                        Giặt với sản phẩm cùng màu.
                        <br />
                        Không là lên chi tiết trang trí.
                        <br />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* payment  */}
        <section className="payment-pages apps_content">
          <div className="grid wide ">
            <div className="payment_wrapper ">
              <div className="payment_inner">
                <div className="payment_img img_delivery"></div>
                <div className="payment_item">
                  <h3 className="payment_head">Thanh toán khi nhận hàng (COD)</h3>
                  <span className="payment_desc">Giao hàng toàn quốc</span>
                </div>
              </div>
              <div className="payment_inner">
                <div className="payment_img img_free"></div>
                <div className="payment_item">
                  <h3 className="payment_head">Miễn phí giao hàng</h3>
                  <span className="payment_desc">Với đơn hàng trên 599.000đ</span>
                </div>
              </div>
              <div className="payment_inner">
                <div className="payment_img img_change"></div>
                <div className="payment_item">
                  <h3 className="payment_head">Đơn hàng miễn phí</h3>
                  <span className="payment_desc">Trong 30 ngày kể từ ngày mua.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end payment */}
        {/* sunscreen */}
        <section className="related_products apps_content">
          <div className="related_products_wrapper">
            <h2 className="related_products_head">Sản phẩm liên quan</h2>
          </div>
          <div className="product">
            <div className="rows sm-gutter">
              <div className="cols l-3 medium-6 c-6">
                <div href="" className="product_item ">
                  <div className="product_withList">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="product_free">
                    <img src="/imgs/sale/freeship.webp" alt="" className="product_free-img" />
                  </div>
                  <a
                    href=""
                    className="product_item-img"
                    style={{
                      backgroundImage: 'url(/vperfume/nuochoanam/3.jpg)',
                    }}
                  ></a>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <a href="" className="product_item-head">
                      Áo khoác chống nắng nam
                    </a>
                    <div className="product_item-price">549.000 ₫</div>
                  </div>
                </div>
              </div>
              <div className="cols l-3 medium-6 c-6">
                <div href="" className="product_item ">
                  <div className="product_withList">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="product_free">
                    <img src="/imgs/sale/freeship.webp" alt="" className="product_free-img" />
                  </div>
                  <a
                    href=""
                    className="product_item-img"
                    style={{
                      backgroundImage: 'url(/vperfume/nuochoanam/3.jpg)',
                    }}
                  ></a>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <a href="" className="product_item-head">
                      Áo khoác chống nắng nam
                    </a>
                    <div className="product_item-price">549.000 ₫</div>
                  </div>
                </div>
              </div>
              <div className="cols l-3 medium-6 c-6">
                <div href="" className="product_item ">
                  <div className="product_withList">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="product_free">
                    <img src="/imgs/sale/freeship.webp" alt="" className="product_free-img" />
                  </div>
                  <a
                    href=""
                    className="product_item-img"
                    style={{
                      backgroundImage: 'url(/vperfume/nuochoanam/3.jpg)',
                    }}
                  ></a>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <a href="" className="product_item-head">
                      Áo khoác chống nắng nam
                    </a>
                    <div className="product_item-price">549.000 ₫</div>
                  </div>
                </div>
              </div>
              <div className="cols l-3 medium-6 c-6">
                <div href="" className="product_item ">
                  <div className="product_withList">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div className="product_free">
                    <img src="/imgs/sale/freeship.webp" alt="" className="product_free-img" />
                  </div>
                  <a
                    href=""
                    className="product_item-img"
                    style={{
                      backgroundImage: 'url(/vperfume/nuochoanam/3.jpg)',
                    }}
                  ></a>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <a href="" className="product_item-head">
                      Áo khoác chống nắng nam
                    </a>
                    <div className="product_item-price">549.000 ₫</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end sunscreen */}
      </div>
    </>
  );
}
