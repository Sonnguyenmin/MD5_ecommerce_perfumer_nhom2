import { Button, Dropdown, Input, Modal, notification, Tag } from 'antd';
import Pagination from '@mui/material/Pagination';
import { FaFilter } from 'react-icons/fa';
import { LuRefreshCw } from 'react-icons/lu';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '@uidotdev/usehooks';
import { addBrand, deleteBrand, editBrand, findBrandAll } from '../../../services/brandService';
import AddBrand from './AddBrand';
import EditBrand from './EditBrand';

export default function ManagerBrand() {
  //#region Khai báo các biến trạng thái brand
  const [isFormAdd, setIsFormAdd] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [baseId, setBaseId] = useState(null);
  const [brand, setBrand] = useState({
    brandName: '',
    description: '',
  });
  const [brandNameError, setBrandNameError] = useState('');
  const { dataBrand, loadingBrand, errorBrand, totalPagesBrand, numberOfElementsBrand, totalElementsBrand } =
    useSelector((state) => state.brand);

  const dispatch = useDispatch();
  const debounce = useDebounce(search, 500);

  const loadData = () => {
    dispatch(findBrandAll({ page, search: debounce }));
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
      case 'brandName':
        if (!value.trim()) {
          setBrandNameError('Tên thương hiệu không được để trống');
          inValid = false;
        } else {
          const existingBrand = dataBrand.find(
            (br) => br.brandName.toLowerCase() === value.toLowerCase() && br.id !== id,
          );
          if (existingBrand) {
            setBrandNameError('Tên thương hiệu đã tồn tại');
            inValid = false;
          } else {
            setBrandNameError('');
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
   * Hàm xử lý thay đổi trong các trường nhập liệu cho chi tiết thương hiệu.
   * @param {*} e - Đối tượng sự kiện.
   */
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setBrand({
      ...brand,
      [name]: value,
    });

    validateData(name, value);
  };

  /**
   * Hàm xử lý thêm một thương hiệu mới.
   * @param {*} brand - thương hiệu cần thêm.
   */
  const handleAddBrand = (brand) => {
    const brandNameValid = validateData('brandName', brand.brandName);

    if (brandNameValid) {
      dispatch(addBrand(brand)).then(() => {
        loadData();
        notification.success({
          message: 'Thành công',
          description: 'Thương hiệu đã được thêm thành công!',
          duration: 2,
        });
      });
      setIsFormAdd(false);
    }
  };

  /**
   * Mở form chỉnh sửa cho một thương hiệu cụ thể.
   * @param {*} id - ID của thương hiệu cần chỉnh sửa.
   */
  const handleOpenFormEdit = (id) => {
    // find the old cat
    const findById = dataBrand.find((br) => br.id === id);
    setBaseId(id);
    setBrand(findById);
    setIsFormEdit(true);
  };

  const handleOpenModal = (id) => {
    setBaseId(id);
    setIsModal(true);
  };

  /**
   * Hàm xử lý thay đổi trạng thái của một thương hiệu.
   * Chuyển đổi trạng thái của thương hiệu dựa trên ID của nó.
   *
   * @param {*} id - ID của thương hiệu cần cập nhật.
   */
  const handleChangeStatus = (id) => {
    const brandStatusFindById = dataBrand.find((br) => br.id === id);
    const updatedStatus = !brandStatusFindById.status;

    dispatch(editBrand({ id, brand: { ...brandStatusFindById, status: updatedStatus } })).then(() => {
      loadData();
      notification.success({
        message: 'Thành công',
        description: `Thương hiệu đã được ${updatedStatus ? 'Đang hoạt động' : 'Ngừng hoạt động'}!`,
        duration: 1,
      });
    });
  };

  /**
   * Hàm xử lý chỉnh sửa một thương hiệu.
   * Xác thực tên thương hiệu và gửi hành động chỉnh sửa nếu hợp lệ.
   *
   * @param {*} param - Chứa baseId của thương hiệu cần chỉnh sửa.
   */
  const handleEditBrand = ({ baseId }) => {
    const brandNameValid = validateData('brandName', brand.brandName.trim(), baseId);
    if (brandNameValid) {
      dispatch(editBrand({ id: baseId, brand: brand })).then(() => {
        loadData();
        notification.success({
          message: 'Thành công',
          description: 'Thương hiệu đã được chỉnh sửa thành công!',
          duration: 1,
        });
      });
      setIsFormEdit(false);
    }
  };

  /**
   * Hàm xử lý xóa một thương hiệu.
   * Gửi hành động xóa và hiển thị thông báo thành công.
   *
   * @param {*} id - ID của thương hiệu cần xóa.
   */
  const handleDeleteBrand = (id) => {
    dispatch(deleteBrand(id)).then(() => {
      if (numberOfElementsBrand === 1 && page > 1) {
        setPage(page - 1);
      } else {
        loadData();
      }
      notification.success({
        message: 'Thành công',
        description: 'Thương hiệu đã được xóa thành công!',
        duration: 1,
      });
    });

    setIsModal(false);
  };

  /**
   * Định nghĩa các mục cho việc lọc thương hiệu.
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
   * Tạo các tùy chọn cho việc tương tác với một thương hiệu.
   * Bao gồm các hành động chỉnh sửa, thay đổi trạng thái và xóa dựa trên ID thương hiệu.
   *
   * @param {*} id - ID của thương hiệu.
   * @returns {Array} - Mảng các đối tượng tùy chọn.
   */
  const options = (id) => {
    const brand = dataBrand.find((br) => br.id === id);
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
            {brand.status ? 'Chặn' : 'Bỏ chặn'}
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
            <Button danger type="primary" onClick={() => handleDeleteBrand(baseId)}>
              Xóa
            </Button>
          </>
        }
      >
        <p>Bạn có chắc chắn muốn xóa thương hiệu này không?</p>
      </Modal>

      <div className="w-full bg-[var(--panel-color)] rounded-[6px] mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] leading-10 text-[var(--text-color)] whitespace-nowrap font-bold font-number">
            Danh sách thương hiệu
          </h1>
          <Button onClick={() => setIsFormAdd(true)} type="primary" className="py-7">
            Thêm mới thương hiệu
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
              placeholder="Tìm kiếm thương hiệu theo tên"
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
                    Mô tả
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
                {dataBrand?.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 h-[50px] text-[20px] text-[var(--text-color)] text-center font-bold"
                    >
                      {search ? `Không tìm thấy thương hiệu tên  ${search}` : 'Danh sách thương hiệu trống'}
                    </td>
                  </tr>
                ) : (
                  dataBrand?.map((br, index) => (
                    <tr key={br.id} className="border-b ">
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {index + 1 + (page - 1) * 5}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {br.brandName}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {br.description}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {br.status ? <Tag color="green">Đang hoạt động</Tag> : <Tag color="red">Ngừng hoạt động</Tag>}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center">
                        <Dropdown menu={{ items: options(br.id) }} placement="bottom" trigger={['click']}>
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
            Hiển thị <b className="font-number">{numberOfElementsBrand}</b> trên{' '}
            <b className="font-number">{totalElementsBrand}</b> bản ghi
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
              count={totalPagesBrand}
              onChange={handleChangePage}
            ></CustomPagination>
          </div>
        </div>

        {/* Form add */}
        {isFormAdd && (
          <AddBrand
            handleChangeInput={handleChangeInput}
            brandNameError={brandNameError}
            handleAddBrand={handleAddBrand}
            setIsFormAdd={setIsFormAdd}
            brand={brand}
          />
        )}

        {/* Form edit */}
        {isFormEdit && (
          <EditBrand
            handleChangeInput={handleChangeInput}
            brand={brand}
            setIsFormEdit={setIsFormEdit}
            handleEditBrand={() => handleEditBrand({ baseId })}
            brandNameError={brandNameError}
          />
        )}
      </div>
    </>
  );
}
