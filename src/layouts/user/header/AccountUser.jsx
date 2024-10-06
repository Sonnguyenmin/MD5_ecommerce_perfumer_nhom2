import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../redux/slices/authSlice';
import { notification } from 'antd';

export default function AccountUser() {
  const navigate = useNavigate();
  const handleChangeForm = () => {
    navigate('/login');
  };
  const handleChangeRegisterForm = () => {
    navigate('/register');
  };

  // Lấy dữ liệu từ Redux store
  const { data } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  /**
   * HÀm đang xuất người dùng
   */
  const handleUserLogout = () => {
    dispatch(logout());
    notification.success({
      message: 'Thành công',
      description: 'Bạn đã đăng xuất thành công!',
      duration: 2,
    });
    navigate('/');
  };
  return (
    <>
      <div className="relative h_account-block">
        <div className="h_account-icon">
          <span>Tài khoản</span>
        </div>
        {!data ? (
          <div className="h_account-info">
            <ul className="flex flex-col">
              <li
                className="flex items-center justify-start pl-2 h-[40px] mb-2  text-[var(--text-user-color)] text-[1.2rem] font-medium hover:bg-[var(--plus-user-color)] hover:text-[var(--white-user-color)] cursor-pointer"
                onClick={handleChangeForm}
              >
                Đăng nhập
              </li>
              <li
                className="flex items-center justify-start pl-2 h-[40px]  text-[var(--text-user-color)] text-[1.2rem] font-medium hover:bg-[var(--plus-user-color)] hover:text-[var(--white-user-color)] cursor-pointer"
                onClick={handleChangeRegisterForm}
              >
                Đăng ký
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className="h_account-info">
              <ul className="flex flex-col">
                <li className="flex items-center justify-start pl-2 h-[40px] mb-2 text-[var(--text-user-color)] text-[1.2rem] font-medium hover:bg-[var(--plus-user-color)] hover:text-[var(--white-user-color)] hover:rounded-tr-md hover:rounded-tl-md cursor-pointer ">
                  Thông tin tài khoản
                </li>
                <li className="flex items-center justify-start pl-2 h-[40px] mb-2  text-[var(--text-user-color)] text-[1.2rem] font-medium hover:bg-[var(--plus-user-color)] hover:text-[var(--white-user-color)]">
                  <ion-icon name="person-outline"></ion-icon>
                  {data?.data?.username || 'Thành viên'}
                </li>
                <li
                  className="flex items-center justify-start pl-2 h-[40px]  text-[var(--text-user-color)] text-[1.2rem] font-medium hover:bg-[var(--plus-user-color)] hover:text-[var(--white-user-color)] hover:rounded-br-md hover:rounded-bl-md cursor-pointer"
                  onClick={handleUserLogout}
                >
                  <ion-icon name="log-out-outline"></ion-icon>
                  Đăng xuất
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}
