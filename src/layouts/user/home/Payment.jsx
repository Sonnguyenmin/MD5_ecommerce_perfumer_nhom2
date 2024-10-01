import React from 'react';

const paymentMethods = [
  {
    id: 1,
    imgClass: 'img_delivery',
    title: 'Thanh toán khi nhận hàng (COD)',
    description: 'Giao hàng toàn quốc',
  },
  {
    id: 2,
    imgClass: 'img_free',
    title: 'Miễn phí giao hàng',
    description: 'Với đơn hàng trên 599.000đ',
  },
  {
    id: 3,
    imgClass: 'img_change',
    title: 'Đơn hàng miễn phí',
    description: 'Trong 30 ngày kể từ ngày mua.',
  },
];

export default function Payment() {
  return (
    <section className="homepage apps_content">
      <div className="grid wide">
        <div className="payment_wrapper">
          {paymentMethods.map((method) => (
            <div className="payment_inner" key={method.id}>
              <div className={`payment_img ${method.imgClass}`}></div>
              <div className="payment_item">
                <h3 className="payment_head">{method.title}</h3>
                <span className="payment_desc">{method.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
