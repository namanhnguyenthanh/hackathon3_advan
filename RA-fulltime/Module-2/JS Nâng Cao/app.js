// 1. Map
// Thực hiện 1 hàm callback (()=>) duyệt qua các phần tử và tạo ra mảng mới
// Map nhận 3 tham số: 1 là element, 2 là index, 3 là numbers

// ví dụ:
// let numbers = [1, 2, 3, 4, 5];
//             0, 1, 2, 3, 4 length -1
// let numbersList = numbers.map((element, index) => {
//   return element * 2;
// });
// console.log(numbersList);
// for (let i = 0; i < numbers.length; i++) {
//   a = numbers[i] * 2;
// }
// console.log(a);
//////////////////////////////////////////////////////////////////

//2. foreach
// Thực hiện 1 hàm callback duyệt qua các phần tử mà không tạo ra mảng mới
// ví dụ:
// let items = numbers.forEach((element, index) => element * 2);
//////////////////////////////////////////////////////////////////

//3. find
// Duyệt qua các phần tử trong mảng nếu thỏa mãn điều kiện sẽ trả về phần tử đầu tiện thỏa mãn
// ví dụ:
// let newnumber = numbers.find((numbers) => numbers % 2 == 0);
// console.log(newnumber);
//////////////////////////////////////////////////////////////////

//4. filter
// Duyệt qia các phần tử trong mảng, trả về tất cả phần tử thỏa mãn điều kiện
// ví dụ
// let newnumber = numbers.filter((numbers) => numbers % 2 == 0);
// console.log(newnumber);
//////////////////////////////////////////////////////////////////

//5. Arrow Function
// Viết tắt của function bình thường
// function f() {
//   console.log(1);
// }
// f();
// const k = () => {
//   return console.log(2);
// };
// k();
//////////////////////////////////////////////////////////////////

//6. Destructuring
// ví dụ:
// let numbers = [1, 2, 3, 4, 5];
// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];
// console.log(a, b, c);
// let [a, b, c, d, e, f] = numbers;
// console.log(a, c, e, f);

// object
// let people = {
//   name: "Nam Anh",
//   age: 25,
// };
// let { name, age, age2 } = people;
// console.log(name, age, age2);
//////////////////////////////////////////////////////////////////

//7. Enhanced object literals
// + Định nghĩa key: value cho object
// + Định nghĩa biến  cho object

// let name = "Nam Anh";
// let age = 25;
// let course = "ReactJS";

// let people = {
//   name,
//   age,
//   [course]: "JS",
// };
// console.log(people);
//////////////////////////////////////////////////////////////////

//8. Rest Parameters
// Trả về tham số nhận được khi sử dụng với Destructuring
// function sum(a, ...rest) {
//   console.log(a);
//   console.log(rest);
// }
// sum(1, 2, 3);
// let arr = [1, 2, 3, 4];
// let [a, b, ...c] = arr;
// console.log(a, b, ...c);
//////////////////////////////////////////////////////////////////

//9. Spread
// ví dụ:
// let course1 = ["PHP", "ReactJS"];
// let course2 = ["HTML", "CSS", "JS"];
// let course = [...course1, ...course2];
// console.log(course);
