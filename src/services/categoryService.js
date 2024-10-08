import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../api';
import { DELETE, GET, POST, PUT } from '../constants/httpMethod';

/**
 * Tạo hàm lấy danh sách danh mục
 * Gọi API để lấy danh sách danh mục
 * Trả về dữ liệu danh mục
 */

export const listCategory = createAsyncThunk('category/listCategory', async () => {
  const res = await BASE_URL[GET]('/listCategories');
  return res.data.content;
});

/**
 *Tạo hàm tìm tất cả danh mục với phân trang
 * Gọi API với trang và từ khóa tìm kiếm
 * Trả về dữ liệu danh mục
 */
export const findAllCategory = createAsyncThunk('category/findAll', async ({ page, search }) => {
  const res = await BASE_URL[GET](`admin/categories?page=${page - 1}&search=${search}`);
  return res.data.content;
});

/**
 *Tạo hàm tìm tất cả danh mục không phân trang
 * Gọi API để lấy danh mục không phân trang
 *  Trả về dữ liệu danh mục
 */
export const findAllCategoryNoPagination = createAsyncThunk('category/findAllNoPagi', async () => {
  const res = await BASE_URL[GET](`admin/categories?noPagination=true`);
  return res.data.content;
});

/**
 * Tạo hàm thêm danh mục
 * Gọi API để thêm danh mục
 * Trả về kết quả từ API
 */
export const addCategory = createAsyncThunk('category/add', async (category) => {
  const res = await BASE_URL[POST]('admin/categories', category);
  return res;
});

/**
 *Tạo hàm chỉnh sửa danh mục
 * Gọi API để chỉnh sửa danh mục theo ID
 * Trả về kết quả từ API
 */
export const editCategory = createAsyncThunk('category/edit', async ({ id, category }) => {
  const res = await BASE_URL[PUT](`admin/categories/${id}`, category);
  return res;
});

/**
 *Tạo hàm xóa danh mục
 *Gọi API để xóa danh mục theo ID
 *Trả về kết quả từ API
 */
export const deleteCategory = createAsyncThunk('category/delete', async (id) => {
  const res = await BASE_URL[DELETE](`admin/categories/${id}`);
  return res;
});
