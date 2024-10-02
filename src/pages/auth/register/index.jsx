import { Link } from 'react-router-dom';
import './register.scss';
import { Button, Input } from 'antd';
import { useState } from 'react';

export default function Register() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <>
      <form className="modal-register ">
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
              <Input name="fullName" id="fullName" placeholder="Họ và tên" className="modal-register-input" />
              <label htmlFor="resgiter-email" className="modal-register-label">
                Email:
              </label>
              <Input name="email" id="email" className="modal-register-input" placeholder="example.@gmail.com" />
              <div className="modal-register-group">
                <div className="modal-register-group-label">
                  <label htmlFor="resgiter-pass" className="modal-register-label">
                    Mật khẩu:
                  </label>
                  <Input.Password
                    name="password"
                    id="password"
                    placeholder="Mật khẩu"
                    className="modal-register-input"
                  />
                </div>
                <div className="modal-register-group-label">
                  <label htmlFor="resgiter-pass" className="modal-register-label">
                    Nhập lại mật khẩu:
                  </label>
                  <Input.Password
                    placeholder="Nhập lại mật khẩu"
                    className="modal-register-input"
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                </div>
              </div>
            </section>
            <div className="modal-register_aside">
              <p className="modal-register_policy-text">
                Bằng việc đăng kí, bạn đã đồng ý với SQ_perfumer về{' '}
                <a href="" className="modal-register_text-link">
                  Điểu khoản dịch vụ
                </a>{' '}
                &amp;{' '}
                <a href="" className="modal-register_text-link">
                  Chính sách bảo mật
                </a>
              </p>
            </div>
            <div className="modal-register_controls">
              <Button htmlType="submit" className="btn_user-login" type="primary">
                ĐĂNG KÝ
              </Button>
            </div>
          </div>
          {/* end resgiter */}
        </div>
      </form>
    </>
  );
}
