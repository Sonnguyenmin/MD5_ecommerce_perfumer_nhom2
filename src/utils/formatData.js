/**
 * Định dạng số tiền thành kiểu tiền tệ Việt Nam.
 * @param {number} money - Số tiền cần định dạng.
 * @returns {string} - Số tiền đã được định dạng.
 * Auth: NTSon (18/09/2024)
 */
export const formatMoney = (money) => {
  return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
};

export const formatDate = (date) => {
  const today = new Date(date);

  const day = today.getDate().toString().padStart(2, 0);
  const month = (today.getMonth() + 1).toString().padStart(2, 0);
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
};
