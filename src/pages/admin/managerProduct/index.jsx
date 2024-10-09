import { Button, Dropdown, Input, Modal, Radio, Select, Tag } from 'antd';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import { FaFilter } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { LuRefreshCw } from 'react-icons/lu';
import { addProduct, deleteProduct, editProduct, findAllProduct } from '../../../services/productService';

import { findAllCategory, findAllCategoryNoPagination } from '../../../services/categoryService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '@uidotdev/usehooks';
import Pagination from '@mui/material/Pagination';
import { findAllBrandNoPagination } from '../../../services/brandService';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ManagerProduct = () => {
  const { t } = useTranslation();

  const [isFormAdd, setIsFormAdd] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [baseId, setBaseId] = useState(null);
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    productName: '',
    description: '',
    guarantee: '',
    instruct: '',
    image: '',
    categoryId: '',
    brandId: '',
  });
  // DATA OF PRODUCT
  const {
    dataProduct,
    loadingProduct,
    errorProduct,
    totalPagesProduct,
    numberOfElementsProduct,
    totalElementsProduct,
  } = useSelector((state) => state.product);
  // DATA OF CATEGORY
  const {
    dataCategory,
    loadingCategory,
    errorCategory,
    totalPagesCategory,
    numberOfElementsCategory,
    totalElementsCategory,
    allCategories,
  } = useSelector((state) => state.category);

  // DATA OF BRAND
  const { dataBrand, loadingBrand, errorBrand, totalPagesBrand, numberOfElementsBrand, totalElementsBrand, allBrands } =
    useSelector((state) => state.brand);

  const dispatch = useDispatch();
  const debounce = useDebounce(search, 500);

  const loadData = () => {
    dispatch(findAllProduct({ page, search: debounce }));
  };

  const loadDataCategory = () => {
    dispatch(findAllCategoryNoPagination());
  };

  const loadDataBrand = () => {
    dispatch(findAllBrandNoPagination());
  };

  useEffect(() => {
    loadData();
    loadDataCategory();
    loadDataBrand();
  }, [page, debounce]);

  const handleChangePage = (e, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleGetFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSelectCategory = (e) => {
    setProduct({ ...product, categoryId: e.target.value });
  };

  const handleSelectBrand = (e) => {
    setProduct({ ...product, brandId: e.target.value });
  };

  const handleAddProduct = (product) => {
    const formData = new FormData();
    formData.append('productName', product.productName);
    formData.append('description', product.description);
    formData.append('image', file);
    formData.append('categoryId', product.categoryId);
    formData.append('brandId', product.brandId);

    dispatch(addProduct(formData))
      .then(() => {
        loadData();
      })
      .catch((error) => {
        console.log(error);
      });
    setIsFormAdd(false);
  };

  const handleOpenFormEdit = (id) => {
    // find the old cat
    const findById = data.find((pro) => pro.id === id);
    setBaseId(id);
    setCategory(findById);
    setIsFormEdit(true);
  };

  const handleOpenModal = (id) => {
    setBaseId(id);
    setIsModal(true);
  };

  const handleEditProduct = ({ baseId }) => {
    dispatch(editProduct({ id: baseId, product: product })).then(() => {
      loadData();
    });
    setIsFormEdit(false);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id)).then(() => {
      loadData();
    });

    setIsModal(false);
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

  const options = (id) => [
    {
      key: '4',
      label: (
        <span
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
      label: <span>Chặn</span>,
    },
    {
      key: '6',
      label: <span onClick={() => handleOpenModal(id)}>Xóa</span>,
    },
  ];

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
        open={false}
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
        <p>Bạn có chắc chắn muốn xóa sản phẩm này không?</p>
      </Modal>

      <div className="w-full bg-[var(--panel-color)] rounded-[6px] mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="leading-9 text-[20px] text-[var(--text-color)] whitespace-nowrap font-bold font-number">
            {t('listProduct')}
          </h1>
          <Button type="primary" className="py-6" onClick={() => setIsFormAdd(true)}>
            Thêm mới sản phẩm
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
              placeholder="Tìm kiếm tài khoản theo tên"
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
                    Ngày tạo
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
                {dataProduct?.map((pro, index) => (
                  <tr key={pro.id} className="border-b">
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      <Link to={`/admin/productDetail/${pro.id}`}>{pro.productName}</Link>
                    </td>
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      <img src={`${pro.image}`} alt="" className="w-full h-full object-contain" />
                    </td>
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {pro.createdAt}
                    </td>

                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {pro.status ? <Tag color="green">Đang hoạt động</Tag> : <Tag color="red">Ngừng hoạt động</Tag>}
                    </td>
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center">
                      <Dropdown menu={{ items: options(pro.id) }} placement="bottom" trigger={['click']}>
                        <Button className="border-none shadow-none focus:shadow-none focus:bg-none">
                          <span className="text-[26px] text-[#d3732a]">
                            <i className="uil uil-file-edit-alt"></i>
                          </span>
                        </Button>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center flex-wrap gap-3">
          <div className="text-[14px] whitespace-nowrap text-[var(--text-color)]">
            Hiển thị <b className="font-number">10</b> trên <b className="font-number">100</b> bản ghi
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
              count={totalPagesProduct}
              onChange={handleChangePage}
            ></CustomPagination>
          </div>
        </div>
        {/* ADD PRODUCT */}
        {isFormAdd && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="bg-white px-6 py-5 rounded-lg w-full max-w-[500px] z-[1000]"
            >
              <header className="flex items-center justify-between">
                <h2 className="text-3xl font-bold mb-4">Thêm mới sản phẩm</h2>
                <IoClose onClick={() => setIsFormAdd(false)} size={24} className="cursor-pointer hover:opacity-70" />
              </header>
              <div className="mb-4 relative">
                <label htmlFor="categoryName" className="block font-medium mb-2 text-[1.3rem]">
                  Tên sản phẩm: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input
                  onChange={handleChangeInput}
                  name="productName"
                  id="productName"
                  placeholder="Tên sản phẩm"
                  className="h-[40px]"
                />
              </div>
              {/* SELECT BRAND */}

              <div className="mb-4 relative">
                {/* <label className="block font-medium mb-2"></label> */}
                <label className="block font-medium mb-2 text-[1.3rem]">Brand</label>

                <br />
                {console.log(allBrands)}
                <select
                  onChange={handleSelectBrand}
                  name="brandId"
                  className="block font-medium mb-2 text-[1.3rem] w-full h-[40px] "
                >
                  {allBrands?.map((brand) => (
                    <option value={brand.id}>{brand.brandName}</option>
                  ))}
                </select>
              </div>
              {/* <div className="mb-4">
                <label className="block font-medium mb-2">Ngày sinh</label>
                <Input type="date" />
              </div> */}
              {/* <div className="mb-4">
                <label className="block font-medium mb-2">Email</label>
                <Input />
              </div> */}

              {/* SELECT CAT */}

              <div className="mb-4 relative">
                {/* <label className="block font-medium mb-2"></label> */}
                <label className="block font-medium mb-2 text-[1.3rem]">Category</label>

                <br />
                <select
                  onChange={handleSelectCategory}
                  name="categoryId"
                  className="block font-medium mb-2 text-[1.3rem] w-full h-[40px] "
                >
                  {allCategories?.map((cat) => (
                    <option value={cat.id}>{cat.categoryName}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <label htmlFor="urlImage" className="block font-medium mb-2 text-[1.3rem]">
                  Ảnh sản phẩm:
                </label>
                <input type="file" onChange={handleGetFile} />
              </div>
              <div className="mb-4 relative">
                <label className="block font-medium mb-2 text-[1.3rem]">Địa chỉ</label>
                <Input.TextArea onChange={handleChangeInput} name="description" />
              </div>

              <div className="flex justify-end space-x-2">
                <Button htmlType="button" onClick={() => setIsFormAdd(false)}>
                  Hủy
                </Button>
                <Button type="primary" htmlType="submit" onClick={() => handleAddProduct(product)}>
                  Thêm
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ManagerProduct;
