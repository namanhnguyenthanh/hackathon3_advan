// Cách 1
// let arr = [1, 9, 5, 4, 10];
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log("Mảng sắp xếp theo thứ tự giảm dần: " + arr);

//Cách 2
let array = prompt("Nhập vào một chuỗi số: ");
let arr = array.split(",");

arr.sort((a, b) => b - a);
let arr2 = arr.join(",");

alert(`Mảng giảm dần là: [${arr2}]`);
