import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterLayout() {
  return (
    <>
      <footer className="footer-user">
        <div className="grid wide">
          <div className="rows sm-gutter">
            <div className="cols l-3 medium-6 c-12">
              <h3 className="footer_head">CÔNG TY CỔ PHẦN SQ_perfumer</h3>

              <p className="footer_content"></p>
              <p className="footer_content">
                Địa chỉ liên hệ: Tầng 3, Tò nhà sông đà, 18 Đ. Phạm Hùng, Mỹ Đình, Nam Từ Liêm, Hà Nội, Việt Nam
              </p>
              <p className="footer_content">Điện thoại: +8435 - 309.0212</p>
              <p className="footer_content">Fax: +8424 - 6277.6419</p>
              <p className="footer_content">Email: nguyentruongson1842001@gmail.com</p>
              <div className="footer_icon">
                <Link
                  to="https://www.facebook.com/profile.php?id=100070431084258"
                  className="footer_link-icon"
                  style={{
                    backgroundImage: 'url(/imgs/service/facebok-icon.svg)',
                  }}
                />
                <Link
                  to="https://www.instagram.com/ngtrson184/"
                  className="footer_link-icon"
                  style={{
                    backgroundImage: 'url(/imgs/service/instagram.svg)',
                  }}
                />
                <Link
                  to="https://www.youtube.com/@sonnguyentruong2784"
                  className="footer_link-icon"
                  style={{ backgroundImage: 'url(/imgs/service/youtube.svg)' }}
                />
                <Link
                  to="https://www.tiktok.com/@nguyentruongson184?lang=vi-VN"
                  className="footer_link-icon"
                  style={{ backgroundImage: 'url(/imgs/service/tiktok.svg)' }}
                />
              </div>
            </div>
            <div className="cols l-3 medium-6 c-12">
              <h3 className="footer_head">THÔNG TIN</h3>
              <Link className="footer_link"> Giới thiệu </Link>
              <Link className="footer_link"> Tin tức </Link>
              <Link className="footer_link"> Liên hệ </Link>
            </div>
            <div className="cols l-3 medium-6 c-12">
              <h3 className="footer_head">HỖ TRỢ</h3>
              <Link className="footer_link"> Hỏi đáp </Link>
              <Link className="footer_link"> Chính sách KHTT </Link>
              <Link className="footer_link"> Điều kiện - ĐIều khoản Chính sách KHTT </Link>
              <Link className="footer_link"> Chính sách vận chuyển </Link>
              <Link className="footer_link"> Gợi ý tìm size </Link>
              <Link className="footer_link"> Kiểm tra đơn hàng </Link>
              <Link className="footer_link"> Tra cứu điểm thẻ </Link>
              <Link className="footer_link"> Chính sách bảo mật thông tin KH </Link>
            </div>
            <div className="cols l-3 medium-6 c-12">
              <h3 className="footer_head">THÊM LIÊN KẾT</h3>
              <div className="footer_wrapper">
                <div className="footer_imgs" />
                <div className="footer_inner">
                  <p className="footer_appstore" />
                  <p className="footer_chplay" />
                </div>
              </div>
              <h3 className="footer_head">PHƯƠNG THỨC THANH TOÁN</h3>
              <div className="footer_pay" />
            </div>
          </div>
          <div className="footer_bottom">
            <p className="footer_copyright">© 2024 SQ_Pefumer.</p>
            <div className="footer_bottom-img" />
          </div>
        </div>
      </footer>
    </>
  );
}
