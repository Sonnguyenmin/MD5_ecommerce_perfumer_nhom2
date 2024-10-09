import React, { useEffect, useState } from 'react';
import { formatMoney } from '../../../utils/formatData';
import { useSelector } from 'react-redux';

export default function ProductInfo({ toggleVisibility, visible, listProductDetail, dataReal }) {
  const [volumeSelected, setVolumeSelected] = useState(null);

  useEffect(() => {
    if (listProductDetail?.content && listProductDetail.content.length > 0) {
      setVolumeSelected(listProductDetail.content[0].id); // Đặt ID thể tích đầu tiên là mặc định
      console.log('set:', listProductDetail.content[0]);
    }
  }, [listProductDetail]);

  useEffect(() => {
    console.log('datareal in product infor:', dataReal);
  }, [dataReal]);

  const handleChangeVolume = (id) => {
    setVolumeSelected(id);
  };

  // Tìm giá dựa trên volumeSelected
  const selectedProduct = listProductDetail?.content?.find((item) => item.id === volumeSelected);
  const price = selectedProduct ? selectedProduct.unitPrice : 0;
  console.log('thong tin can tim', dataReal);

  return (
    <div className="product-details-right">
      <div className="product-details-title">
        <div className="product-details-group">
          <h2 className="product-details-title-head">{dataReal?.productName}</h2>
          <div className="product-details-code">
            Mã sp: <span className="product-code-value">{dataReal?.sku}</span>
          </div>
          <div className="flex items-center my-[16px] flex-wrap gap-2">
            <div className="text-[1.4rem]">
              Thương hiệu:{' '}
              <span className="text-[var(--primary-user-color)] text-[1.4rem] font-medium mr-3">
                {dataReal?.brand?.brandName}
              </span>
              |
            </div>
            <div className="text-[1.4rem] mx-3">
              Danh mục:{' '}
              <span className="text-[var(--primary-user-color)] text-[1.4rem] font-medium mr-3">
                {dataReal?.category?.categoryName}
              </span>
              |
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
          <div className="price-after">
            {formatMoney(price)} {/* Hiển thị giá dựa trên volume đã chọn */}
          </div>
        </div>
      </div>

      <div className="product-swatch-options">
        <div className="product-swatch-attribute">
          <span className="attribute-size">Dung tích:</span>
          {listProductDetail?.content?.map((item) => (
            <div className="swatch-size-inner" key={item.id}>
              <div
                className={`swatch-size-item ${item.id === volumeSelected ? 'active-capacity' : ''}`}
                onClick={() => handleChangeVolume(item.id)}
              >
                <div className="flex items-center text-[1.1rem] font-medium my-1">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                  <p className="ml-2">Chiết {item.volume}ml</p>
                </div>
                <div className="text-[1.4rem] font-semibold my-1">{formatMoney(item.unitPrice)}</div>
              </div>
            </div>
          ))}
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
        <div className="details-desc-wrap" onClick={() => toggleVisibility('material')}>
          <div className={visible.material ? 'details-desc-list action' : 'details-desc-list'}>Mô tả sản phẩm:</div>
          {visible.material && <div className="details-desc-content">{dataReal.instruct}</div>}
        </div>

        <div className="details-desc-wrap" onClick={() => toggleVisibility('instructions')}>
          <div className={visible.instructions ? 'details-desc-list action' : 'details-desc-list'}>
            Hướng dẫn sử dụng
          </div>
          {visible.instructions && <div className="details-desc-content">{dataReal.guarantee}</div>}
        </div>
      </div>
    </div>
  );
}
