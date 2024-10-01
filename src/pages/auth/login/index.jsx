import { Link } from 'react-router-dom';
import './login.scss';

export default function Login() {
  return (
    <>
      <div className="modalUser">
        <div className="modalUser_content ">
          <div className="modalUser_inner">
            <div className="modalUser-close ">
              <ion-icon name="close-outline" />
            </div>
            <header className="modalUser-header">
              <div className="modalUser-imgs" />
              <div className="modalUser-head">Đăng nhập</div>
            </header>
            <section className="modalUser-body">
              <label htmlFor="resgiter-email" className="modalUser-label">
                Nhập email của bạn
              </label>
              <input type="text" className="modalUser-input" placeholder="Email" />
              <label htmlFor="resgiter-pass" className="modalUser-label">
                Mật khẩu:
              </label>
              <input type="password" className="modalUser-input" placeholder="Mật khẩu" />
            </section>
            <div className="modalUser_aside">
              <div className="modalUser_help">
                <a href="" className="modalUser_help-link modalUser_help-forgot">
                  Quên mật khẩu
                </a>
                <span className="modalUser_help-separate" />
                <a href="" className="modalUser_help-link">
                  Cần trợ giúp ?
                </a>
              </div>
            </div>
            <div className="modalUser_controls">
              <Link to="/register" className=" btn_user-register">
                ĐĂNG KÝ
              </Link>
              <button className=" btn_user-login">ĐĂNG NHẬP</button>
            </div>
          </div>
          {/* end*/}
        </div>
      </div>
    </>
  );
}
