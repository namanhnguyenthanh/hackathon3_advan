function getNumberOfDays(month, year) {
  const date = new Date(year, month - 1, 1);
  date.setMonth(date.getMonth() + 1);
  date.setDate(date.getDate() - 1);
  return date.getDate();
}
let month = +prompt("nhập vào tháng :");
let year = +prompt("nhập vào năm :");
const numberOfDays = getNumberOfDays(month, year);
alert(`Số ngày trong tháng ${month} năm ${year} là ${numberOfDays}`);
