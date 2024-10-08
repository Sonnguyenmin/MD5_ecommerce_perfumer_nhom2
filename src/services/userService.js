import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET, PUT } from '../constants/httpMethod';
import BASE_URL from '../api/axiosInstance';
import { formAxios } from '../api';

export const updateUserProfile = async (updatedData) => {
  const res = await formAxios[PUT](`user/account/updateProfile`, updatedData);

  return res;
};
/**
 * Tìm tất cả người dùng với phân trang và tìm kiếm.
 *
 * @param {Object} params - Tham số tìm kiếm.
 * @param {number} params.page - Số trang hiện tại (bắt đầu từ 1).
 * @param {string} params.search - Chuỗi tìm kiếm để lọc người dùng.
 * @return {Promise<Array>} - Danh sách người dùng được tìm thấy.
 */
export const findUsersAll = createAsyncThunk('users/findAll', async ({ page, search }) => {
  const res = await BASE_URL[GET](`admin/userAdmin?page=${page - 1}&search=${search}`);
  return res.data.content;
});

/**
 * Thay đổi trạng thái của người dùng.
 *
 * @param {Object} params - Tham số cập nhật trạng thái.
 * @param {number} params.id - ID của người dùng cần cập nhật.
 * @param {boolean} params.status - Trạng thái mới của người dùng.
 * @return {Promise<Object>} - Dữ liệu người dùng đã được cập nhật.
 */
export const changUserStatus = createAsyncThunk('users/changUserStatus', async ({ id, status }) => {
  const res = await BASE_URL.put(`admin/${id}`, null, {
    params: { status },
  });
  return res.data;
});
