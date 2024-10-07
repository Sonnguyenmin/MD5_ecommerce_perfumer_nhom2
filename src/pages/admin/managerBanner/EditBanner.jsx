import React from 'react';
import { Button, Input } from 'antd';
import { IoClose } from 'react-icons/io5';

export default function EditBanner({
  banner,
  handleEditBanner,
  handleChangeInput,
  handleGetFile,
  urlImageError,
  setIsFormEdit,
  baseId,
}) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditBanner({ baseId });
          }}
          className="bg-white px-6 py-5 rounded-lg w-full max-w-[500px] z-[1000]"
        >
          <header className="flex items-center justify-between">
            <h2 className="text-3xl font-bold mb-4">Edit banner</h2>
            <IoClose onClick={() => setIsFormEdit(false)} size={24} className="cursor-pointer hover:opacity-70" />
          </header>

          <div className="mb-[20px] relative">
            <label htmlFor="bannerName" className="block font-medium mb-2 text-[1.3rem]">
              Tên banner:
            </label>
            <Input
              onChange={handleChangeInput}
              name="bannerName"
              id="bannerName"
              value={banner.bannerName}
              className="h-[40px]"
              autoComplete="bannerName"
            />
          </div>

          <div className="relative">
            <label htmlFor="urlImage" className="block font-medium mb-2 text-[1.3rem]">
              Ảnh banner: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
            </label>
            {banner.urlImage && (
              <div className="mb-3">
                <img src={banner.urlImage} alt="Banner cũ" className="w-full h-auto rounded-lg" />
                <p className="text-sm text-gray-500">Ảnh hiện tại</p>
              </div>
            )}

            <input type="file" onChange={handleGetFile} name="urlImage" id="urlImage" />
            {urlImageError && (
              <p className="absolute top-[100%] text-[--primary-user-color] text-[1.2rem] font-medium fadeInError">
                {urlImageError}
              </p>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <Button htmlType="button" onClick={() => setIsFormEdit(false)}>
              Hủy
            </Button>

            <Button type="primary" htmlType="submit">
              Sửa
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
