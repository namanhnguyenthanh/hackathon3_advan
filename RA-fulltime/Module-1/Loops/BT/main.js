// BT1
// let n = +prompt("Nhập vào 1 số n:");
// let num = 0;
// if (n % 1 == 0 && n > 0) {
//   for (let i = 0; i <= n; i++) {
//     num = num + i;
//   }
// }
// alert("A:" + num);

// BT2
// let n = +prompt("Nhập vào 1 số n:");
// let num = 0;
// if (n % 1 == 0 && n > 0) {
//   for (let i = 1; i <= n; i++) {
//     num = num * i;
//   }
// }
// alert("B:" , num);

// BT3
// let n = +prompt("Nhập vào 1 số n");
// let num = 0;

// if (!isNaN(n) && n > 0 && Number.isInteger(n)) {
//   for (let i = 1; i <= n; i++) {
//     num += 1 / i;
//   }
// }
// alert("C:" + num);

// BT4
// let n = +prompt("Nhập vào 1 số n");
// let num = 0;

// if (!isNaN(n) && n > 1 && Number.isInteger(n)) {
//   for (let i = 2; i <= n; i++) {
//     num += (1 / (i - 1)) * (1 / i);
//   }
// }
// alert("D:" + num);

// BT5
// let n = parseInt(prompt(`Nhập vào số n :`));
// if (n > 0 && n <= 10) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`Bảng cửu chương là : ${n} x ${i} = ${n * i}`);
//   }
// }

// BT6
// let n = +prompt("Please input n:");
// if (Number.isInteger(n) && n > 0) {
//   let a = 0;
//   let b = 1;
//   let sequence = "0,1";
//   for (let i = 1; i < n; i++) {
//     let temp = b;
//     b = b + a;
//     a = temp;
//     sequence = sequence + `,${b}`;
//   }
//   console.log(sequence);
// } else {
//   console.log("n is invalid");
// }

//BT10
let n = +prompt("Please input n:");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = n; j >= i; j--) {
    row = row + ` ${j} `;
  }
  console.log(row);
}
