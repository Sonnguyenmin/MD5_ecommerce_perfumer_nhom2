import { Button, Dropdown, Input, Modal, Radio, Select, Tag } from "antd";
import { useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrderAdmin,
  updateOrderStatus,
} from "../../../services/orderService";
import { formatMoney } from "../../../utils/formatData";
import { Link } from "react-router-dom";

const ManageOrder = () => {
  // const { id } = useParams();
  const { dataOrder } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  console.log("dataOrder: ", dataOrder);

  useEffect(() => {
    dispatch(getAllOrderAdmin());
    // dispatch(updateOrderStatus(id));
  }, []);

  const arrayStatus = ["WAITING", "CANCEL", "CONFIRM", "DELIVERY", "SUCCESS"];

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
  const options = [
    {
      key: "4",
      label: <span>Chỉnh sửa</span>,
    },
    {
      key: "5",
      label: <span>Chặn</span>,
    },
    {
      key: "6",
      label: <span>Xóa</span>,
    },
  ];

  const handleOk = async () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeStatus = (event, id) => {
    console.log("value = ", event.target.value);
    console.log("id = ", id);
    dispatch(updateOrderStatus({ id, status: event.target.value })).then(() => {
      dispatch(getAllOrderAdmin());
    });
  };

  return (
    <>
      <Modal
        title={<h3 className="text-[20px]">Xác nhận xóa</h3>}
        open={false}
        maskClosable={false}
        footer={
          <>
            <Button onClick={handleCancel}>Hủy</Button>
            <Button onClick={handleOk} danger type="primary">
              Xóa
            </Button>
          </>
        }
      >
        <p>Bạn có chắc chắn muốn xóa khách hàng này không?</p>
      </Modal>

      <div className="w-full bg-[var(--panel-color)] rounded-[6px] mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] leading-10 text-[var(--text-color)] whitespace-nowrap font-bold font-number">
            Danh sách đơn hàng
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
                <tr className="bg-[var(--box1-color)] max-w-full">
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    STT
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Tên người nhận
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Mã đơn hàng
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Tổng tiền
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Địa chỉ
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Hành động
                  </th>
                </tr>
              </thead>
              {console.log(dataOrder)}
              <tbody className="overflow-y-auto">
                {dataOrder &&
                  dataOrder?.content?.content?.map((item, index) => (
                    <tr className="border-b " key={item.id}>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {item.receiveName}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        <Link to={`/admin/orderDetail/${item?.id}`}>
                          {item.serialNumber}
                        </Link>
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {formatMoney(item.totalPrice)}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {item.receiveFullAddress}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center">
                        {item.status === "CANCEL" ? (
                          <Tag color="red">CANCEL</Tag>
                        ) : (
                          <select
                            onChange={(e) => handleChangeStatus(e, item.id)}
                          >
                            {arrayStatus
                              .slice(
                                arrayStatus.findIndex((s) => s === item.status)
                              )
                              .map((st) => (
                                <option value={st}>{st}</option>
                              ))}
                          </select>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center flex-wrap gap-3">
          <div className="text-[14px] whitespace-nowrap text-[var(--text-color)]">
            Hiển thị <b className="font-number">scsdc</b> trên{" "}
            <b className="font-number">12321</b> bản ghi
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
          </div>
        </div>
        {false && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <form className="bg-white px-6 py-5 rounded-lg w-full max-w-md">
              <header className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-4">Thêm mới khách hàng</h2>
                <IoClose
                  size={24}
                  className="cursor-pointer hover:opacity-70"
                />
              </header>
              <div className="mb-4">
                <label className="block font-medium mb-2">Tên</label>
                <Input />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Giới tính</label>
                <Radio.Group>
                  <Radio>Nam</Radio>
                  <Radio>Nữ</Radio>
                  <Radio>Khác</Radio>
                </Radio.Group>
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Ngày sinh</label>
                <Input type="date" />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Email</label>
                <Input />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Địa chỉ</label>
                <Input.TextArea />
              </div>

              <div className="flex justify-end space-x-2">
                <Button htmlType="button">Hủy</Button>
                <Button type="primary" htmlType="submit">
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

export default ManageOrder;
