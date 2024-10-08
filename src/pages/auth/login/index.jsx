import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { Alert, Button, Input, message, notification } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { login } from '../../../services/authService';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

export default function Login() {
  //Hàm xử lý tắt form
  const handleClose = () => {
    navigate('/');
  };

  //#region khởi tạo các trường trong ô input
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorServer, setErrorServer] = useState(false);

  const inputRefFocus = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //#endregion

  // Kiểm tra xem inputRefFocus có tồn tại hay không
  useEffect(() => {
    if (inputRefFocus) {
      inputRefFocus.current.focus();
    }
  }, []);

  /**
   * Hàm validate dữ liệu đầu vào
   * @param {string} name - Tên trường dữ liệu cần kiểm tra.
   * @param {string} value - Giá trị của trường dữ liệu cần kiểm tra.
   * @returns {boolean} - Trả về true nếu dữ liệu hợp lệ, false nếu không hợp lệ.
   */
  const validateData = (name, value) => {
    let invalid = true;
    switch (name) {
      case 'username':
        if (!value) {
          setUsernameError('Tên đăng nhập không được để trống');
          invalid = false;
        } else {
          setUsernameError('');
        }
        break;
      case 'password':
        if (!value) {
          setPasswordError('Mật khẩu không được để trống');
          invalid = false;
        } else {
          setPasswordError('');
        }
        break;
      default:
        break;
    }
    return invalid;
  };

  //Hàm xử lý tắt form
  // const handleClose = () => {
  //   navigate('/login');
  // };

  /**
   * Hàm xử lý thay đổi dữ liệu đầu vào từ các trường biểu mẫu
   * @param {*} e - Sự kiện thay đổi từ trường nhập liệu
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    validateData(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameValid = validateData('username', user.username);
    const passwordValid = validateData('password', user.password);

    if (usernameValid && passwordValid) {
      try {
        setIsLoading(true);
        const resultAction = await dispatch(login(user));

        const originalPromiseResult = unwrapResult(resultAction);

        if (originalPromiseResult) {
          let data = originalPromiseResult.data;

          const userInfo = {
            address: data.address,
            avatar: data.avatar,
            createdAt: data.createdAt,
            email: data.email,
            fullName: data.fullName,
            phone: data.phone,
            roles: data.roles,
            username: data.username,
          };

          localStorage.setItem('userInfo', JSON.stringify(userInfo));

          if (data?.roles.some((item) => item === 'ROLE_ADMIN')) {
            navigate('/admin');
          } else {
            navigate('/');
          }

          notification.success({
            message: 'Thành công',
            description: 'Đăng nhập thành công',
            duration: 2,
          });
        }
      } catch (error) {
        message.error(error.toString());
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="modalUser">
        <div className="modalUser_content ">
          <div className="modalUser_inner">
            <div className="modalUser-close" onClick={handleClose}>
              <ion-icon name="log-out-outline"></ion-icon>
            </div>
            <header className="modalUser-header">
              <div className="modalUser-imgs" />
              <div className="modalUser-head">Đăng nhập</div>
            </header>
            <div className="modalUser-body">
              <div className="relative">
                <label htmlFor="username" className="modalUser-label">
                  Tên đăng nhập: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input
                  ref={inputRefFocus}
                  onChange={handleChange}
                  status={usernameError ? 'error' : ''}
                  name="username"
                  id="username"
                  autoComplete="username"
                  placeholder="Tên đăng nhập"
                  className="modalUser-input"
                />
                {usernameError && (
                  <p className="absolute top-[80%] text-[--primary-user-color] text-[1.1rem] font-medium">
                    Email không được để trống
                  </p>
                )}
              </div>
              <div className="relative">
                <label htmlFor="password" className="modalUser-label">
                  Mật khẩu: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input.Password
                  onChange={handleChange}
                  status={passwordError ? 'error' : ''}
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="modalUser-input"
                  placeholder="Mật khẩu"
                />
                {passwordError && (
                  <p className="absolute top-[80%] text-[--primary-user-color] text-[1.1rem] font-medium">
                    Mật khẩu không được để trống
                  </p>
                )}
              </div>
            </div>

            <div className="modalUser_aside">
              <div className="modalUser_help">
                <Link href="" className="modalUser_help-link modalUser_help-forgot">
                  Quên mật khẩu
                </Link>
                <span className="modalUser_help-separate" />
                <div className="modalUser_help-link">Bạn chưa có tài khoản ấn đăng ký</div>
              </div>
            </div>

            {/* <section className="mt-3">
              {errorServer && <Alert className="mb-2" type="error" message={errorServer} />}
            </section> */}

            <footer className="modalUser_controls">
              <Link to="/register" className=" btn_user-register">
                ĐĂNG KÝ
              </Link>
              <Button loading={isLoading} htmlType="submit" type="primary" className=" btn_user-login">
                ĐĂNG NHẬP
              </Button>
            </footer>
          </div>
          {/* end*/}
        </div>
      </form>
    </>
  );
}
