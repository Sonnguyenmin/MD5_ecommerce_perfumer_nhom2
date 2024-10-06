import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../api';

/**
 * Tạo hàm bất đồng bộ để lấy tất cả các banner với phân trang và tìm kiếm.
 *
 * @param {Object} param0 - Đối tượng chứa các tham số.
 * @param {number} param0.page - Số trang hiện tại (mặc định là 0).
 * @param {string} param0.search - Từ khóa tìm kiếm cho tên banner (mặc định là chuỗi rỗng).
 * @param {number} [param0.pageSize=5] - Số lượng bản ghi trên mỗi trang (mặc định là 5).
 *
 * @returns {Promise<Array>} - Trả về một Promise chứa danh sách các banner.
 */

export const findAllBanner = createAsyncThunk(
  'banner/findAll',
  async ({ page = 0, search = '', pageSize = 5, sortBy = '', orderBy = 'asc' }) => {
    const res = await BASE_URL.get(`admin/banners`, {
      params: {
        searchName: search,
        page: page,
        pageSize: pageSize,
        sortBy: sortBy,
        orderBy: orderBy,
      },
    });
    return res.data.content; // Cập nhật trả về để bao gồm cả thông tin phân trang
  },
);
