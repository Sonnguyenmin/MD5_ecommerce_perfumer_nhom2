import React from 'react';

import { Button, Dropdown, Input, Modal, Radio, Select, Tag } from 'antd';
import { FaFilter } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { LuRefreshCw } from 'react-icons/lu';

export default function OrderDetailUser() {
  const options = [
    {
      key: '4',
      label: <span>Chỉnh sửa</span>,
    },
    {
      key: '5',
      label: <span>Chặn</span>,
    },
    {
      key: '6',
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

      <div className="container mx-auto p-6 max-w-full  overflow-x-auto ">
        <div className="flex items-center justify-between mb-6  ">
          <h1 className="text-[20px] font-bold">Danh sách đơn hàng</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 h-11 text-center text-[1.3rem]">Tên</th>
                <th className="px-4 h-11 text-center text-[1.3rem]">Giới tính</th>
                <th className="px-4 h-11 text-center text-[1.3rem]">Ngày sinh</th>
                <th className="px-4 h-11 text-center text-[1.3rem]">Email</th>
                <th className="px-4 h-11 text-center text-[1.3rem]">Địa chỉ</th>
                <th className="px-4 h-11 text-center text-[1.3rem]">Trạng thái</th>
                <th className="px-4 h-11 text-center text-[1.3rem]">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 h-11">customer.name</td>
                <td className="px-4 h-11">Nam</td>
                <td className="px-4 h-11">customer.dateOfBirth</td>
                <td className="px-4 h-11">customer.email</td>
                <td className="px-4 h-11">customer.address</td>
                <td className="px-4 h-11">
                  {true ? <Tag color="green">Đang hoạt động</Tag> : <Tag color="red">Ngừng hoạt động</Tag>}
                </td>
                <td className="px-4 h-11">
                  <Dropdown
                    menu={{
                      items: options,
                    }}
                    placement="bottom"
                    trigger={['click']}
                  >
                    <Button className="border-none shadow-none focus:shadow-none focus:bg-none">Trạng thái</Button>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center ">
          <div></div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 border flex items-center justify-center rounded cursor-pointer hover:bg-[#dadada]">
                <IoIosArrowBack />
              </div>
              <div className="h-8 w-8 border flex items-center justify-center rounded cursor-pointer hover:bg-[#dadada]">
                1
              </div>
              <div className="h-8 w-8 border flex items-center justify-center rounded cursor-pointer hover:bg-[#dadada]">
                2
              </div>
              <div className="h-8 w-8 border flex items-center justify-center rounded cursor-pointer hover:bg-[#dadada]">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
        {false && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <form className="bg-white px-6 py-5 rounded-lg w-full max-w-md">
              <header className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-4">Thêm mới khách hàng</h2>
                <IoClose size={24} className="cursor-pointer hover:opacity-70" />
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
}
