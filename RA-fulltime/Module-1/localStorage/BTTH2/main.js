let mainForm = document.getElementById("main-form");
let error = "";
let errorContainer = document.querySelector(".error");
mainForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = mainForm.email.value;
  let password = mainForm.password.value;

  //Ví dụ: Email hợp lệ (@, .com, .vn, .net)
  //Ví dụ: Pass hợp lệ phải có từ 8-20 ký tự, bao gồm viết hoa , kí tự biệt và 1 số

  // Kiểm tra chuỗi ứng với 1 mẫu quy tắc nào đó sử dựng regular expression(regex)
  let passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!emailRegex.test(email)) {
    error += "Email không hợp lệ<br/>";
  }
  if (!passRegex.test(password)) {
    error += "Password không hợp lệ";
  }
  if (passRegex.test(password) && emailRegex.test(email)) {
    error = "";
  }
  if (error) {
    errorContainer.classList.remove("hide");
    errorContainer.innerHTML = error;
  } else {
    errorContainer.classList.add("hide");
    errorContainer.innerHTML = error;
    //submit logic
    //tạo ra 1 user mời à lưu vào danh sách users trong localstorage
    //Diều hướng người dùng vào trang chủ của ứng dụng web
    window.location.href = "https://cafef.vn/"
  }
});
