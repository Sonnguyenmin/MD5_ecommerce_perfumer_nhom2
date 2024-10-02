import React from 'react';

const paymentOptions = [
  {
    imgClass: 'img_delivery',
    title: 'Thanh toán khi nhận hàng (COD)',
    description: 'Giao hàng toàn quốc',
  },
  {
    imgClass: 'img_free',
    title: 'Miễn phí giao hàng',
    description: 'Với đơn hàng trên 599.000đ',
  },
  {
    imgClass: 'img_change',
    title: 'Đơn hàng miễn phí',
    description: 'Trong 30 ngày kể từ ngày mua.',
  },
];

export default function ProductPayment() {
  return (
    <section className="payment-pages apps_content">
      <div className="grid wide ">
        <div className="payment_wrapper ">
          {paymentOptions.map((option, index) => (
            <div className="payment_inner" key={index}>
              <div className={`payment_img ${option.imgClass}`}></div>
              <div className="payment_item">
                <h3 className="payment_head">{option.title}</h3>
                <span className="payment_desc">{option.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
