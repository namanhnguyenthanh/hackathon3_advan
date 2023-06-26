//bt1
// let n = +prompt("Enter a number");
// if (n > 9/2) {
//   alert("Higher half of 9");
// } else {
//   alert("Lower half of 9");
// }

//bt2
// let n = +prompt("n =");
// let x = +prompt("x =");
// let sum = n / x;
// if (x > (n/2)) {
//   alert(`${x} is in higher hafl of ${n}`);
// } else {
//   alert(`${x} is in lower half of ${n}`);
// }

//bt3
// let x = +prompt("x =");
// if (x % 2 === 0) {
//   alert(`${x}is an evan number `);
// } else if (x % 2 !== 0) {
//   alert(`${x} is an odd number`);
// }

//bt4
// let mass = +prompt("Your weight in Kg?");
// let height = +prompt("let height in Cm?");
// let BMI = mass / ((height / 100) * (height / 100));
// alert(` Your BMI is ${BMI}`);
// if (BMI <= 16) {
//   alert("Mày là bộ xương à");
// } else if (BMI >= 16 && BMI <= 18.5) {
//   alert("Mày là Idol Hàn Quốc à");
// } else if (BMI >= 18.5 && BMI <= 25) {
//   alert("Mày đẹp zai đấy");
// } else if (BMI >= 25 && BMI <= 30) {
//   alert("Mày béo quá rồi đấy");
// } else if (BMI >= 30) {
//   alert("Thôi ông đừng giảm cân nữa");
// }

//bt5
// let a = +prompt("Điểm môn Toán");
// let b = +prompt("Điểm môn Lý");
// let c = +prompt("Điểm môn Hóa");
// let d = +prompt("Điểm môn Văn");
// let e = +prompt("Điểm môn Anh");
// let sum = (a + b + c + d + e) / 5;
// if (sum >= 90) {
//   alert("GRADE A");
// } else if (sum >= 80) {
//   alert("GRADE B");
// } else if (sum >= 70) {
//   alert("GRADE C");
// } else if (sum >= 60) {
//   alert("GRADE D");
// } else if (sum >= 40) {
//   alert("GRADE E");
// } else if (sum < 40) {
//   alert("GRADE F");
// }

//bt6
// let year = +prompt("Nhập vào số năm");
// if (year % 4 === 0 && year % 400 === 0) {
//   console.log("Là năm nhuận");
// } else {
//   console.log("Không phải năm nhuận");
// }

//bt7
// let a = +prompt("Nhập chiều cao của bạn bằng Cm:");
// if (a < 150) {
//   alert("Mày là người lùn à");
// } else if (a >= 150 && a <= 169) {
//   alert("Trông mày cũng tạm.Cho 3 điểm");
// } else if (a >= 170) {
//   alert("Mày trông cũng được đấy");
// }

//bt8
// let a = +prompt("a =");
// let b = +prompt("b =");
// if (a > b) {
//   console.log(`${a}`);
// } else if (b > a) {
//   console.log(`${b}`);
// }

//bt9
// let a = +prompt("a =");
// let b = +prompt("b =");
// let c = prompt("Nhập vào phép tính");
// switch (c) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   case "%":
//     console.log(a % b);
//     break;
//   case "**":
//     console.log(a ** b);
//     break;
//   default:
//     console.log("nhập lại phép tính");
// }

//bt12
//(switch-case)
// let day = +prompt(" Nhập vào ngày của tháng");
// let month = +prompt("Nhập vào tháng");
// Đuyệt ngày, tháng và in ra cung hoàng đạo
// switch (month) {
//   case 1:
//     switch (day) {
//       case 1:
//         break;
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//       case 7:
//       case 8:
//       case 9:
//       case 10:
//       case 11:
//       case 12:
//       case 13:
//       case 14:
//       case 15:
//       case 16:
//       case 17:
//       case 18:
//       case 19:
//         alert("Cung Ma kết");
//         break;
//       case 20:
//       case 21:
//       case 22:
//       case 23:
//       case 24:
//       case 25:
//       case 26:
//       case 27:
//       case 28:
//       case 29:
//       case 30:
//       default:
//         alert("Cung Bảo Bình");
//     }
//     break;
//   case 2:
//     switch (day) {
//         case 1:
//           break;
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//         case 18:
//             alert("Cung Bảo Bình");
//           break;
//         case 19:
//         case 20:
//         case 21:
//         case 22:
//         case 23:
//         case 24:
//         case 25:
//         case 26:
//         case 27:
//         case 28:
//         default:
//           alert("Cung Song Ngư");
//       }
//     break;
//   case 3:
//     break;
//   case 4:
//     break;
//   case 5:
//     break;
//   case 6:
//     break;
//   case 7:
//     break;
//   case 8:
//     break;
//   case 9:
//     break;
//   case 10:
//     break;
//   case 11:
//     break;
//   default:
//     break;
// }
// (if-else)
let day = +prompt(" Nhập vào ngày sinh");
let month = +prompt("Nhập vào tháng sinh");
// Cung Bạch Dương
if (
  (month == 3 && day >= 21 && day <= 31) ||
  (month == 4 && day >= 1 && day <= 19)
) {
  alert("Cung Bạch Dương");
}
