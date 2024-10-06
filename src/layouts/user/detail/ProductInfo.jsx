import React from 'react';

export default function ProductInfo({ toggleVisibility, visible }) {
  return (
    <>
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
                Giới tính: <span className="text-[var(--primary-user-color)] text-[1.4rem] font-medium mr-3">Nữ</span>|
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
          {/* <div className="details-desc-wrap" onClick={() => toggleVisibility('description')}>
            <div className={visible.description ? 'details-desc-list action' : 'details-desc-list'}>Mô tả</div>
            {visible.description && (
              <div className="details-desc-content">
                Áo khoác chống nắng chất liệu polyester, có mũ, kéo khoá, túi 2 bên. Chất liệu co dãn thoải mái khi mặc.
                <br />
                Nguyên liệu mềm mại thoáng mát, chống tia UV bảo vệ làn da dưới nắng.
              </div>
            )}
          </div> */}

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
    </>
  );
}
