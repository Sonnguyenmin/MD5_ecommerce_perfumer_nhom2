import { createSlice } from '@reduxjs/toolkit';
import * as status from '../constants/status';
import { findUsersAll } from '../../services/userService';

/**
 * Tạo slice cho người dùng
 */
const userSlice = createSlice({
  name: 'users', // Tên slice
  initialState: {
    loading: status.IDLE, // Trạng thái khởi đầu là IDLE
    data: null, // Dữ liệu người dùng ban đầu là null
    error: null, // Không có lỗi ban đầu
    totalPages: 1, // Số trang ban đầu là 1
    numberOfElements: 0, // Số lượng phần tử ban đầu là 0
    totalElements: 0, // Tổng số phần tử ban đầu là 0
  },
  reducers: {}, // Không có reducers nào trong slice này
  extraReducers: (builder) => {
    builder.addCase(findUsersAll.pending, (state) => {
      state.loading = status.PENDING; // Khi bắt đầu tìm kiếm, cập nhật trạng thái loading
    });

    builder.addCase(findUsersAll.fulfilled, (state, action) => {
      state.loading = status.SUCCESSFULLY; // Khi tìm kiếm thành công, cập nhật trạng thái loading
      state.data = action.payload.content; // Lưu dữ liệu người dùng nhận được
      state.totalPages = action.payload.totalPages; // Lưu tổng số trang
      state.numberOfElements = action.payload.numberOfElements; // Lưu số lượng phần tử hiện có
      state.totalElements = action.payload.totalElements; // Lưu tổng số phần tử
    });

    builder.addCase(findUsersAll.rejected, (state, action) => {
      state.loading = status.FAILED; // Khi tìm kiếm thất bại, cập nhật trạng thái loading
      state.error = action.error.message; // Lưu thông điệp lỗi
    });
  },
});

export default userSlice.reducer; // Xuất reducer để sử dụng trong store
