import { useState } from 'react';
import './productDetail.scss';
import SliderDetail from '../../../layouts/user/detail/SliderDetail';
import ProductReview from '../../../layouts/user/detail/ProductReview';
import ProductRelate from '../../../layouts/user/detail/ProductRelate';
import ProductPayment from '../../../layouts/user/detail/ProductPayment';
import ProductInfo from '../../../layouts/user/detail/ProductInfo';
import ProductBreadcrumb from '../../../layouts/user/detail/ProductBreadcrumb';

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
        <ProductBreadcrumb />
        <div className="product-details apps_content">
          <div className="rows sm-gutter">
            <div className="cols l-7 medium-12 c-12">
              <SliderDetail />
            </div>

            <div className="cols l-5 medium-12 c-12">
              <ProductInfo toggleVisibility={toggleVisibility} visible={visible} />
            </div>
          </div>
        </div>

        {/* product Reviews */}
        <section className="ProductDetail-reviews apps_content">
          <div className="grid wide">
            <ProductReview />
          </div>
        </section>
        {/* end product reviews */}
        {/* payment  */}
        <ProductPayment />
        {/* end payment */}
        {/* Related Products */}
        <ProductRelate />
        {/* end sunscreen */}
      </div>
    </>
  );
}
