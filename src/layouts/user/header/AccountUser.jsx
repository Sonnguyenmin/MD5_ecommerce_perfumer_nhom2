import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AccountUser() {
  const navigate = useNavigate();
  const handleChangeForm = () => {
    navigate('/login');
  };
  return (
    <>
      <div className="h_account-icon" onClick={handleChangeForm}>
        <span>Tài khoản</span>
      </div>
    </>
  );
}
