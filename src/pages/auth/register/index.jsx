import { Link } from 'react-router-dom';
import './register.scss';

export default function Register() {
  return (
    <>
      <main className="modal-register ">
        <div className="modal-register_content">
          <div className="modal-register_inner">
            <div className="modal-register-close">
              <ion-icon name="close-outline" />
            </div>
            <header className="modal-register-header">
              <div className="modal-register-imgs" />
              <div className="modal-register-head-group">
                <span className="modal-register-head-register">Đăng ký</span>
                <Link to="/login" className="modal-register-head-login">
                  Đăng nhập
                </Link>
              </div>
            </header>
            <section className="modal-register-body">
              <label htmlFor="resgiter-fullName" className="modal-register-label">
                Họ và tên:
              </label>
              <input type="text" placeholder="Họ và tên" className="modal-register-input" />
              <label htmlFor="resgiter-email" className="modal-register-label">
                Email:
              </label>
              <input
                type="text"
                id="resgiter-email"
                placeholder="example.@gmail.com"
                className="modal-register-input"
              />
              <div className="modal-register-group">
                <div className="modal-register-group-label">
                  <label htmlFor="resgiter-pass" className="modal-register-label">
                    Mật khẩu:
                  </label>
                  <input type="password" placeholder="Mật khẩu" className="modal-register-input" />
                </div>
                <div className="modal-register-group-label">
                  <label htmlFor="resgiter-pass" className="modal-register-label">
                    Nhập lại mật khẩu:
                  </label>
                  <input
                    type="password"
                    id="resgiter-pass"
                    placeholder="Nhập lại mật khẩu"
                    className="modal-register-input"
                  />
                </div>
              </div>
            </section>
            <div className="modal-register_aside">
              <p className="modal-register_policy-text">
                Bằng việc đăng kí, bạn đã đồng ý với Canifa về
                <a href="" className="modal-register_text-link">
                  Điểu khoản dịch vụ
                </a>{' '}
                &amp;
                <a href="" className="modal-register_text-link">
                  Chính sách bảo mật
                </a>
              </p>
            </div>
            <div className="modal-register_controls">
              <button className="btn_user-login ">ĐĂNG KÝ</button>
            </div>
          </div>
          {/* end resgiter */}
        </div>
      </main>
    </>
  );
}
