import { Button, Dropdown, Input, notification, Select } from "antd";

import Pagination from "@mui/material/Pagination";

import { FaFilter } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "@uidotdev/usehooks";
import {
  addBanner,
  deleteBanner,
  editBanner,
  findAllBanner,
} from "../../../services/bannerService";
import { useEffect, useState } from "react";
import AddBanner from "./AddBanner";
import DeleteBanner from "./DeleteBanner";
import EditBanner from "./EditBanner";

export default function ManagerBanner() {
  //#region Hàm khởi tạo trạng thái banner
  const [isFormAdd, setIsFormAdd] = useState(false);
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [baseId, setBaseId] = useState(null);
  const [banner, setBanner] = useState({
    bannerName: "",
    urlImage: "",
  });
  const [file, setFile] = useState(null);

  const [urlImageError, setUrlImageError] = useState("");
  const { data, totalPages, numberOfElements, totalElements } = useSelector(
    (state) => state.banner
  );

  const dispatch = useDispatch();
  const debounce = useDebounce(search, 500);

  const loadData = () => {
    dispatch(findAllBanner({ page, search: debounce }));
  };
  //#endregion

  /**
   * Sử dụng effect để tải dữ liệu khi trang hoặc tìm kiếm thay đổi.
   */
  useEffect(() => {
    loadData();
  }, [page, debounce]);

  /**
   * Hàm xác thực dữ liệu cho banner.
   * @param {*} name - Tên của trường cần xác thực.
   * @param {*} value - Giá trị cần xác thực.
   * @returns {boolean} - Trả về true nếu hợp lệ, false nếu không.
   */
  const validateData = (name, value) => {
    let inValid = true;
    switch (name) {
      case "urlImage":
        if (!value) {
          setUrlImageError("Ảnh banner không được để trống");
          inValid = false;
        } else {
          setUrlImageError("");
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
  const handleBannerSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setPage(1);
  };

  /**
   * Hàm xử lý thay đổi trong các trường nhập liệu cho chi tiết banner.
   * @param {*} e - Đối tượng sự kiện.
   */
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setBanner({
      ...banner,
      [name]: value,
    });
  };

  /**
   * Xử lý việc chọn tệp cho hình ảnh banner.
   * @param {*} e - Sự kiện được kích hoạt khi người dùng chọn tệp.
   */
  const handleGetFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    validateData("urlImage", selectedFile);
  };

  /**
   * Xử lý việc thêm banner mới.
   * Kiểm tra tính hợp lệ của hình ảnh và thực hiện hành động thêm banner.
   */
  const handleAddBanner = () => {
    const isUrlImageValid = validateData("urlImage", file);

    if (!isUrlImageValid) {
      notification.error({
        message: "Lỗi",
        description: "Vui lòng chọn hình ảnh banner!",
        duration: 2,
      });
      return;
    }

    const formData = new FormData();
    formData.append("bannerName", banner.bannerName);
    formData.append("urlImage", file);

    dispatch(addBanner(formData))
      .then(() => {
        loadData();
        notification.success({
          message: "Thành công",
          description: "Banner đã được thêm thành công!",
          duration: 1,
        });
      })
      .catch((error) => {
        notification.error({
          message: "Lỗi",
          description: "Có lỗi xảy ra trong quá trình thêm banner!",
          duration: 2,
        });
      });

    //reset lại form
    setBanner({ bannerName: "", urlImage: "" });
    setFile(null);
    setIsFormAdd(false);
  };

  /**
   * Mở form chỉnh sửa cho một banner cụ thể.
   * @param {*} id - ID của banner cần chỉnh sửa.
   */
  const handleOpenFormEdit = (id) => {
    const findBannerById = data.find((ban) => ban.id === id);
    setBaseId(id);
    setBanner(findBannerById);
    setIsFormEdit(true);
  };

  /**
   * Mở modal xác nhận để xóa banner.
   * @param {*} id - ID của banner cần xóa.
   */
  const handleOpenModal = (id) => {
    setBaseId(id);
    setIsModal(true);
  };

  /**
   * Hàm xử lý chỉnh sửa một banner.
   * Xác thực ảnh và gửi hành động chỉnh sửa nếu hợp lệ.
   *
   * @param {*} param - Chứa baseId của banner cần chỉnh sửa.
   */
  const handleEditBanner = ({ baseId }) => {
    // Nếu không có file mới, giữ lại ảnh cũ
    if (file) {
      const isUrlImageValid = validateData("urlImage", file);

      if (!isUrlImageValid) {
        notification.error({
          message: "Lỗi",
          description: "Vui lòng chọn hình ảnh banner hợp lệ!",
          duration: 1,
        });
        return;
      }
    }

    const formData = new FormData();
    formData.append("bannerName", banner.bannerName);

    // Nếu có file mới thì thêm vào formData, không thì giữ ảnh cũ
    if (file) {
      formData.append("urlImage", file);
    }

    dispatch(editBanner({ baseId, formData }))
      .then(() => {
        loadData();
        notification.success({
          message: "Thành công",
          description: "Banner đã được chỉnh sửa thành công!",
          duration: 1,
        });
      })
      .catch((error) => {
        notification.error({
          message: "Lỗi",
          description: "Chỉnh sửa banner không thành công!",
          duration: 1,
        });
      });

    // Reset lại form
    setBanner({ bannerName: "", urlImage: "" });
    setFile(null);
    setIsFormEdit(false);
  };

  /**
   * Xử lý việc xóa banner.
   * Gửi yêu cầu xóa banner và cập nhật trạng thái sau khi xóa.
   * @param {*} id - ID của banner cần xóa.
   */
  const handleDeleteBanner = (id) => {
    dispatch(deleteBanner(id)).then(() => {
      if (numberOfElements === 1 && page > 1) {
        setPage(page - 1);
      } else {
        loadData();
      }
      notification.success({
        message: "Thành công",
        description: "banner đã được xóa thành công!",
        duration: 1,
      });
    });
    setIsModal(false);
  };

  /**
   *Danh sách các mục để sắp xếp danh sách banner.
   */
  const items = [
    {
      key: "1",
      label: <span>Sắp xếp theo STT</span>,
    },
    {
      key: "2",
      label: <span>Sắp xếp theo A đến Z</span>,
    },
    {
      key: "3",
      label: <span>Sắp xếp theo Z đến A</span>,
    },
  ];

  /**
   * Tạo các tùy chọn cho menu thả xuống liên quan đến từng banner.
   * @param {*} id - ID của banner.
   * @returns {Array} - Mảng các tùy chọn cho menu thả xuống.
   */
  const options = (id) => {
    return [
      {
        key: "4",
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
        key: "5",
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
      <DeleteBanner
        handleDeleteBanner={handleDeleteBanner}
        isModal={isModal}
        setIsModal={setIsModal}
        baseId={baseId}
      />

      <div className="w-full bg-[var(--panel-color)] rounded-[6px] mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] text-[var(--text-color)] whitespace-nowrap font-bold font-number">
            Danh sách Banner
          </h1>
          <Button
            type="primary"
            className="py-6"
            onClick={() => setIsFormAdd(true)}
          >
            Thêm mới banner
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
              placeholder="Tìm kiếm banner theo tên"
              onChange={handleBannerSearch}
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
                    Hình ảnh
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
                      {search
                        ? `Không tìm thấy banner tên ${search}`
                        : "Danh sách banner trống"}
                    </td>
                  </tr>
                ) : (
                  data?.map((banner, index) => (
                    <tr className="border-b" key={banner.id}>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {index + 1 + (page - 1) * 5}
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {banner.bannerName || "Đang cập nhật"}
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        <img
                          src={banner.urlImage}
                          alt=""
                          className="w-[90%] h-[90%] object-contain"
                        />
                      </td>
                      <td className="px-4 h-[65px] text-[15px] text-[var(--text-color)] text-center">
                        <Dropdown
                          menu={{ items: options(banner.id) }}
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
                  ))
                )}
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
          <AddBanner
            handleAddBanner={handleAddBanner}
            setIsFormAdd={setIsFormAdd}
            handleChangeInput={handleChangeInput}
            handleGetFile={handleGetFile}
            urlImageError={urlImageError}
          />
        )}

        {isFormEdit && (
          <EditBanner
            handleEditBanner={() => handleEditBanner({ baseId })}
            handleChangeInput={handleChangeInput}
            setIsFormEdit={setIsFormEdit}
            handleGetFile={handleGetFile}
            banner={banner}
            urlImageError={urlImageError}
          />
        )}
      </div>
    </>
  );
}
