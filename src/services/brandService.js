import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../api';
import { DELETE, GET, POST, PUT } from '../constants/httpMethod';

export const listBrands = createAsyncThunk('brand/listBrand', async () => {
  const res = await BASE_URL[GET]('/listBrands');
  return res.data.content;
});

/**
 * Lấy danh sách tất cả các thương hiệu (brand) với phân trang và tìm kiếm.
 * @param {*} param - Chứa thông tin về trang hiện tại (page) và từ khóa tìm kiếm (search).
 * @returns {Array} - Trả về danh sách các thương hiệu theo trang và kết quả tìm kiếm.
 */
export const findBrandAll = createAsyncThunk('brand/findAll', async ({ page, search }) => {
  const res = await BASE_URL[GET](`admin/brands?page=${page - 1}&search=${search}`);
  return res.data.content;
});

export const findAllBrandNoPagination = createAsyncThunk('brand/findAllNoPagi', async () => {
  const res = await BASE_URL.get(`admin/brands?noPagination=true`);
  return res.data.content;
});

/**
 * Thêm một thương hiệu mới.
 * @param {*} brand - Dữ liệu của thương hiệu cần thêm (brand).
 * @returns {Object} - Kết quả phản hồi từ server sau khi thêm thương hiệu.
 */
export const addBrand = createAsyncThunk('brand/add', async (brand) => {
  const res = await BASE_URL[POST]('admin/brands', brand);
  return res;
});

/**
 * Chỉnh sửa thông tin của một thương hiệu.
 * @param {*} param - Chứa id của thương hiệu cần chỉnh sửa và dữ liệu thương hiệu mới.
 * @returns {Object} - Kết quả phản hồi từ server sau khi chỉnh sửa thương hiệu.
 */
export const editBrand = createAsyncThunk('brand/edit', async ({ id, brand }) => {
  const res = await BASE_URL[PUT](`admin/brands/${id}`, brand);
  return res;
});

/**
 * Xóa một thương hiệu dựa trên id.
 * @param {*} id - ID của thương hiệu cần xóa.
 * @returns {Object} - Kết quả phản hồi từ server sau khi xóa thương hiệu.
 */
export const deleteBrand = createAsyncThunk('brand/delete', async (id) => {
  const res = await BASE_URL[DELETE](`admin/brands/${id}`);
  return res;
});
