import { useDispatch, useSelector } from 'react-redux';
import './wishList.scss';
import { useEffect } from 'react';
import { getAllWishlist } from '../../../services/wishlistService';
import { FaHeart } from 'react-icons/fa';

export default function WishList() {
  const dispatch = useDispatch();
  const { dataWishlist } = useSelector((state) => state.wishList);

  useEffect(() => {
    dispatch(getAllWishlist());
  }, []);
  return (
    <>
      <div className="product">
        <div className="rows sm-gutter">
          {dataWishlist?.content?.length > 0 ? (
            dataWishlist?.content?.map((wishlist) => (
              <div className="cols l-4 medium-6 c-6" key={wishlist.product.id}>
                <div className="wishlist_item">
                  <div className="product_withList">
                    <FaHeart size={20} className="text-red-600" />
                  </div>
                  {/* <div className="product_free">
              <img src="" alt="" className="product_free-img" />
            </div> */}
                  <a
                    href="/productDetails.html"
                    className="product_item-img"
                    style={{ backgroundImage: `url(${wishlist.product.image})` }}
                  ></a>
                  <div className="product_item-tocart">
                    <span>Thêm nhanh vào giỏ</span>
                  </div>
                  <div className="product_opsions">
                    <a href="/productDetails.html" className="product_item-head">
                      {wishlist.product.productName}
                    </a>
                    <div className="product_item-price">549.000 ₫</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-[30px] my-[100px]">
              <p className="h-[100px] leading-[40px]">Chưa có sản phẩm yêu thích trong danh sách yêu thích</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
