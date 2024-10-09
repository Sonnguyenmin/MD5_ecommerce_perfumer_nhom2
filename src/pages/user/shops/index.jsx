import { Link, useParams } from 'react-router-dom';
import './shops.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filerProductByCategory } from '../../../services/productDetailService';
import { formatMoney } from '../../../utils/formatData';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { Cookies } from 'react-cookie';
import { addWishList, getAllWishlist } from '../../../services/wishlistService';
import { notification } from 'antd';

export default function Shops() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const filterProducts = useSelector((state) => state.product);
  const { dataWishlist } = useSelector((state) => state.wishList);

  useEffect(() => {
    dispatch(filerProductByCategory(id));
  }, [dispatch, id]);

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
                {filterProducts?.dataProduct?.length > 0 ? (
                  <>
                    {filterProducts?.dataProduct?.map((product) => (
                      <div className="cols l-3 medium-6 c-6" key={product.id}>
                        <div className="product_item ">
                          <div onClick={() => handleAddWishList(product.id)} className="product_withList">
                            {dataWishlist && dataWishlist?.content?.map((wl) => wl.product.id).includes(product.id) ? (
                              <FaHeart size={20} className="text-red-600" />
                            ) : (
                              <CiHeart size={20} />
                            )}
                          </div>
                          {/* <div className="product_free">
                            <img src="/imgs/sale/newproduct.webp" alt="" className="product_free-img" />
                          </div> */}
                          <Link
                            href=""
                            className="product_item-img"
                            style={{
                              backgroundImage: `url(${product.image})`,
                            }}
                          />
                          <div className="product_item-tocart">
                            <span>Thêm nhanh vào giỏ</span>
                          </div>
                          <div className="product_opsions">
                            <Link href="" className="product_item-head">
                              {product.productName}
                            </Link>
                            {/* <div className="product_item-price">{formatMoney(product.unitPrice)}</div> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <p className="text-[40px] text-center block my-[200px] ">Danh mục này không có sản phẩm nào !</p>
                  </>
                )}
              </div>
              <ul className="pagination tootbal_pagination">
                <li className="pagination-item">
                  <Link href="" className="pagination-item_link">
                    <ion-icon name="chevron-back-outline" />
                  </Link>
                </li>
                <li className="pagination-item pagination-item--active">
                  <Link href="" className="pagination-item_link">
                    1
                  </Link>
                </li>
                <li className="pagination-item">
                  <Link href="" className="pagination-item_link">
                    2
                  </Link>
                </li>
                <li className="pagination-item">
                  <Link href="" className="pagination-item_link">
                    ...
                  </Link>
                </li>
                <li className="pagination-item">
                  <Link href="" className="pagination-item_link">
                    5
                  </Link>
                </li>
                <li className="pagination-item">
                  <Link href="" className="pagination-item_link">
                    <ion-icon name="chevron-forward-outline" />
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
