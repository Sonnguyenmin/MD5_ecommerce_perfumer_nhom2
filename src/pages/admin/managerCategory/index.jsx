import './categories.scss';

import { Button, Dropdown, Input, Modal, notification, Radio, Select, Tag } from 'antd';
import Pagination from '@mui/material/Pagination';
import { FaFilter } from 'react-icons/fa';
import { LuRefreshCw } from 'react-icons/lu';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, editCategory, findAll } from '../../../services/categoryService';
import { useDebounce } from '@uidotdev/usehooks';
import AddCategory from './addCategory';
import EditCategory from './EditCategory';

export default function ManagerCategory() {
  //#region Khai báo các biến trạng thái category
  const [isFormAdd, setIsFormAdd] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [baseId, setBaseId] = useState(null);
  const [category, setCategory] = useState({
    categoryName: '',
    description: '',
  });
  const [categoryNameError, setCategoryNameError] = useState('');
  const { data, loading, error, totalPages, numberOfElements, totalElements } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  const debounce = useDebounce(search, 500);

  const loadData = () => {
    dispatch(findAll({ page, search: debounce }));
  };

  //#endregion

  /**
   * Sử dụng effect để tải dữ liệu khi trang hoặc tìm kiếm thay đổi.
   */
  useEffect(() => {
    loadData();
  }, [page, debounce]);

  /**
   * Hàm xác thực dữ liệu cho danh mục.
   * @param {*} name - Tên của trường cần xác thực.
   * @param {*} value - Giá trị cần xác thực.
   * @returns {boolean} - Trả về true nếu hợp lệ, false nếu không.
   */
  const validateData = (name, value, id = null) => {
    let inValid = true;
    switch (name) {
      case 'categoryName':
        if (!value.trim()) {
          setCategoryNameError('Tên danh mục không được để trống');
          inValid = false;
        } else {
          const existingCategory = data.find(
            (cate) => cate.categoryName.toLowerCase() === value.toLowerCase() && cate.id !== id,
          );
          if (existingCategory) {
            setCategoryNameError('Tên danh mục đã tồn tại');
            inValid = false;
          } else {
            setCategoryNameError('');
          }
        }
        break;
      default:
        break;
    }
    return inValid;
  };

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
   * Hàm xử lý thay đổi trong các trường nhập liệu cho chi tiết danh mục.
   * @param {*} e - Đối tượng sự kiện.
   */
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });

    validateData(name, value);
  };

  /**
   * Hàm xử lý thêm một danh mục mới.
   * @param {*} category - Danh mục cần thêm.
   */
  const handleAddCategory = (category) => {
    const categoryNameValid = validateData('categoryName', category.categoryName);

    if (categoryNameValid) {
      dispatch(addCategory(category)).then(() => {
        loadData();
        notification.success({
          message: 'Thành công',
          description: 'Danh mục đã được thêm thành công!',
          duration: 2,
        });
      });
      setIsFormAdd(false);
    }
  };

  /**
   * Mở form chỉnh sửa cho một danh mục cụ thể.
   * @param {*} id - ID của danh mục cần chỉnh sửa.
   */
  const handleOpenFormEdit = (id) => {
    // find the old cat
    const findById = data.find((cat) => cat.id === id);
    setBaseId(id);
    setCategory(findById);
    setIsFormEdit(true);
  };

  const handleOpenModal = (id) => {
    setBaseId(id);
    setIsModal(true);
  };

  /**
   * Hàm xử lý thay đổi trạng thái của một danh mục.
   * Chuyển đổi trạng thái của danh mục dựa trên ID của nó.
   *
   * @param {*} id - ID của danh mục cần cập nhật.
   */
  const handleChangeStatus = (id) => {
    const categoryStatusFindById = data.find((cate) => cate.id === id);
    const updatedStatus = !categoryStatusFindById.status;

    dispatch(editCategory({ id, category: { ...categoryStatusFindById, status: updatedStatus } })).then(() => {
      loadData();
      notification.success({
        message: 'Thành công',
        description: `Danh mục đã được ${updatedStatus ? 'Đang hoạt động' : 'Ngừng hoạt động'}!`,
        duration: 1,
      });
    });
  };

  /**
   * Hàm xử lý chỉnh sửa một danh mục.
   * Xác thực tên danh mục và gửi hành động chỉnh sửa nếu hợp lệ.
   *
   * @param {*} param - Chứa baseId của danh mục cần chỉnh sửa.
   */
  const handleEditCategory = ({ baseId }) => {
    const categoryNameValid = validateData('categoryName', category.categoryName.trim(), baseId);
    if (categoryNameValid) {
      dispatch(editCategory({ id: baseId, category: category })).then(() => {
        loadData();
        notification.success({
          message: 'Thành công',
          description: 'Danh mục đã được chỉnh sửa thành công!',
          duration: 1,
        });
      });
      setIsFormEdit(false);
    }
  };

  /**
   * Hàm xử lý xóa một danh mục.
   * Gửi hành động xóa và hiển thị thông báo thành công.
   *
   * @param {*} id - ID của danh mục cần xóa.
   */
  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id)).then(() => {
      if (numberOfElements === 1 && page > 1) {
        setPage(page - 1);
      } else {
        loadData();
      }
      notification.success({
        message: 'Thành công',
        description: 'Danh mục đã được xóa thành công!',
        duration: 1,
      });
    });

    setIsModal(false);
  };

  /**
   * Định nghĩa các mục cho việc lọc danh mục.
   */
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

  /**
   * Tạo các tùy chọn cho việc tương tác với một danh mục.
   * Bao gồm các hành động chỉnh sửa, thay đổi trạng thái và xóa dựa trên ID danh mục.
   *
   * @param {*} id - ID của danh mục.
   * @returns {Array} - Mảng các đối tượng tùy chọn.
   */
  const options = (id) => {
    const category = data.find((cat) => cat.id === id);
    return [
      {
        key: '4',
        label: (
          <span
            className="leading-[32px]"
            onClick={() => {
              handleOpenFormEdit(id);
            }}
          >
            Chỉnh sửa
          </span>
        ),
      },
      {
        key: '5',
        label: (
          <span className="leading-[32px]" onClick={() => handleChangeStatus(id)}>
            {category.status ? 'Chặn' : 'Bỏ chặn'}
          </span>
        ),
      },
      {
        key: '6',
        label: (
          <span className="leading-[32px]" onClick={() => handleOpenModal(id)}>
            Xóa
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
      <Modal
        title={<h3 className="text-[20px]">Xác nhận xóa</h3>}
        open={isModal}
        maskClosable={false}
        footer={
          <>
            <Button onClick={() => setIsModal(false)}>Hủy</Button>
            <Button danger type="primary" onClick={() => handleDeleteCategory(baseId)}>
              Xóa
            </Button>
          </>
        }
      >
        <p>Bạn có chắc chắn muốn xóa danh mục này không?</p>
      </Modal>

      <div className="w-full bg-[var(--panel-color)] rounded-[6px] mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] leading-10 text-[var(--text-color)] whitespace-nowrap font-bold font-number">
            Danh mục sản phẩm
          </h1>
          <Button onClick={() => setIsFormAdd(true)} type="primary" className="py-7">
            Thêm mới danh mục
          </Button>
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
              placeholder="Tìm kiếm danh mục theo tên"
              onChange={handleSearch}
            />
            <LuRefreshCw size={24} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="h-[56vh] overflow-y-auto">
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 z-10">
                <tr className="bg-[var(--box1-color)] max-w-full">
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    STT
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Tên
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
                      colSpan={4}
                      className="px-4 h-[50px] text-[20px] text-[var(--text-color)] text-center font-bold"
                    >
                      {search ? `Không tìm thấy danh mục tên  ${search}` : 'Danh sách danh mục trống'}
                    </td>
                  </tr>
                ) : (
                  data?.map((cat, index) => (
                    <tr key={cat.id} className="border-b ">
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {index + 1 + (page - 1) * 5}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {cat.categoryName}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {cat.status ? <Tag color="green">Đang hoạt động</Tag> : <Tag color="red">Ngừng hoạt động</Tag>}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center">
                        <Dropdown menu={{ items: options(cat.id) }} placement="bottom" trigger={['click']}>
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
            {/* <Select
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
            /> */}

            <CustomPagination
              color="primary"
              size="large"
              page={page}
              count={totalPages}
              onChange={handleChangePage}
            ></CustomPagination>
          </div>
        </div>

        {/* Form add */}
        {isFormAdd && (
          <AddCategory
            handleChangeInput={handleChangeInput}
            categoryNameError={categoryNameError}
            handleAddCategory={handleAddCategory}
            setIsFormAdd={setIsFormAdd}
            category={category}
          />
        )}

        {/* Form edit */}
        {isFormEdit && (
          <EditCategory
            handleChangeInput={handleChangeInput}
            category={category}
            setIsFormEdit={setIsFormEdit}
            handleEditCategory={() => handleEditCategory({ baseId })}
            categoryNameError={categoryNameError}
          />
        )}
      </div>
    </>
  );
}
