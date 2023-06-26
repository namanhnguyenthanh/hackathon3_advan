//Array
// Cú pháp
let peoplList = ["abc", "cvd", "xyz"];

// truy xuất phần tử
// kiểm tra phẩn tử có trong mảng hay không
for (let i = 0; i < peoplList.length; i++) {
  if (peoplList[i] == "xyz") {
    console.log(true);
    break;
  } else {
    continue;
    console.log(false);
  }
}
