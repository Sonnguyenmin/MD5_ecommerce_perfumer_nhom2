import "./categories.scss";

import { Button, Dropdown, Input, Modal, Radio, Select, Tag } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "@mui/material/Pagination";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  editCategory,
  findAll,
} from "../../../services/categoryService";
import { useDebounce } from "@uidotdev/usehooks";

const ManagerCategory = () => {
  const [isFormAdd, setIsFormAdd] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [baseId, setBaseId] = useState(null);
  const [category, setCategory] = useState({
    categoryName: "",
    description: "",
  });
  const { data, loading, error, totalPages, numberOfElements, totalElements } =
    useSelector((state) => state.category);

  const dispatch = useDispatch();
  const debounce = useDebounce(search, 500);

  const loadData = () => {
    dispatch(findAll({ page, search: debounce }));
  };

  useEffect(() => {
    loadData();
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
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleAddCategory = (category) => {
    dispatch(addCategory(category)).then(() => {
      loadData();
    });
    setIsFormAdd(false);
  };

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

  const handleEditCategory = ({ baseId }) => {
    dispatch(editCategory({ id: baseId, category: category })).then(() => {
      loadData();
    });
    setIsFormEdit(false);
  };

  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id)).then(() => {
      loadData();
    });

    setIsModal(false);
  };

  const items = [
    {
      key: "1",
      label: <span>Hủy bỏ bộ lọc</span>,
    },
    {
      key: "2",
      label: <span>Đang hoạt động</span>,
    },
    {
      key: "3",
      label: <span>Ngừng hoạt động</span>,
    },
  ];

  const options = (id) => [
    {
      key: "4",
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
      key: "5",
      label: <span>Chặn</span>,
    },
    {
      key: "6",
      label: <span onClick={() => handleOpenModal(id)}>Xóa</span>,
    },
  ];

  const CustomPagination = styled(Pagination)({
    "& .MuiPaginationItem-root": {
      fontFamily: "Arial, sans-serif", // Tùy chỉnh phông chữ
      fontSize: "12px",
      backgroundColor: "lightgrey", // Màu nền
      color: "black", // Màu chữ
      "&:hover": {
        backgroundColor: "darkgrey", // Màu nền khi hover
      },
    },
    "& .Mui-selected": {
      backgroundColor: "blue", // Màu nền khi được chọn
      color: "white", // Màu chữ khi được chọn
      fontWeight: "bold", // Chữ đậm khi được chọn
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
            <Button
              danger
              type="primary"
              onClick={() => handleDeleteCategory(baseId)}
            >
              Xóa
            </Button>
          </>
        }
      >
        <p>Bạn có chắc chắn muốn xóa danh mục này không?</p>
      </Modal>

      <div className="w-full bg-[var(--panel-color)] rounded-[6px] mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] text-[var(--text-color)] whitespace-nowrap font-bold font-number">
            Danh sách danh mục
          </h1>
          <Button
            onClick={() => setIsFormAdd(true)}
            type="primary"
            className="py-7"
          >
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
              <FaFilter
                size={20}
                className="cursor-pointer text-gray-500 hover:text-gray-600"
              />
            </Button>
          </Dropdown>

          <div className="flex items-center gap-3">
            <Input.Search
              className="w-[300px] py-7 text-[var(--text-color)] text-[14px] font-medium"
              placeholder="Tìm kiếm tài khoản theo tên"
              onChange={handleSearch}
            />
            <LuRefreshCw
              size={24}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            />
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
                    Trạng thái
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto">
                {data?.map((cat, index) => (
                  <tr key={cat.id} className="border-b">
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {cat.categoryName}
                    </td>

                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                      {cat.status ? (
                        <Tag color="green">Đang hoạt động</Tag>
                      ) : (
                        <Tag color="red">Ngừng hoạt động</Tag>
                      )}
                    </td>
                    <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center">
                      <Dropdown
                        menu={{ items: options(cat.id) }}
                        placement="bottom"
                        trigger={["click"]}
                      >
                        <Button className="border-none shadow-none focus:shadow-none focus:bg-none">
                          <span className="text-[26px] text-[#d3732a]">
                            <i className="uil uil-file-edit-alt"></i>
                          </span>
                        </Button>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
                ;
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center flex-wrap gap-3">
          <div className="text-[14px] whitespace-nowrap text-[var(--text-color)]">
            Hiển thị <b className="font-number">{numberOfElements}</b> trên{" "}
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
                  value: "10",
                  label: "Hiển thị 10 bản ghi / trang",
                },
                {
                  value: "20",
                  label: "Hiển thị 20 bản ghi / trang",
                },
                {
                  value: "50",
                  label: "Hiển thị 50 bản ghi / trang",
                },
                {
                  value: "100",
                  label: "Hiển thị 100 bản ghi / trang",
                },
              ]}
            />
            {/* PAGINATION */}
            {/* <div className="flex items-center gap-3">
              <div className="h-12 w-12 text-[var(--text-color)] text-[14px] border rounded-[5px] flex items-center justify-center rounded cursor-pointer hover:bg-[#dadada]">
                <IoIosArrowBack />
              </div>
              <div className="h-12 w-12 text-[var(--text-color)] text-[14px] border rounded-[5px] flex items-center justify-center rounded cursor-pointer hover:bg-[#dadada]">
                1
              </div>
              <div className="h-12 w-12 text-[var(--text-color)] text-[14px] border rounded-[5px] flex items-center justify-center rounded cursor-pointer hover:bg-[#dadada]">
                2
              </div>
              <div className="h-12 w-12 text-[var(--text-color)] text-[14px] border rounded-[5px] flex items-center justify-center rounded cursor-pointer hover:bg-[#dadada]">
                <IoIosArrowForward />
              </div>
            </div> */}

            <CustomPagination
              color="primary"
              size="large"
              page={page}
              count={totalPages}
              onChange={handleChangePage}
            ></CustomPagination>
          </div>
        </div>


        {isFormAdd && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="bg-white px-6 py-5 rounded-lg w-full max-w-md z-[1000]"
            >

              <header className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-4">Thêm danh mục</h2>
                <IoClose
                  onClick={() => setIsFormAdd(false)}
                  size={24}
                  className="cursor-pointer hover:opacity-70"
                />
              </header>
              <div className="mb-4">
                <label className="block font-medium mb-2">Tên</label>
                <Input onChange={handleChangeInput} name="categoryName" />
              </div>
              {/* <div className="mb-4">
                <label className="block font-medium mb-2">Giới tính</label>
                <Radio.Group>
                  <Radio value={true}>Hoạt động</Radio>
                  <Radio value={false}>Không hoạt động</Radio>
                </Radio.Group>
              </div> */}

              <div className="mb-4">
                <label className="block font-medium mb-2">Description</label>
                <Input.TextArea
                  onChange={handleChangeInput}
                  name="description"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button htmlType="button" onClick={() => setIsFormAdd(false)}>
                  Cancel
                </Button>

                <Button
                  onClick={() => handleAddCategory(category)}
                  type="primary"
                  htmlType="submit"
                >
                  Add
                </Button>
              </div>
            </form>
          </div>
        )}

        {isFormEdit && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="bg-white px-6 py-5 rounded-lg w-full max-w-md z-[1000]"
            >
              <header className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-4">Edit danh mục</h2>
                <IoClose
                  onClick={() => setIsFormEdit(false)}
                  size={24}
                  className="cursor-pointer hover:opacity-70"
                />
              </header>
              <div className="mb-4">
                <label className="block font-medium mb-2">Tên</label>
                <Input
                  onChange={handleChangeInput}
                  name="categoryName"
                  value={category.categoryName}
                />
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-2">Description</label>
                <Input.TextArea
                  onChange={handleChangeInput}
                  name="description"
                  value={category.description}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button htmlType="button" onClick={() => setIsFormEdit(false)}>
                  Cancel
                </Button>

                <Button
                  onClick={() => handleEditCategory({ baseId })}
                  type="primary"
                  htmlType="submit"
                >
                  Edit
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ManagerCategory;
