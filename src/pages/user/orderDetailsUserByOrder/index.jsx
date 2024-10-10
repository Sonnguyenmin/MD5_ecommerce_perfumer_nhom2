import React, { useEffect, useState } from 'react';

import { Tag } from 'antd';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '@uidotdev/usehooks';
import { styled } from '@mui/material/styles';
import { listOrderByUser } from '../../../services/historyOrderUserService';
import { Cookies } from 'react-cookie';
import { formatMoney } from '../../../utils/formatData';

export default function OrderDetailsUserByOrder() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const {
    dataHistoryOrderUser,
    totalPagesHistoryOrderUser,
    numberOfElementsHistoryOrderUser,
    totalElementsHistoryOrderUser,
  } = useSelector((state) => state.historyOrderUser);

  const debounce = useDebounce(search, 300);

  useEffect(() => {
    const token = new Cookies().get('accessToken');
    if (token) {
      dispatch(listOrderByUser({ page, search: debounce }));
    }
  }, [page, debounce]);

  /**
   * Hàm xử lý thay đổi trang trong phân trang.
   * @param {*} e - Đối tượng sự kiện.
   * @param {*} value - Số trang mới.
   */
  const handleChangePage = (e, value) => {
    setPage(value);
  };

  /**
   * Thành phần phân trang tùy chỉnh sử dụng Material-UI.
   */
  const CustomPagination = styled(Pagination)({
    '& .MuiPaginationItem-root': {
      fontFamily: 'Arial, sans-serif', // Tùy chỉnh phông chữ
      fontSize: '12px',
      backgroundColor: 'lightgrey', // Màu nền
      color: 'black', // Màu chữ
      '&:hover': {
        backgroundColor: 'darkgrey', // Màu nền khi hover
      },
    },
    '& .Mui-selected': {
      backgroundColor: 'blue', // Màu nền khi được chọn
      color: 'white', // Màu chữ khi được chọn
      fontWeight: 'bold', // Chữ đậm khi được chọn
    },
  });

  return (
    <>
      <div className="overflow-x-auto p-3">
        <div className="h-[56vh] overflow-y-auto">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[var(--box1-color)] max-w-full">
                <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                  STT
                </th>
                <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                  Tên sản phẩm
                </th>
                <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                  Hình ảnh sản phẩm
                </th>
                <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                  Giá tiền
                </th>
                <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                  Mã sản phẩm chi tiết
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {dataHistoryOrderUser?.length > 0 ? (
                dataHistoryOrderUser?.map((order, index) => (
                  <tr className="border-b" key={order}>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {index + 1 + (page - 1) * 5}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {order.serialNumber}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {formatMoney(order.totalPrice)}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {order.receiveName}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {order.note}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {order.receiveFullAddress}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {order.receivePhone}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {order.status === 'WAITING' ? <Tag color="yellow">Chờ Xác nhận</Tag> : ''}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      <select name="" id="">
                        <option value="">12345</option>
                        <option value="">sdsfghj</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <>
                  <tr>
                    <td
                      colSpan={8}
                      className="px-4 h-[50px] text-[20px] text-[var(--text-color)] text-center font-bold"
                    >
                      Không có đơn hàng nào mời bạn tiếp tục mua hàng
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className=" flex justify-between items-center flex-wrap gap-3">
          <div className="text-[14px] whitespace-nowrap text-[var(--text-color)]">
            Hiển thị <b className="font-number">{numberOfElementsHistoryOrderUser}</b> trên{' '}
            <b className="font-number">{totalElementsHistoryOrderUser}</b> bản ghi
          </div>
          <div className="flex items-center gap-5 mt-[40px]">
            <CustomPagination
              color="primary"
              size="large"
              page={page}
              count={totalPagesHistoryOrderUser}
              onChange={handleChangePage}
            ></CustomPagination>
          </div>
        </div>
      </div>
    </>
  );
}
