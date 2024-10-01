import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function HeaderLayout() {
  return (
    <>
      <>
        {/* Header */}
        <header className="h ">
          <div className="grid wide">
            <div className="h_content apps_content">
              {/* logo */}
              <div className="h_logo">
                <Link href="" className="h_logo-link">
                  <img src="/SQ_logo.png" alt="" className="h_logo-img" />
                </Link>
              </div>
              {/* ----------- */}
              {/* Thanh điều hướng */}
              <nav className="h_with-link">
                <ul className="h_nav-list">
                  <li className="h_nav-item">
                    <NavLink href="" className="h_nav-link">
                      nước hoa mới
                    </NavLink>
                  </li>
                  <li className="h_nav-item">
                    <NavLink href="" className="h_nav-link">
                      nam
                    </NavLink>
                  </li>
                  <li className="h_nav-item">
                    <NavLink href="" className="h_nav-link">
                      nữ
                    </NavLink>
                    <div className="submenu-content">
                      <div className="submenu-wrap">
                        <div className="sub_content-left">
                          <ul className="submenu-list">
                            <li className="submenu-item ">
                              <a href="" className="submenu-link submenu-title">
                                Áo
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="" className="submenu-link">
                                Áo Phông
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="" className="submenu-link">
                                Áo polo
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="" className="submenu-link">
                                Áo ba lô
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="" className="submenu-link">
                                Áo kiểu
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="" className="submenu-link">
                                Áo sơ mi
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="" className="submenu-link">
                                Áo phông dài tay
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="" className="submenu-link">
                                Áo len
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="" className="submenu-link">
                                Áo nỉ
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="" className="submenu-link">
                                Áo nỉ có mũ
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="sub_content-right">
                          <a href="" className="sub-right-link">
                            Sản phẩm mới
                          </a>
                          <a href="" className="sub-right-link">
                            BST Gia đình
                          </a>
                          <a href="" className="sub-right-link">
                            BST info yourself
                          </a>
                          <div className="sub-right-img"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="h_nav-item">
                    <NavLink href="" className="h_nav-link">
                      unisex
                    </NavLink>
                  </li>
                  <li className="h_nav-item">
                    <NavLink href="" className="h_nav-link">
                      niche
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <ul className=" h_sort-list">
                <li className="h_sort-item ">
                  <NavLink href="" className="h_sort-link ">
                    Nước hoa mới
                  </NavLink>
                </li>
                <li className="h_sort-item">
                  <NavLink href="" className="h_sort-link">
                    Nam
                  </NavLink>
                </li>
                <li className="h_sort-item">
                  <NavLink href="/UI/assets/pages/manProduct.html" className="h_sort-link">
                    Nữ
                  </NavLink>
                </li>
                <li className="h_sort-item">
                  <NavLink href="" className="h_sort-link">
                    Unisex
                  </NavLink>
                </li>
                <li className="h_sort-item">
                  <NavLink href="" className="h_sort-link">
                    Niche
                  </NavLink>
                </li>
              </ul>
              {/* Thanh Tìm kiếm */}
              <div className="h_search">
                <input type="checkbox" hidden id="mobile-search-checkbox" className="h_search-checkbox" />
                <div className="h_search-wrapper">
                  <button className="h_search-btn"></button>
                  <input type="text" className="h_search-input" placeholder="Tìm kiếm" />
                  <div className="h_search-btn-icon">
                    <ion-icon name="close-circle-outline" />
                  </div>
                  <div className="h_search-history">
                    <h3 className="h_search-history-heading">Lịch sử tìm kiếm</h3>
                    <ul className="h_search-history-list">
                      <li className="h_search-history-item">
                        <a href="" className="h_search-history-link">
                          Áo khoác nam
                        </a>
                      </li>
                      <li className="h_search-history-item">
                        <a href="" className="h_search-history-link">
                          Áo khoác nữ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ------------- */}
              {/* Thanh cửa hàng */}
              <div className="h_group-icon">
                <label htmlFor="mobile-search-checkbox" className="h_search-icon">
                  <span>Tìm kiếm</span>
                </label>
                <Link to="/newspaper" className="h_store-icon">
                  <span>Tin tức</span>
                </Link>
                <div className="h_account-icon">
                  <span>Tài khoản</span>
                </div>
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
                                  <div
                                    className="h_blockcart-inner--color"
                                    style={{
                                      backgroundImage: 'url(/public/imgs/color_options/sm164.webp)',
                                    }}
                                  ></div>
                                  <span className="h_blockcart-inner--id blockcart-separate">PG113</span>
                                </div>
                                <div className="h_blockcart-inner--value">
                                  <span>XL</span>
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
              </div>
              {/* ----------------- */}
            </div>
          </div>
        </header>
        {/* The end */}
      </>
    </>
  );
}
