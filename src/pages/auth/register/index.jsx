import { Link, useNavigate } from 'react-router-dom';
import './register.scss';
import { Button, Input, notification } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { validateEmail } from '../../../utils/validateData';
import { register } from '../../../services/authService';

export default function Register() {
  //#region khởi tạo các trường trong ô input
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputRefFocus = useRef();
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
      case 'email':
        if (!value) {
          setEmailError('Email không được để trống');
          invalid = false;
        } else {
          if (!validateEmail(value)) {
            setEmailError('Email không đúng định dạng');
            invalid = false;
          } else {
            setEmailError('');
          }
        }
        break;
      case 'password':
        if (!value) {
          setPasswordError('Mật khẩu không được để trống');
          invalid = false;
        } else {
          if (value.length < 6) {
            setPasswordError('Mật khẩu phải dài tối thiệu 6 ký tự');
            invalid = false;
          } else {
            setPasswordError('');
          }
        }
        break;
      case 'confirmPassword':
        if (!value) {
          setConfirmPasswordError('Mật khẩu không được để trống');
          invalid = false;
        } else {
          if (value !== user.password) {
            setConfirmPasswordError('Xác nhận mật khẩu không đúng');
            invalid = false;
          } else {
            setConfirmPasswordError('');
          }
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
    const emailValid = validateData('email', user.email);
    const passwordValid = validateData('password', user.password);
    const confirmPasswordValid = validateData('confirmPassword', user.confirmPassword);

    if (usernameValid && emailValid && passwordValid && confirmPasswordValid) {
      setIsLoading(true);
      try {
        const response = await register({
          username: user.username,
          password: user.password,
          email: user.email,
        });

        if (response.status == 201) {
          navigate('/login');

          notification.success({
            message: 'Thành công',
            description: response?.data?.data,
          });
        }
      } catch (error) {
        const responseError = error?.response?.data?.data;
        notification.error({
          message: 'Cảnh báo',
          description: responseError,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="modal-register ">
        <div className="modal-register_content">
          <div className="modal-register_inner">
            {/* <div className="modal-register-close" onClick={handleClose}>
              <ion-icon name="log-out-outline"></ion-icon>
            </div> */}
            <header className="modal-register-header">
              {/* <div className="modal-register-imgs"></div> */}
              <div className="modal-register-head-group">
                <span className="modal-register-head-register">Đăng ký</span>
              </div>
            </header>
            <div className="modal-register-body">
              <div className="relative">
                <label htmlFor="username" className="modal-register-label">
                  Tên đăng nhập:<span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input
                  onChange={handleChange}
                  ref={inputRefFocus}
                  name="username"
                  id="username"
                  autoComplete="username"
                  status={usernameError ? 'error' : ''}
                  placeholder="Tên đăng nhập"
                  className="modal-register-input"
                />
                {usernameError && (
                  <p className="absolute top-[80%] text-[--primary-user-color] text-[1.2rem] font-medium fadeInError">
                    {usernameError}
                  </p>
                )}
              </div>

              <div className="relative">
                <label htmlFor="email" className="modal-register-label">
                  Email: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input
                  onChange={handleChange}
                  name="email"
                  autoComplete="email"
                  status={emailError ? 'error' : ''}
                  id="email"
                  className="modal-register-input"
                  placeholder="example.@gmail.com"
                />
                {emailError && (
                  <p className="absolute top-[80%] text-[--primary-user-color] text-[1.2rem] font-medium fadeInError">
                    {emailError}
                  </p>
                )}
              </div>

              <div className="modal-register-group-label">
                <label htmlFor="password" className="modal-register-label">
                  Mật khẩu: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input.Password
                  onChange={handleChange}
                  name="password"
                  autoComplete="password"
                  id="password"
                  status={passwordError ? 'error' : ''}
                  placeholder="Mật khẩu"
                  className="modal-register-input"
                />
                {passwordError && (
                  <p className="absolute top-[80%] text-[--primary-user-color] text-[1.2rem] font-medium fadeInError">
                    Mật khẩu không được để trống
                  </p>
                )}
              </div>
              <div className="modal-register-group-label">
                <label htmlFor="confirmPassword" className="modal-register-label">
                  Nhập lại mật khẩu: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input.Password
                  onChange={handleChange}
                  placeholder="Nhập lại mật khẩu"
                  className="modal-register-input"
                  status={confirmPasswordError ? 'error' : ''}
                  name="confirmPassword"
                  autoComplete="confirmPassword"
                  id="confirmPassword"
                />
                {confirmPasswordError && (
                  <p className="absolute top-[80%] text-[--primary-user-color] text-[1.2rem] font-medium fadeInError">
                    Nhập lại mật khẩu không được để trống
                  </p>
                )}
              </div>
            </div>
            <div className="modal-register_aside">
              <p className="modal-register_policy-text">
                Bằng việc đăng kí, bạn đã đồng ý với SQ_perfumer về{' '}
                <Link href="" className="modal-register_text-link">
                  Điểu khoản dịch vụ
                </Link>{' '}
                &amp;{' '}
                <a href="" className="modal-register_text-link">
                  Chính sách bảo mật
                </a>
              </p>
            </div>
            <div className="modal-register_controls">
              <Button loading={isLoading} htmlType="submit" className="btn_user-login" type="primary">
                ĐĂNG KÝ
              </Button>
            </div>
          </div>
          <p className="text-center my-4 text-[1.2rem]">
            Bạn đã có tài khoản?{' '}
            <Link
              to="/login"
              className="text-[var(--plus-user-color)] font-medium text-[1.4rem] py-1 px-1 hover:text-blue-400"
            >
              Đăng nhập
            </Link>
          </p>
          {/* end resgiter */}
        </div>
      </form>
    </>
  );
}
