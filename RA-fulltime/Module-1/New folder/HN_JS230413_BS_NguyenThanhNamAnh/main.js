

const button = document.querySelector(".btn");
const nameSelector = document.querySelector(".fullname");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const address = document.querySelector(".address");
const tableContainer = document.querySelector("table");
const deleteBtn = document.querySelector(".deleteBtn");
const updateBtn = document.querySelector(".updateBtn");
const sortButton = document.querySelector(".sortBtn");

let index = 0;

button.addEventListener("click", function (event) {
  const nameValue = nameSelector.value;
  const emailValue = email.value;
  const phoneValue = phone.value;
  const addressValue = address.value;

  const genderValue = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  if (event.target.classList.contains("update")) {
    const trUpdate = event.target
      .closest("body")
      .querySelector("table tr.update");
    trUpdate.querySelector(".name").textContent = nameValue;
    trUpdate.querySelector(".email").textContent = emailValue;
    trUpdate.querySelector(".phone").textContent = phoneValue;
    trUpdate.querySelector(".address").textContent = addressValue;
    trUpdate.querySelector(".gender").textContent = genderValue;
  } else {
    index = index + 1;
    const html = `
  <tr>
          <td class="id">${index}</td>
          <td class="name">${nameValue}</td>
          <td class="email">${emailValue}</td>
          <td class="phone">${phoneValue}</td>
          <td class="address">${addressValue}</td>
          <td class="gender">${genderValue}</td>
          <td><button class="deleteBtn">Delete</button><button class='updateBtn'>Edit</button></td>
        </tr>`;
    console.log(html);
    tableContainer.insertAdjacentHTML("beforeend", html);
    nameSelector.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    genderValue.value = "";
  }
});

tableContainer.addEventListener("click", function (event) {
  const clicked = event.target;
  if (event.target.classList.contains("deleteBtn")) {
    event.target.closest(`tr`).remove();
  }
  if (event.target.classList.contains("updateBtn")) {
    const clickedTr = clicked.closest(`tr`);
    const valueName = clickedTr.querySelector(".name").textContent;
    nameSelector.value = valueName;
    const valueEmail = clickedTr.querySelector(".email").textContent;
    email.value = valueEmail;
    const valuePhone = clickedTr.querySelector(".phone").textContent;
    phone.value = valuePhone;
    const valueAddress = clickedTr.querySelector(".address").textContent;
    address.value = valueAddress;
    const valueGender = clickedTr.querySelector(".gender").textContent;
    address.value = valueGender;
    button.textContent = "Update";
    button.classList.add("update");
    clickedTr.classList.add("update");
  }
});

