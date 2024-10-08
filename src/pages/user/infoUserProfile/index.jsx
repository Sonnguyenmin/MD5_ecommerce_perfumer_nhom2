import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cookies } from 'react-cookie';
import { updateUserProfile } from '../../../services/userService';
import { notification } from 'antd';

export default function InfoUserProfile() {
  const { data } = useSelector((state) => state.users);
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    phone: '',
    email: '',
    address: '',
    avatar: '',
    avatarPreview: '', // Thêm trường để lưu URL tạm thời
  });

  useEffect(() => {
    const cookies = new Cookies();
    const data = cookies.get('accessToken');
    if (data) {
      setFormData(data.data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleGetFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setFormData((prev) => ({
        ...prev,
        avatar: selectedFile,
        avatarPreview: imageUrl,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof formData.avatar === 'string') {
      formData.avatar = '';
    }

    const updatedData = new FormData();
    updatedData.append('fullName', formData.fullName);
    updatedData.append('username', formData.username);
    updatedData.append('phone', formData.phone);
    updatedData.append('email', formData.email);
    updatedData.append('address', formData.address);

    // Nếu có hình ảnh, thêm vào FormData
    if (formData.avatar) {
      updatedData.append('avatar', formData.avatar);
    }

    await updateUserProfile(updatedData)
      .then((resp) => {
        setFormData({ ...formData, ...resp.data.content });
        new Cookies().set('accessToken', { data: formData }, { maxAge: 86400000 });
        notification.success({
          message: 'Thành công',
          description: 'Thông tin tài khoản đã được cập nhật thành công!',
          duration: 2,
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Lỗi',
          description: err.response.data.data,
          duration: 2,
        });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-[1.6rem] font-semibold mb-10">Thông tin tài khoản</h2>
        <div className="mb-10 relative">
          <label htmlFor="fullName" className="block text-[1.3rem] text-gray-700 font-medium mb-2">
            Họ và tên:
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName || ''}
            onChange={handleChange}
            placeholder="Mời nhập họ và tên"
            className="w-full h-[36px] text-[1.3rem] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-10 relative">
          <label className="block text-[1.3rem] text-gray-700 font-medium mb-2" htmlFor="username">
            Tên người dùng:
          </label>
          <input
            type="text"
            id="username"
            value={formData.username || ''}
            onChange={handleChange}
            placeholder="Mời nhập tên người dùng"
            className="w-full h-[36px] text-[1.3rem] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
        </div>

        <div className="mb-10 relative">
          <label className="block text-[1.3rem] text-gray-700 font-medium mb-2" htmlFor="avatar">
            Ảnh:
          </label>
          <img
            src={formData.avatarPreview ? formData.avatarPreview : formData.avatar ? formData.avatar : '/profile.png'}
            alt="Ảnh avatar"
            className="w-[50px] h-[50px] object-contain rounded-[4px] mb-2"
          />
          <input
            type="file"
            id="avatar"
            onChange={handleGetFile}
            className="w-full h-[36px] text-[1.3rem] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-10 relative">
          <label className="block text-[1.3rem] text-gray-700 font-medium mb-2" htmlFor="phone">
            Số điện thoại:
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            placeholder="Mời nhập số điện thoại"
            className="w-full px-4 text-[1.3rem] h-[36px] py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-10 relative">
          <label className="block text-[1.3rem] text-gray-700 font-medium mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="Mời nhập Email"
            className="w-full px-4 h-[36px] text-[1.3rem] py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
        </div>

        <div className="mb-10 relative">
          <label className="block text-[1.3rem] text-gray-700 font-medium mb-2" htmlFor="address">
            Địa chỉ:
          </label>
          <input
            type="text"
            id="address"
            value={formData.address || ''}
            onChange={handleChange}
            placeholder="Mời nhập Địa chỉ"
            className="w-full px-4 h-[36px] text-[1.3rem] py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full mt-10 text-[1.3rem] h-[36px] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Lưu thay đổi
        </button>
      </form>
    </>
  );
}
