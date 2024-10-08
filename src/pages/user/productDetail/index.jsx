import { useEffect, useState } from "react";
import "./productDetail.scss";
import SliderDetail from "../../../layouts/user/detail/SliderDetail";
import ProductReview from "../../../layouts/user/detail/ProductReview";
import ProductRelate from "../../../layouts/user/detail/ProductRelate";
import ProductPayment from "../../../layouts/user/detail/ProductPayment";
import ProductInfo from "../../../layouts/user/detail/ProductInfo";
import ProductBreadcrumb from "../../../layouts/user/detail/ProductBreadcrumb";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductDetailById } from "../../../services/productDetailService";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { dataProduct, loadingProduct, errorProduct } = useSelector(
    (state) => state.ProductDetails
  );

  useEffect(() => {
    dispatch(findProductDetailById({ id }));
  }, [dispatch, id]);

  const [visible, setVisible] = useState({});

  const toggleVisibility = (key) => {
    setVisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  // Kiểm tra trạng thái loading và lỗi
  if (loadingProduct === "pending") return <div>Loading...</div>;
  if (errorProduct) return <div>Error: {errorProduct}</div>;

  // const [currentImage, setCurrentImage] = useState(1); // Bắt đầu với hình ảnh đầu tiên

  return (
    <>
      <div className="grid wide">
        <ProductBreadcrumb />
        <div className="product-details apps_content">
          <div className="rows sm-gutter">
            <div className="cols l-7 medium-12 c-12">
              <SliderDetail product={dataProduct} />
            </div>

            <div className="cols l-5 medium-12 c-12">
              <ProductInfo
                product={dataProduct}
                toggleVisibility={toggleVisibility}
                visible={visible}
              />
            </div>
          </div>
        </div>

        {/* product Reviews */}
        <section className="ProductDetail-reviews apps_content">
          <div className="grid wide">
            <ProductReview product={dataProduct?.id} />
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
