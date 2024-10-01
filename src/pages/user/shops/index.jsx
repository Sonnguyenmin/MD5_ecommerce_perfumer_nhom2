import './shops.scss';

export default function Shops() {
  return (
    <>
      <section className="banner">
        <div className="banner_img">
          <img src="/vperfume/slide/banner.jpg" alt="" />
        </div>
      </section>
      <section className="newproduct-content">
        <div className="grid wide">
          <header className="newproduct-heading">
            <ul className="newproduct_list">
              <li className="newproduct_item active">
                <span>Tất cả </span>
              </li>
              <li className="newproduct_item">
                <span>Nam</span>
              </li>
              <li className="newproduct_item">
                <span>Nữ</span>
              </li>
              <li className="newproduct_item">
                <span>Unisex</span>
              </li>
              <li className="newproduct_item">
                <span>Niche</span>
              </li>
            </ul>
          </header>
          <div className="filter-wrapper">
            <div className="filter-left">
              Bộ lọc:
              <div className="price-range">
                <div className="price-range-group">
                  <span className="price-range-title">
                    Khoảng giá
                    <b className="price-range-options" />
                  </span>
                </div>
                <div className="price-range-wrap">
                  <div className="price-range-inner">
                    <div className="price-range-track">
                      <span className="price-range-value max">69.000đ</span>
                      <span className="price-range-value min">799.000đ</span>
                      <div className="track" />
                      <div className="price-range-track-highlight" />
                      <button className="track-dot track1" />
                      <button className="track-dot track2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-size">
                <div className="product-size-group">
                  <span className="product-size-title">
                    Dung tích
                    <b className="product-size-options" />
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-sortedby">
              <div className="filter-sortedby-option">
                Sắp xếp theo
                <div className="filter-sortedby-group">
                  <ul className="sortedby-group-list">
                    <li className="sortedby-group-item">Mới nhất</li>
                    <li className="sortedby-group-item">Giá: Thấp đến cao</li>
                    <li className="sortedby-group-item">Giá: Cao đến thấp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="newproducts">
            <div className="product">
              <div className="rows sm-gutter ">
                <div className="cols l-3 medium-6 c-6">
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
                  <div className="product_item ">
                    <div className="product_withList">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="product_free">
                      <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                    </div>
                    <a
                      href=""
                      className="product_item-img"
                      style={{
                        backgroundImage: 'url(/vperfume/nuochoanu/1.jpg)',
                      }}
                    />
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
              <ul className="pagination tootbal_pagination">
                <li className="pagination-item">
                  <a href="" className="pagination-item_link">
                    <ion-icon name="chevron-back-outline" />
                  </a>
                </li>
                <li className="pagination-item pagination-item--active">
                  <a href="" className="pagination-item_link">
                    1
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="" className="pagination-item_link">
                    2
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="" className="pagination-item_link">
                    ...
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="" className="pagination-item_link">
                    5
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="" className="pagination-item_link">
                    <ion-icon name="chevron-forward-outline" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
