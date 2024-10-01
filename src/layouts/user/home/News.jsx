import React from 'react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    imageUrl: '/vperfume/news/1.webp',
    title:
      'Nước hoa không chỉ là một sản phẩm làm đẹp mà còn là biểu tượng của phong cách và cá tính. Trong suốt hàng thế kỷ, các thương hiệu nước hoa lừng danh đã xây',
    time: '04:18 7/3/2024',
    link: '/news', // Thay đổi thành đường dẫn thực tế
  },
  {
    id: 2,
    imageUrl: '/vperfume/news/2.webp',
    title:
      'Nước hoa Marc Jacobs Daisy đã từ lâu trở thành biểu tượng của sự thanh xuân và nữ tính. Với những phiên bản khác nhau, mỗi chai nước hoa mang đến một câu chuyện hương thơm riêng biệt, đắm say lòng người bởi sự pha trộn tinh tế giữa các thành phần tự nhiên và sự sáng tạo không ngừng của thương hiệu Marc Jacobs. ',
    time: '02:41 1/3/2024',
    link: '/news',
  },
  {
    id: 3,
    imageUrl: '/vperfume/news/3.webp',
    title:
      'Nước hoa không chỉ là một phần của việc tự tin và tạo ấn tượng, mà còn là một biểu tượng của phong cách và cá nhân của bạn. Với hàng trăm loại nước hoa khác nhau trên thị trường, việc chọn ra một loại phù hợp có thể trở nên khá khó khăn.',
    time: '19:34 4/2/2024',
    link: '/news',
  },
  {
    id: 4,
    imageUrl: '/vperfume/news/7.webp',
    title:
      'Nước hoa chiết là gì? Khác gì so với nước hoa thông thường? Hiện nay có rất nhiều bạn đang quan tâm đến dòng sản phẩm này. Bài viết dưới đây sẽ giúp các bạn hiểu rõ hơn về sản phẩm nước hoa chiết và có những gợi ý về địa chỉ mua nước hoa chiết để các bạn yên tâm hơn nhé',
    time: '19:33 30/4/2024',
    link: '/news',
  },
];

export default function News() {
  return (
    <section className="canifa apps_content">
      <div className="grid wide">
        <div className="canifa_wrapper">
          <div className="canife_title">
            <h2 className="canifa_head">KIẾN THỨC NƯỚC HOA</h2>
            <div className="canifa_more">
              <span>Xem thêm</span>
              <ion-icon className="canifa_more-icon" name="chevron-forward-outline" />
            </div>
          </div>
        </div>
        <div className="news">
          <div className="rows sm-gutter">
            {newsItems.map((item) => (
              <div className="cols l-3 medium-6 c-12" key={item.id}>
                <Link to={item.link} className="news_item">
                  <div className="news_item-img" style={{ backgroundImage: `url(${item.imageUrl})` }} />
                  <div className="news_opsions">
                    <div className="news_item-new">Tin tức</div>
                    <div className="news_item-head">{item.title}</div>
                    <div className="news_item-time">{item.time}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
