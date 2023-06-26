//BT1
// var input = prompt(" Nhập vào một chuỗi số ngăn cách nhau bởi dấu phẩy.");
// var number = input.split(",");
// var sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum += +number[i];
// }
// alert(" Kết quả là" + sum);

//BT2
// let numbers = prompt("Nhập vào một chuỗi số ngăn cách nhau bởi dấu phẩy.");
// let numbersArr = numbers.split(",");
// let min = numbersArr[0];
// for (let i = 1; i < numbersArr.length; i++) {
//   if (numbersArr[i] < min) {
//     min = numbersArr[i];
//   }
// }
// alert("min = " + min);

//BT3
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let a = +prompt("Enter a number");
// let index = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === a) {
//     index = i;
//     break;
//   }
// }
// if (index === -1) {
//   alert(a + "is NOT found in my array");
// } else {
//   alert(a + " is FOUND in my array at index" + index);
// }

//BT4
// const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
// let action = prompt(
//   "Nhập C để create, nhập R để hiển thị, nhập U để update, nhập D để delete"
// ).toUpperCase();
// let result = "";
// switch (action) {
//   case "C":
//     let newTodo = prompt("Nhập việc cần làm mới");
//     let newTodo1 = newTodo.split(",");

//     let newTodoList = todoList.concat(newTodo1);
//     console.log(newTodoList);
//     for (let i = 0; i < newTodoList.length; i++) {
//       result += `${i + 1}. ${newTodoList[i]}\n`;
//     }
//     alert(result);
//     break;
//   case "R":
//     for (let i = 0; i < todoList.length; i++) {
//       result += `${i + 1}. ${todoList[i]}\n`;
//     }
//     alert(result);
//     break;
//   case "U":
//     let numberIndex = +prompt("Nhập vị trí cần update theo index");
//     if (Number.isInteger(numberIndex) && numberIndex >= 0) {
//       let infoUpdate = prompt("Nhập nội dung muốn update");
//       todoList[numberIndex] = infoUpdate;
//       for (let i = 0; i < todoList.length; i++) {
//         result += `${i + 1}. ${todoList[i]}\n`;
//       }
//       alert(result);
//     } else {
//       alert("Invalid Value");
//     }
//     break;
//   case "D":
//     let deleteIndex = +prompt("Nhập vị trí muốn xóa theo index");
//     if (Number.isInteger(deleteIndex) && deleteIndex >= 0) {
//       todoList.splice(deleteIndex, 1);
//       console.log(todoList);
//       for (let i = 0; i < todoList.length; i++) {
//         result += `${i + 1}. ${todoList[i]}\n`;
//       }
//       alert(result);
//     } else {
//       alert("Invalid Value");
//     }
//     break;
//   default:
//     alert("Invalid Value");
// }
