import React from 'react';
import { Button, Input } from 'antd';
import { IoClose } from 'react-icons/io5';

export default function EditBrand({
  handleChangeInput,
  brand,
  setIsFormEdit,
  handleEditBrand,
  brandNameError,
  baseId,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEditBrand({ baseId });
        }}
        className="bg-white px-6 py-5 rounded-lg w-full max-w-[500px] z-[1000]"
      >
        <header className="flex items-center justify-between">
          <h2 className="text-3xl font-bold mb-4">Sửa thuowg hiệu</h2>
          <IoClose onClick={() => setIsFormEdit(false)} size={24} className="cursor-pointer hover:opacity-70" />
        </header>

        <div className="mb-[20px] relative">
          <label htmlFor="brandName" className="block font-medium mb-2 text-[1.3rem]">
            Tên danh mục: <span className="text-[1.5rem] text-[var(--primary-user-color)]">&#42;</span>
          </label>
          <Input
            onChange={handleChangeInput}
            name="brandName"
            id="brandName"
            className="h-[40px]"
            autoComplete="brandName"
            status={brandNameError ? 'error' : ''}
            value={brand.brandName}
          />
          {brandNameError && (
            <p className="absolute top-[100%] text-[--primary-user-color] text-[1.2rem] font-medium fadeInError">
              {brandNameError}
            </p>
          )}
        </div>

        <div className="mb-[20px]">
          <label htmlFor="description" className="block font-medium mb-2 text-[1.3rem]">
            Mô tả:
          </label>
          <Input.TextArea
            onChange={handleChangeInput}
            autoComplete="description"
            name="description"
            value={brand.description}
          />
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
  );
}