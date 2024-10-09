import { Link, useNavigate } from "react-router-dom";
import "./checkout.scss";

import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllCart } from "../../../services/cartService";
import { orderNow } from "../../../services/orderService";
import { notification } from "antd";

export default function CheckOut() {
  const { dataCart } = useSelector((state) => state.carts);
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllCart());
  }, []);
  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    const orderRequest = {
      receiveName: dataCart?.[0]?.users.fullName,
      receiveFullAddress: dataCart?.[0]?.users.address,
      receivePhone: dataCart?.[0]?.users.phone,
      note: note,
    };
    dispatch(orderNow(orderRequest))
      .then((response) => {
        notification.success({message:"thanh toan thanh cong"});
        navigate("/");
      })
      .catch((error) => {
        // Xử lý khi có lỗi xảy ra
        notification.error({message:"Thanh toán thất bại:"});
        // Bạn có thể hiển thị một thông báo lỗi cho người dùng ở đây
      });
      
  };

  return (
    <>
      {console.log(dataCart?.[0]?.users.fullName)}
      <div className="grid wide">
        <div className="breadcrumb apps_content">
          <ul className="breadcrumb_list">
            <li className="breadcrumb_item">
              <ion-icon name="home-outline" />
              <Link href="/home.html" className="breadcrumb_link">
                Trang chủ
              </Link>
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
                      <Link to="/profile" className="checkout-edit">
                        Thay đổi
                      </Link>
                    </header>
                    <div className="checkout-form-content">
                      <div className="checkout-form-fullname">
                        <div className="checkout-form-name">
                          <label className="checkout-form-label" htmlFor="">
                            Họ & Tên
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={dataCart?.[0]?.users.fullName}
                          />
                        </div>
                      </div>
                      <div className="checkout-form-fullname">
                        <div className="checkout-form-name">
                          <label className="checkout-form-label" htmlFor="">
                            Số điện thoại
                          </label>
                          <input
                            type="text"
                            name="telephone"
                            className="form-control"
                            value={dataCart?.[0]?.users.phone}
                          />
                        </div>
                        <div className="checkout-form-name">
                          <label className="checkout-form-label" htmlFor="">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={dataCart?.[0]?.users.email}
                          />
                        </div>
                      </div>

                      <div className="checkout-form-group">
                        <label className="checkout-form-label" htmlFor="">
                          Địa chỉ
                        </label>
                        <input
                          type="text"
                          name="streetName"
                          className="form-control"
                          value={dataCart?.[0]?.users.address}
                        />
                      </div>
                      <div className="checkout-form-group">
                        <label className="checkout-form-label" htmlFor="">
                          Note:
                        </label>
                        <input
                          type="text"
                          name="streetName"
                          className="form-control"
                          value={note}
                          onChange={handleNote}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-wrapper">
                  <div className="checkout-inner">
                    <header className="checkout-product">
                      <h2 className="checkout-product-title">
                        Sản phẩm{" "}
                        <span className="check-product-count">(1)</span>
                      </h2>
                    </header>
                    <table className="checkout-table">
                      <tbody>
                        {dataCart &&
                          dataCart.map((item, index) => (
                            <tr className="checkout-tr" key={index}>
                              <td className="checkout-col">
                                <div className="checkout-info">
                                  <div className="checkout-photo">
                                    <Link
                                      to={`/product/${item.productDetail.product.id}`}
                                      className="checkout-photo-link"
                                    >
                                      <img
                                        src={item.productDetail.image}
                                        alt={
                                          item.productDetail.product.productName
                                        }
                                        className="checkout-photo-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="checkout-details">
                                    <strong className="checkout-details-name">
                                      {item.productDetail.product.productName}
                                    </strong>
                                    <div className="checkout-options">
                                      <div className="checkout-options-group">
                                        <span className="checkout-options-color"></span>
                                      </div>
                                      <div className="checkout-options-group">
                                        <span className="checkout-options-size">
                                          Triết {item.productDetail.volume}ml
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="checkout-col">
                                <span className="checkout-price-span">
                                  {(
                                    item.productDetail.unitPrice *
                                    item.orderQuantity
                                  ).toLocaleString()}{" "}
                                  ₫
                                </span>
                              </td>
                              <td className="checkout-col checkout-qty">
                                <span>Số lượng : {item.orderQuantity}</span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="cols l-5 medium-12 c-12">
                <div className="checkout-wrapper">
                  <div className="checkout-inner">
                    <div className="checkout-change">
                      <h2 className="checkout-change-head">
                        Phương thức vận chuyển
                      </h2>
                    </div>
                    <div className="checkout-desc">
                      Cập nhật thông tin giao hàng để xem chi phí và thời gian
                      giao hàng.
                    </div>
                  </div>
                </div>
                <div className="checkout-wrapper">
                  <div className="checkout-inner">
                    <div className="checkout-detail">
                      <h2 className="checkout-detail-title">
                        Chi tiết đơn hàng
                      </h2>
                    </div>
                    <div className="checkout-detail-content">
                      <div className="checkout-detail-group">
                        <div className="checkout-detail-list">
                          Giá trị đơn hàng
                        </div>
                        <div className="checkout-detail-price">
                          {dataCart &&
                            dataCart
                              .reduce(
                                (acc, item) =>
                                  acc +
                                  item.productDetail.unitPrice *
                                    item.orderQuantity,
                                0
                              )
                              .toLocaleString()}{" "}
                          ₫
                        </div>
                      </div>
                      <div className="checkout-detail-group">
                        <div className="grand-totals">Tổng tiền thanh toán</div>
                        <div className="total-amount">
                          {dataCart &&
                            dataCart
                              .reduce(
                                (acc, item) =>
                                  acc +
                                  item.productDetail.unitPrice *
                                    item.orderQuantity,
                                0
                              )
                              .toLocaleString()}{" "}
                          ₫
                        </div>
                      </div>
                      <div className="checkout-bottom-btn">
                        <button
                          className="checkout-bottom-check"
                          onClick={handleCheckout}
                        >
                          Thanh toán
                        </button>
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
