let numbers = prompt("Nhập vào một chuỗi số ngăn cách nhau bởi dấu phẩy.");
let numbersArr = numbers.split(",");
let max = +numbersArr[0];
for (let i = 1; i < numbersArr.length; i++) {
  if (+numbersArr[i] > max) {
    max = +numbersArr[i];
  }
}
alert(max);
