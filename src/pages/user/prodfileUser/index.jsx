import './profileUser.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function ProfileUser() {
  return (
    <>
      <div className="grid wide">
        <div className="breadcrumb apps_content">
          <ul className="breadcrumb_list">
            <li className="breadcrumb_item">
              <ion-icon name="home-outline" />
              <Link to="/" className="breadcrumb_link">
                Trang chủ
              </Link>
            </li>
            <li className="breadcrumb_item">
              <div className="breadcrumb_link">
                <strong>Thông tin tài khoản</strong>
              </div>
            </li>
          </ul>
        </div>
        <div className="product-details apps_content">
          <div className="rows sm-gutter">
            <div className="cols l-4 medium-12 c-12">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                {/* <!-- Profile Header --> */}
                <div className="flex flex-col items-center mb-6 relative">
                  <div className="bg-pink-400 text-white rounded-full h-14 w-14 flex items-center justify-center text-2xl">
                    S
                  </div>
                  <h2 className="text-[1.5rem] font-semibold text-gray-900 my-4 ">NGUYỄN TRƯỜNG SƠN</h2>
                  {/* <span class="absolute top-0 right-0 cursor-pointer">
                    <svg
                      class="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 17h2m-6 4h8a2 2 0 002-2v-7a9 9 0 10-12 0v7a2 2 0 002 2zm-1-8h10m-9 4h8"
                      ></path>
                    </svg>
                  </span> */}
                </div>

                {/* <!-- Member Status --> */}
                <div className="bg-green-500 text-white rounded-lg p-4 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[1.2rem]"> Hạng thẻ</span>
                    <strong className="text-[1.2rem]">GREEN</strong>
                  </div>
                  <div className="flex justify-between mt-5">
                    <span className="text-[1.2rem]">KHTT</span>
                    <strong className="text-[1.2rem]">0</strong>
                  </div>
                  <div className="flex justify-between mt-5 text-xs">
                    <span className="text-[1.2rem]">0 / 200</span>
                    <span className="text-[1.2rem]">Gold</span>
                  </div>
                </div>

                {/* <!-- Profile Menu --> */}
                <ul className="space-y-3">
                  <li className=" flex items-center text-gray-700 h-[40px] text-[1.4rem] font-semibold cursor-pointer">
                    <NavLink
                      className={({ isActive }) =>
                        `px-3 h-full block w-full leading-[40px] ${isActive ? 'profile-users-active' : ''}`
                      }
                      to="/profile"
                    >
                      <ion-icon name="person-outline"></ion-icon>
                      <span className="pl-3">Thông tin</span>
                    </NavLink>
                  </li>
                  <li className=" flex items-center text-gray-700 h-[40px] text-[1.4rem] font-semibold cursor-pointer">
                    <NavLink
                      className={({ isActive }) =>
                        `px-3 h-full block w-full leading-[40px] ${isActive ? 'profile-users-active' : ''}`
                      }
                      to="orderDetailUser"
                    >
                      <ion-icon name="bag-handle-outline"></ion-icon>
                      <span className="pl-3">Đơn hàng</span>
                    </NavLink>
                  </li>
                  {/* <li class=" flex items-center text-gray-700 h-[40px] text-[1.4rem] font-semibold cursor-pointer">
                    <NavLink
                      className={({ isActive }) =>
                        `px-3 h-full block w-full leading-[40px] ${isActive ? 'profile-users-active' : ''}`
                      }
                      to="/profile"
                    >
                      <ion-icon name="location-outline"></ion-icon>
                      <span className="pl-3">Sổ địa chỉ</span>
                    </NavLink>
                  </li> */}
                  <li className=" flex items-center text-gray-700 h-[40px] text-[1.4rem] font-semibold cursor-pointer">
                    <NavLink
                      className={({ isActive }) =>
                        `px-3 h-full block w-full leading-[40px] ${isActive ? 'profile-users-active' : ''}`
                      }
                      to="wishlist"
                    >
                      <ion-icon name="heart-circle-outline"></ion-icon>
                      <span className="pl-3">Yêu thích</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cols l-8 medium-12 c-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
