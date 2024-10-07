import React from 'react';
import { IoClose } from 'react-icons/io5';
import { Button, Input } from 'antd';

export default function AddBanner({ setIsFormAdd, handleChangeInput, handleGetFile, urlImageError, handleAddBanner }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-white px-6 py-5 rounded-lg w-full max-w-[500px] z-[1000]"
        >
          <header className="flex items-center justify-between">
            <h2 className="text-3xl font-bold mb-4">Thêm mới banner</h2>
            <IoClose onClick={() => setIsFormAdd(false)} size={24} className="cursor-pointer hover:opacity-70" />
          </header>
          <div className="mb-5">
            <label htmlFor="bannerName" className="block font-medium mb-2 text-[1.3rem]">
              Tên banner:
            </label>
            <Input
              onChange={handleChangeInput}
              name="bannerName"
              id="bannerName"
              className="h-[40px]"
              placeholder="Tên banner"
            />
          </div>
          <div className="relative">
            <label htmlFor="urlImage" className="block font-medium mb-2 text-[1.3rem]">
              Ảnh banner: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
            </label>
            <input type="file" onChange={handleGetFile} name="urlImage" id="urlImage" />
            {urlImageError && (
              <p className="absolute top-[100%] text-[--primary-user-color] text-[1.2rem] font-medium fadeInError">
                {urlImageError}
              </p>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <Button htmlType="button" onClick={() => setIsFormAdd(false)}>
              Hủy
            </Button>
            <Button onClick={handleAddBanner} type="primary" htmlType="submit">
              Thêm
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
