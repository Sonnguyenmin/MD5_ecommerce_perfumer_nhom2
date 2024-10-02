import React from 'react';

export default function CartHeader() {
  return (
    <>
      <div className="h_cart-icon ">
        <label htmlFor="h_cart-check" className="h_cart-group">
          <span>Giỏ hàng</span>
          <span className="cart_count">0</span>
        </label>
        <input type="checkbox" hidden className="h_cart-input" id="h_cart-check" />
        <label htmlFor="h_cart-check" className="h_blockcart-overlay" />
        <div className="h_blockcart-content">
          <header className="h_blockcart-no--header">
            <h3 className="h_blockcart-no--head">Giỏ hàng</h3>
            <label className="h_blockcart-no-icon" htmlFor="h_cart-check">
              <ion-icon name="close-circle-outline" />
            </label>
          </header>
          {/* <section className="h_blockcart-no-wrap">
                      <div className="h_blockcart-no-img">
                        <img src="/public/imgs/sale/cart-empty.png" alt="" />
                      </div>
                      <p className="h_blockcart-no-item">Hiện chưa có sản phẩm trong giỏ</p>
                    </section> */}
          {/*  */}
          <section className="h_blockcart-wrap">
            <ul className="h_blockcart-list">
              <li className="h_blockcart-item">
                <div className="h_blockcart-inner">
                  <a href="" className="h_blockcart-inner--img">
                    <img src="/public/imgs/Áo_nữ/vaynu01.webp" alt="" />
                  </a>
                  <div className="h_blockcart-inner--content">
                    <div className="h_blockcart-inner--title">
                      <h5 className="h_blockcart-inner-head">Váy liên bé nữ</h5>
                      <div className="h_blockcart-inner-close">
                        <ion-icon name="trash-outline" />
                      </div>
                    </div>
                    <div className="h_blockcart-inner--options">
                      <div className="h_blockcart-inner--select">
                        <span className="h_blockcart-inner--id blockcart-separate">Chiết 10ml</span>
                      </div>
                    </div>
                    <div className="h_blockcart-inner--total">
                      <div className="h_blockcart-inner--price">349.000 ₫</div>
                      <div className="h_blockcart-inner--qty">
                        <button className="h_blockcart-inner-minus">
                          <ion-icon name="remove-outline" />
                        </button>
                        <input type="text" className="h_blockcart-inner--input" defaultValue={1} />
                        <button className="h_blockcart-inner-plus">
                          <ion-icon name="add-outline" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <footer className="h_blockcart-bottom">
            <div className="h_blockcart-bottom-total">
              <h4 className="h_blockcart-bottom-head">Tạm tính</h4>
              <div className="h_blockcart-bottom-price">1.947.000 ₫</div>
            </div>
            <div className="h_blockcart-bottom-btn">
              <button className="h_blockcart-bottom-check">Thanh toán</button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
