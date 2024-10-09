import { Button, Dropdown, Input, Modal, Radio, Select, Tag } from 'antd';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import { FaFilter } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { LuRefreshCw } from 'react-icons/lu';
import {
  addProduct,
  deleteProduct,
  editProduct,
  findAllProduct,
  findProductbyId,
} from '../../../services/productService';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '@uidotdev/usehooks';
import Pagination from '@mui/material/Pagination';
import { findAllBrandNoPagination } from '../../../services/brandService';
import { Link, useParams } from 'react-router-dom';
import { addProductDetail, findAllProDetail } from '../../../services/productDetailService';
import { useForm } from 'react-hook-form';

const ProductDetail = () => {
  const [isFormAdd, setIsFormAdd] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [baseId, setBaseId] = useState(null);
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({
    unitPrice: '',
    stockQuantity: '',
    volume: '',
    image: '',
    productId: id,
  });

  // DATA OF PRODUCT DETAIL
  const { dataProDetail, errorProDetail, totalPagesProDetail } = useSelector((state) => state.productDetail);

  const dispatch = useDispatch();
  const debounce = useDebounce(search, 500);

  const loadDataProDetail = () => {
    dispatch(findAllProDetail({ page, id }));
  };

  const loadDataProduct = async () => {
    const product = await dispatch(findProductbyId(id));
    setProduct(product.payload);
  };

  useEffect(() => {
    loadDataProduct();
    loadDataProDetail();
  }, [page]);

  const handleChangePage = (e, value) => {
    setPage(value);
  };

  //   const handleSearch = (e) => {
  //     setSearch(e.target.value);
  //     setPage(1);
  //   };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProductDetail({
      ...productDetail,
      [name]: value,
    });
  };

  const handleGetFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddProductDetail = (productDetail) => {
    const formData = new FormData();
    // formData.append("productName", product.productName);
    formData.append('unitPrice', productDetail.unitPrice);
    formData.append('image', file);
    formData.append('stockQuantity', productDetail.stockQuantity);
    formData.append('volume', productDetail.volume);
    formData.append('productId', productDetail.productId);

    dispatch(addProductDetail(formData))
      .then(() => {
        // console.log("unitPrice", productDetail.unitPrice);
        // console.log("image", file);
        // console.log("stockQuantity", productDetail.stockQuantity);
        // console.log("volume", productDetail.volume);
        // console.log("productId", productDetail.productId);
        loadDataProDetail();
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
          <h1 className="text-[20px] text-[var(--text-color)] whitespace-nowrap font-bold font-number">
            {`Chi tiết sản phẩm ${product?.productName}`}
          </h1>
          <Button type="primary" className="py-6" onClick={() => setIsFormAdd(true)}>
            Thêm mới chi tiết sản phẩm
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
          {/* SEARCH */}
          {/* <div className="flex items-center gap-3">
            <Input.Search
              className="w-[300px] py-7 text-[var(--text-color)] text-[14px] font-medium"
              placeholder="Tìm kiếm tài khoản theo tên"
              onChange={handleSearch}
            />
            <LuRefreshCw
              size={24}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            />
          </div> */}
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
                    Giá tiền
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Số lượng
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Chiết
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
                {dataProDetail?.map((pro, index) => (
                  <tr key={pro.id} className="border-b">
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {product?.productName}
                    </td>
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {pro.unitPrice}
                    </td>
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {pro.stockQuantity}
                    </td>
                    <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {`${pro.volume} ml`}
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
              count={totalPagesProDetail}
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
                <h2 className="text-3xl font-bold mb-4">Thêm mới chi tiết sản phẩm</h2>
                <IoClose onClick={() => setIsFormAdd(false)} size={24} className="cursor-pointer hover:opacity-70" />
              </header>
              <div className="mb-4 relative">
                <label htmlFor="unitPrice" className="block font-medium mb-2 text-[1.3rem]">
                  Giá tiền: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input
                  onChange={handleChangeInput}
                  name="unitPrice"
                  id="unitPrice"
                  // placeholder="Tên sản phẩm"
                  className="h-[40px]"
                />
              </div>

              <div className="mb-4 relative">
                <label htmlFor="stockQuantity" className="block font-medium mb-2 text-[1.3rem]">
                  Só lượng: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input
                  onChange={handleChangeInput}
                  name="stockQuantity"
                  id="stockQuantity"
                  // placeholder="Tên sản phẩm"
                  className="h-[40px]"
                />
              </div>

              <div className="mb-4 relative">
                <label htmlFor="volume" className="block font-medium mb-2 text-[1.3rem]">
                  Chiết: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
                </label>
                <Input
                  onChange={handleChangeInput}
                  name="volume"
                  id="volume"
                  // placeholder="Tên sản phẩm"
                  className="h-[40px]"
                />
              </div>

              <div className="relative">
                <label htmlFor="urlImage" className="block font-medium mb-2 text-[1.3rem]">
                  Ảnh sản phẩm:
                </label>
                <input type="file" onChange={handleGetFile} />
              </div>

              <div className="flex justify-end space-x-2">
                <Button htmlType="button" onClick={() => setIsFormAdd(false)}>
                  Hủy
                </Button>
                <Button type="primary" htmlType="submit" onClick={() => handleAddProductDetail(productDetail)}>
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

export default ProductDetail;
