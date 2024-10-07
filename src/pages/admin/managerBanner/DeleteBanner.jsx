import React from 'react';
import { Button, Modal } from 'antd';

export default function DeleteBanner({ isModal, handleDeleteBanner, setIsModal, baseId }) {
  return (
    <>
      <Modal
        title={<h3 className="text-[20px]">Xác nhận xóa</h3>}
        open={isModal}
        maskClosable={false}
        footer={
          <>
            <Button onClick={() => setIsModal(false)}>Hủy</Button>
            <Button danger type="primary" onClick={() => handleDeleteBanner(baseId)}>
              Xóa
            </Button>
          </>
        }
      >
        <p>Bạn có chắc chắn muốn xóa banner này không?</p>
      </Modal>
    </>
  );
}
