import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, formAxios } from '../api';
import { DELETE, GET, POST, PUT } from '../constants/httpMethod';

export const listBanner = createAsyncThunk('banners/listBanner', async () => {
  const res = await BASE_URL[GET]('listBanner');
  return res;
});

/**
 * Thực hiện lấy danh sách tất cả banner với phân trang và tìm kiếm.
 * @param {*} param - Chứa thông tin về trang (page) và từ khóa tìm kiếm (search).
 * @returns {Array} - Danh sách các banner.
 */
export const findAllBanner = createAsyncThunk('banners/findAll', async ({ page, search }) => {
  const res = await BASE_URL[GET](`admin/banners?page=${page - 1}&search=${search}`);
  return res.data.content;
});

/**
 * Thực hiện thêm một banner mới.
 * @param {*} banner - Dữ liệu banner cần thêm.
 * @returns {Object} - Kết quả phản hồi từ server sau khi thêm banner.
 */
export const addBanner = createAsyncThunk('banners/add', async (banner) => {
  const res = formAxios[POST]('admin/banners', banner);
  return res;
});

/**
 * Thực hiện chỉnh sửa một banner.
 * @param {*} param - Chứa id của banner cần chỉnh sửa và dữ liệu banner mới.
 * @returns {Object} - Kết quả phản hồi từ server sau khi chỉnh sửa banner.
 */
export const editBanner = createAsyncThunk('banners/edit', async ({ baseId, formData }) => {
  const res = await formAxios[PUT](`admin/banners/${baseId}`, formData);
  return res;
});

/**
 * Thực hiện xóa một banner dựa trên id.
 * @param {*} id - ID của banner cần xóa.
 * @returns {Object} - Kết quả phản hồi từ server sau khi xóa banner.
 */
export const deleteBanner = createAsyncThunk('banner/delete', async (id) => {
  const res = await BASE_URL[DELETE](`admin/banners/${id}`);
  return res;
});
