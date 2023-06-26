let input = prompt("Điền vào câu cần chuẩn hóa");
function chuanHoaCau(cau) {
  cau = cau.trim();

  let tuArr = cau.split(" ");

  for (let i = 0; i < tuArr.length; i++) {
    let tu = tuArr[i];
    let chuCaiDau = tu.charAt(0).toUpperCase();
    let chuCaiConLai = tu.slice(1).toLowerCase();
    tuArr[i] = chuCaiDau + chuCaiConLai;
  }

  let cauChuanHoa = tuArr.join(" ");

  return cauChuanHoa;
}

let cauGoc = input;
let cauChuanHoa = chuanHoaCau(cauGoc);

console.log("Câu gốc: " + cauGoc);
alert("Câu chuẩn hóa: " + cauChuanHoa);
