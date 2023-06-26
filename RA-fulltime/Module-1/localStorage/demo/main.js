// // let bookmarks = [
//   {
//     id: 1,
//     title: "Google - Search Engine",
//     url: "htps://www.google.com",
//   },
//   {
//     id: 2,
//     title: "Youtube - Video Sharing",
//     url: "https://www.youtube.com",
//   },
//   {
//     id: 3,
//     title: "Printerest - Photo Sharing",
//     url: "https://www.printerest.com",
//   },
// ];
// Local storage - kho lưu trữ dữ liệu trên trình duyệt
// Lấy dữ liệu
// console.log(JSON.parse(localStorage.bookmarks));
// console.log(localStorage.loginState);

// console.log(localStorage.getItem("loginState"));

//Ghi đè lại dữ liệu

// localStorage.bookmarks = JSON.stringify(bookmarks);
// localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

//B1:
//lấy dứ liệu từ kho lưu trữ(Local Storage)
let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
let main = document.querySelector(".main");
let addBtn = document.getElementById("add-btn");
let modalAdd = document.querySelector(".modal-add");
let mainForm = document.getElementById("main-form");
let closeBtn = document.querySelector(".closeBtn");

//B2:
// Đổ dữ liệu từ kho lưu trữ ra màn hình trình duyệt
function renderBookmarks() {
  main.innerHTML = "";
  bookmarks.forEach(function (element, index) {
    let bookmarkItem = `
          <div id="${element.id}" class="bookmark-item">
            <a href="${element.url}">${element.title}</a>
            <i class="bi bi-x-square-fill deleteBtn"></i>
          </div>`;

    main.innerHTML = main.innerHTML + bookmarkItem;
  });
}
renderBookmarks();
//B3:Thực hiện code các tính năng còn lại cảu trang web
//B4: Tình nắng thêm mới bookmark vào trong danh sách bookmarks ở trong LocalStorage
addBtn.addEventListener("click", function () {
  modalAdd.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalAdd.style.display = "none";
});

mainForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // logic fronend
  // Thêm dữ liệu vào trong local storage tại mảng bookmarks
  let newBookmark = {
    id: Math.floor(Math.random() * 1000000000000000),
    title: mainForm.web.value,
    url: mainForm.url.value,
  };
  console.log(newBookmark);
  bookmarks.push(newBookmark);
  // Ghi dè lại biến bookmarks vào trong trường bookmarks vào trong Local Storage
  localStorage.bookmarks = JSON.stringify(bookmarks);
  // Thực hiện render lại toàn bộ mảng bookmarks bằng mảng bookmarks
  renderBookmarks();
  modalAdd.style.display = "none";
});

main.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    // Xóa và ghi đè bookmarks vào trong trường bookmarks ở trong local storage
    let findIndex = bookmarks.findIndex(function (element, index) {
      return e.target.parentElement.id == element.id;
    });
    console.log(findIndex);
    bookmarks.splice(findIndex, 1);
    localStorage.bookmarks = JSON.stringify(bookmarks);
    renderBookmarks();
    // thực hiện render lại toàn bộ bookmarks item thông qua mảng book marks vừa đc chỉnh sửa
  }
});

// FORM - Biểu mẫu

//  FORM HTML sẽ dùng dder thu thập thông tin người dừng
// nhập vào trong các ô input

//  Sau đó form tiền hành gửi submit các thông tin đó đến một địa
// chỉ nhất định (tại server) để lưu trữ lại các thông tin trong các
// ô input

//    Mặc định form HTML sẽ có 2 attribute
// - method = ["POST", "GET"]
// - action = "địa chỉ thông tin được gửi đến"
// Định nghĩa ra 1 địa chỉ trên  server thông tin từ form có thể gửi đến

//  Khi không khai báo gì trong action thì mặc định thông tin sẽ được gửi đến địa chỉ hoast khai báo của mình
