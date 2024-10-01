import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // Hàm xử lý sự kiện cuội trang
    const handleScroll = () => {
      // Kiểm tra vị trí thanh cuộn
      if (window.scrollY > 50) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    //Gắn sự kiện cuộn trang
    window.addEventListener('scroll', handleScroll);

    // Cleanup function Hàm dọn dẹp loại bỏ sự kiện khi component bị hủy
    return () => {
      removeEventListener('scroll', handleScroll);
    };
  });

  // Quay về đầu trang khi click
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {isShow && (
        <button
          onClick={handleBackToTop}
          className="fixed right-[30px] bottom-[30px] px-4 py-4 bg-[var(--plus-user-color)] rounded-[5px] z-[1000]"
        >
          <i className="uil uil-angle-up flex items-center justify-center font-bold text-[24px] text-[var(--white-user-color)]"></i>
        </button>
      )}
    </>
  );
}
