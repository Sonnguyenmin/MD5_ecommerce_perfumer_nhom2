import { Button, Dropdown, Input, Modal, Radio, Select, Tag } from "antd";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetailByOrderId } from "../../../services/orderService";
import { useParams } from "react-router-dom";

const ManageOrderDetail = () => {
  const { id } = useParams();
  const { dataOrderDetail } = useSelector((state) => state.orders);
  console.log("cai can tim: ", dataOrderDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetailByOrderId(id));
  }, []);
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
            Chi tiết đơn hàng
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
                    Ảnh sản phẩm
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Tên sản phẩm
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Mã sản phẩm chi tiết
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Số lượng
                  </th>
                  <th className="px-4 h-20 text-[15px] font-semibold text-[var(--text-color)] text-center whitespace-nowrap">
                    Giá tiền
                  </th>
                </tr>
              </thead>
              {console.log(dataOrderDetail)}
              <tbody className="overflow-y-auto">
                {dataOrderDetail &&
                  dataOrderDetail?.content?.orderDetail?.map((item, index) => (
                    <tr className="border-b " key={item.id}>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] flex justify-center items-center  whitespace-nowrap">
                        <img
                          src={dataOrderDetail.content.product[0].image}
                          alt=""
                          className="w-[50px] h-[50px] "
                        />
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {item.productDetailId}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {item.quantity}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center whitespace-nowrap">
                        {item.unitPrice}
                      </td>
                      <td className="px-4 h-[50px] text-[15px] text-[var(--text-color)] text-center"></td>
                    </tr>
                  ))}
              </tbody>
            </table>
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

export default ManageOrderDetail;
