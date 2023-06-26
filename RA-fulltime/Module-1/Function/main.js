// let numberOne = 1;
// let numberTwo = 2;
// // let numberThree = numberOne + numberTwo;
// let numberFour = 4;
// let numberFive = 5;
// // let numberSix = numberFour + numberFive

// // Function tình tổng 2 số

// function tinhTongHaiSo(numberOne, numberTwo) {
//   let sum = numberOne + numberTwo;
//   return sum;
// }
// console.log("tính tổng hai số 1 và 2", tinhTongHaiSo(numberOne, numberTwo));
// console.log("tính tổng hai số 1 và 2", tinhTongHaiSo(numberFour, numberFive));

// let lopHocRikkie = ["1", "2", "3", "4", "5"];
// function themHocVien(hocVien) {
//   let result = lopHocRikkie.push(hocVien);
//   return lopHocRikkie;
// }
// console.log(themHocVien("6"));
// // khi mà mình tạo function lúc truyền học viên vào mình gọi tham số (param)
// // Khi mà mình gọi function lúc truyền vào là đối số

// // express function
// function themHocVien(hocVien) {
//   lopHocRikkie.push(hocVien);
//   return lopHocRikkie;
// }
// console.log(themHocVien("7"));

// // arrow function

// const xoaHocVien = (hocVien) => {
//   for (let i = 0; i < lopHocRikkie.length; i++) {
//     if (hocVien == lopHocRikkie[i]) {
//       lopHocRikkie.splice(i, 1);
//       break;
//     }
//   }
//   return lopHocRikkie;
// };
// console.log(xoaHocVien("1"));

// // Phạm vi của biến trong function

// //let: nó không thể khai báo lại, gán lại giá trị được,
// //const: không thể khai báo cũng như không thể gán
// //var: có thể gán mà cũng có thể khai báo

// // ===> hoisting
// // cả let và const: hoisting tại chỗ
// // var: hoisting lên trên đầu
// console.log(person3);
// let person = "a";
// const person2 = "b";
// var person3 = "c";

// console.log(person, person2);
// console.log(person3);

// // Phfunction themHocVien(hocVien) {
// function themHocVien(hocVien) {
//   let hocVienCaBiet = "8";
//   lopHocRikkie.push(hocVien);
//   return lopHocRikkie;
// }
// console.log(themHocVien("8"));

//Luyện Tập

// let numbers = prompt("Nhập vào một chuỗi số ngăn cách nhau bởi dấu phẩy.");

// function findMin(numberList) {
//   let numbersArr = numberList.split(",");
//   let min = numbersArr[0];
//   for (let i = 1; i < numbersArr.length; i++) {
//     if (numbersArr[i] < min) {
//       min = numbersArr[i];
//     }
//   }
//   return min;
// }
// findMin(numbers);

// console.log(min);
////////////////////////////////////////////////////////////////////

//Ví dụ 1
// let todoList = ["Go to work at 8am", "Go to slerp at 12pm"];
// let numbers = [1, 2, 3, 4, 5, 6];
// //Khai báo hàm
// function printArr(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(`${i + 1}.${arr[i]}`);
//   }
// }
// Thực thi hàm
// printArr(todoList);

// printArr(numbers);

// printArr(["abc", "xyz", "123", "456"]);

//Ví dụ 2
// function Hello(name) {
//   return "Hello" + name;
// }
// console.log(Hello("World"));
// alert(Hello("World 1"));
// let sentence = Hello("World 2");

// if (sentence === "HelloWorld 2") {
//   console.log("1");
// } else {
//   console.log("2");
// }

//Luyện tập

let word = prompt("Input word");
let reverseWord = word.split("").reverse().join("");
console.log(reverseWord);
console.log(word);
if (reverseWord === word) {
  console.log("Đây là chuỗi palindrome");
} else {
  console.log("Dây không phải chuỗi palindrome");
}
