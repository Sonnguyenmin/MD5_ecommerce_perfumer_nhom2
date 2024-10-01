import './checkout.scss';

import React from 'react';

export default function CheckOut() {
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
              <strong>Checkout</strong>
            </li>
          </ul>
        </div>
        <div className="product-details apps_content">
          <ul className="checkout-progress-bar">
            <li className="checkout-progress-item black">
              <span className="checkout-step">1</span>
              <span>Giỏ hàng</span>
            </li>
            <li className="checkout-progress-item current">
              <span className="checkout-step">2</span>
              <span>Đặt hàng</span>
            </li>
            <li className="checkout-progress-item">
              <span className="checkout-step">3</span>
              <span>Hoàn tất</span>
            </li>
          </ul>
          <div className="checkout-container">
            <div className="rows sm-gutter">
              <div className="cols l-7 medium-12 c-12">
                <div className="checkout-wrapper">
                  <div className="checkout-inner">
                    <header className="checkout-header">
                      <h2 className="checkout-title">Thông tin giao hàng</h2>
                      <a href="" className="checkout-edit">
                        Thay đổi
                      </a>
                    </header>
                    <div className="checkout-form-content">
                      <div className="checkout-form-fullname">
                        <div className="checkout-form-name">
                          <label className="checkout-form-label" htmlFor="">
                            Họ
                          </label>
                          <input type="text" name="firstName" className="form-control" />
                        </div>
                        <div className="checkout-form-name">
                          <label className="checkout-form-label" htmlFor="">
                            Tên
                          </label>
                          <input type="text" name="lastName" className="form-control" />
                        </div>
                      </div>
                      <div className="checkout-form-fullname">
                        <div className="checkout-form-name">
                          <label className="checkout-form-label" htmlFor="">
                            Số điện thoại
                          </label>
                          <input type="text" name="telephone" className="form-control" />
                        </div>
                        <div className="checkout-form-name">
                          <label className="checkout-form-label" htmlFor="">
                            Email
                          </label>
                          <input type="email" name="email" className="form-control" />
                        </div>
                      </div>
                      <div className="checkout-form-group">
                        <label className="checkout-form-label" htmlFor="">
                          Tỉnh / Thành Phố
                        </label>
                        <select name="" className="form-control">
                          <option value="" />
                        </select>
                      </div>
                      <div className="checkout-form-group">
                        <label className="checkout-form-label" htmlFor="">
                          Quận / Huyện
                        </label>
                        <select name="" className="form-control">
                          <option value="" />
                        </select>
                      </div>
                      <div className="checkout-form-group">
                        <label className="checkout-form-label" htmlFor="">
                          Phường / Xã
                        </label>
                        <select name="" className="form-control">
                          <option value="" />
                        </select>
                      </div>
                      <div className="checkout-form-group">
                        <label className="checkout-form-label" htmlFor="">
                          Nhập địa chỉ
                        </label>
                        <input type="text" name="streetName" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-wrapper">
                  <div className="checkout-inner">
                    <header className="checkout-product">
                      <h2 className="checkout-product-title">
                        Sản phẩm <span className="check-product-count">(1)</span>
                      </h2>
                    </header>
                    <table className="checkout-table">
                      <tbody>
                        <tr className="checkout-tr">
                          <td className="checkout-col">
                            <div className="checkout-info">
                              <div className="checkout-photo">
                                <a href="" className="checkout-photo-link">
                                  <img src="vperfume/nuochoanu/1.jpg" alt="" className="checkout-photo-img" />
                                </a>
                              </div>
                              <div className="checkout-details">
                                <strong className="checkout-details-name">Váy liên bé gái</strong>
                                <div className="checkout-options">
                                  <div className="checkout-options-group">
                                    <span className="checkout-options-color"></span>
                                  </div>
                                  <div className="checkout-options-group">
                                    <span className="checkout-options-size">Triết 10ml</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="checkout-col">
                            <span className="checkout-price-span">399.000 ₫</span>
                          </td>
                          <td className="checkout-col checkout-qty">
                            <span>Số lượng : 2</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="cols l-5 medium-12 c-12">
                <div className="checkout-wrapper">
                  <div className="checkout-inner">
                    <div className="checkout-change">
                      <h2 className="checkout-change-head">Phương thức vận chuyển</h2>
                    </div>
                    <div className="checkout-desc">
                      Cập nhật thông tin giao hàng để xem chi phí và thời gian giao hàng.
                    </div>
                  </div>
                </div>
                <div className="checkout-wrapper">
                  <div className="checkout-inner">
                    <div className="checkout-change checkout-payment">
                      <h2 className="checkout-change-head">Phương thức thanh toán</h2>
                    </div>
                    <div className="payment-content">
                      <div className="payment-content-form">
                        <label htmlFor="cashondelivery" className="payment-content-label">
                          <input
                            id="cashondelivery"
                            type="radio"
                            defaultValue="cashondelivery"
                            className="payment-content-input"
                          />
                          <span className="payment-content-card">
                            <b>Thanh toán Khi nhận hàng</b>
                            <img src="/fonts/money-outline.svg" alt="" />
                          </span>
                        </label>
                      </div>
                      <div className="payment-content-form">
                        <label htmlFor="vnpay" className="payment-content-label">
                          <input id="vnpay" type="radio" defaultValue="vnpay" className="payment-content-input" />
                          <span className="payment-content-card">
                            <b>Thanh toán bằng VNpay</b>
                            <img src="/fonts/vnpay-outline.svg" alt="" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-wrapper">
                  <div className="checkout-inner">
                    <div className="checkout-detail">
                      <h2 className="checkout-detail-title">Chi tiết đơn hàng</h2>
                    </div>
                    <div className="checkout-detail-content">
                      <div className="checkout-detail-group">
                        <div className="checkout-detail-list">Giá trị đơn hàng</div>
                        <div className="checkout-detail-price">1.297.000 ₫</div>
                      </div>
                      <div className="checkout-detail-group">
                        <div className="grand-totals">Tổng tiền thanh toán</div>
                        <div className="total-amount">1.297.000 ₫</div>
                      </div>
                      <div className="checkout-bottom-btn">
                        <button className="checkout-bottom-check">Thanh toán</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
