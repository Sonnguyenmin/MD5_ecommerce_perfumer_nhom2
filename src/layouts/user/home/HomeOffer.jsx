import React from 'react';
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 1,
    imageUrl: '/imgs/sale/sale04.webp',
    link: '#', // Thay đổi thành link thực tế nếu cần
  },
  {
    id: 2,
    imageUrl: '/imgs/sale/sale05.webp',
    link: '#',
  },
  {
    id: 3,
    imageUrl: '/imgs/sale/sale06.webp',
    link: '#',
  },
];

export default function HomeOffer() {
  return (
    <section className="homeoffers apps_content">
      <div className="grid wide">
        <div className="deals_title">
          <h2 className="deals_head">Ưu đãi độc quyền</h2>
          <div className="deals_content">
            <div className="deals_item active_online">Online</div>
            <div className="deals_item">Cửa hàng</div>
          </div>
        </div>
        <div className="deals_product">
          <div className="rows sm-gutter">
            {offers.map((offer) => (
              <div className="cols l-4 medium-4 c-4" key={offer.id}>
                <Link to={offer.link} className="deals_link">
                  <div
                    className="deals_imgs deals-padding"
                    style={{
                      backgroundImage: `url(${offer.imageUrl})`,
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
