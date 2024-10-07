import { Button, Dropdown, Input, notification, Select, Tag } from 'antd';
import Pagination from '@mui/material/Pagination';
import { FaFilter } from 'react-icons/fa';
import { LuRefreshCw } from 'react-icons/lu';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '@uidotdev/usehooks';
import { changUserStatus, findUsersAll } from '../../../services/userService';

export default function ManagerUser() {
  // #region Khai báo các biến trạng thái users
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data, loading, error, totalPages, numberOfElements, totalElements } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const debounce = useDebounce(search, 500);

  const loadData = () => {
    dispatch(findUsersAll({ page, search: debounce }));
  };
  // #endregion

  /**
   * Sử dụng effect để tải dữ liệu khi trang hoặc tìm kiếm thay đổi.
   */
  useEffect(() => {
    loadData();
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
   * Hàm xử lý thay đổi ô tìm kiếm.
   * @param {*} e - Đối tượng sự kiện.
   */
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  /**
   * Hàm xử lý thay đổi trạng thái của một khách hàng.
   * Chuyển đổi trạng thái của khách hàng dựa trên ID của nó.
   *
   * @param {number} id - ID của khách hàng cần cập nhật.
   */

  const handleChangeStatus = async (id) => {
    const userStatusFindById = data.find((user) => user.id === id);
    const updatedStatus = !userStatusFindById.status;
    try {
      // Gửi yêu cầu cập nhật trạng thái
      const response = await dispatch(changUserStatus({ id, status: updatedStatus }));

      // console.log(response);
      // Kiểm tra phản hồi từ Redux
      if (response.meta.requestStatus === 'fulfilled') {
        loadData();
        notification.success({
          message: 'Thành công',
          description: `Khách hàng đã được ${updatedStatus ? 'Đang hoạt động' : 'Không hoạt động'}!`,
          duration: 1,
        });
      } else {
        throw new Error('Cập nhật trạng thái không thành công.');
      }
    } catch (error) {
      notification.error({
        message: 'Lỗi',
        description: 'Không thể cập nhật trạng thái của Admin!',
        duration: 1,
      });
    }
  };

  const items = [
    {
      key: '1',
      label: <span>Hủy bỏ bộ lọc</span>,
    },
    {
      key: '2',
      label: <span>Đang hoạt động</span>,
    },
    {
      key: '3',
      label: <span>Ngừng hoạt động</span>,
    },
  ];

  const options = (id) => {
    const users = data.find((user) => user.id === id);
    return [
      {
        key: '5',
        label: (
          <span className="leading-[32px]" onClick={() => handleChangeStatus(id)}>
            {users.status ? 'Chặn' : 'Bỏ chặn'}
          </span>
        ),
      },
    ];
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
      <div className="w-full bg-[var(--panel-color)] rounded-[6px] mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] leading-10 text-[var(--text-color)] whitespace-nowrap font-bold font-number">
            Danh sách khách hàng
          </h1>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
          >
            <Button className="border-none shadow-none">
              <FaFilter size={20} className="cursor-pointer text-gray-500 hover:text-gray-600" />
            </Button>
          </Dropdown>

          <div className="flex items-center gap-3">
            <Input.Search
              className="w-[300px] py-7 text-[var(--text-color)] text-[14px] font-medium"
              placeholder="Tìm kiếm khách hàng theo tên"
              onChange={handleSearch}
            />
            <LuRefreshCw size={24} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="h-[56vh] overflow-y-auto">
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 z-10">
                <tr className="bg-[var(--box1-color)]">
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    STT
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Tên
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Hình ảnh
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Họ và tên
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Số điện thoại
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Địa chỉ
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Trạng thái
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto">
                {data?.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-4 h-[50px] text-[20px] text-[var(--text-color)] text-center font-bold"
                    >
                      {search ? `Không tìm thấy khách hàng tên ${search}` : 'Danh sách khách hàng trống'}
                    </td>
                  </tr>
                ) : (
                  data?.map((user, index) => (
                    <tr className="border-b" key={user.id}>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {index + 1 + (page - 1) * 5}
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {user.username || 'Đang cập nhật'}
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        <img
                          src={user.avatar ? user.avatar : '/profile.png'}
                          alt=""
                          className="w-[90%] h-[90%] object-contain"
                        />
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {user.fullName || 'Đang cập nhật'}
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {user.phone || 'Đang cập nhật'}
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {user.address || 'Đang cập nhật'}
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {user.status ? <Tag color="green">Đang hoạt động</Tag> : <Tag color="red">Không hoạt động</Tag>}
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center">
                        <Dropdown menu={{ items: options(user.id) }} placement="bottom" trigger={['click']}>
                          <Button className="border-none shadow-none focus:shadow-none focus:bg-none">
                            <span className="text-[26px] text-[#d3732a]">
                              <i className="uil uil-file-edit-alt"></i>
                            </span>
                          </Button>
                        </Dropdown>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center flex-wrap gap-3">
          <div className="text-[14px] whitespace-nowrap text-[var(--text-color)]">
            Hiển thị <b className="font-number">{numberOfElements}</b> trên{' '}
            <b className="font-number">{totalElements}</b> bản ghi
          </div>
          <div className="flex items-center gap-5">
            <Select
              defaultValue="Hiển thị 10 bản ghi / trang"
              style={{
                width: 220,
              }}
              options={[
                {
                  value: '10',
                  label: 'Hiển thị 10 bản ghi / trang',
                },
                {
                  value: '20',
                  label: 'Hiển thị 20 bản ghi / trang',
                },
                {
                  value: '50',
                  label: 'Hiển thị 50 bản ghi / trang',
                },
                {
                  value: '100',
                  label: 'Hiển thị 100 bản ghi / trang',
                },
              ]}
            />

            <CustomPagination
              color="primary"
              size="large"
              page={page}
              count={totalPages}
              onChange={handleChangePage}
            ></CustomPagination>
          </div>
        </div>
      </div>
    </>
  );
}
