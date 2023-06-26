let result = 20;
let answer = +prompt("Nhập vào số cần đoán");
if (answer > result) {
  console.log("Lớn quá");
} else if (answer < result) {
  console.log("nhỏ quá");
} else if (answer == result) {
  console.log("Bingo");
} else {
  console.log("nhập sai");
}
