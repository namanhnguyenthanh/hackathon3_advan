import React, { useState } from "react";

function Th2() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !phone) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Số điện thoại không đúng định dạng.");
      return;
    }
    setSuccess(true);
  };
  return (
    <div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <div>
            <label htmlFor="name"> Họ và tên</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="address"> Địa chỉ</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              id="address"
            />
          </div>
          <div>
            <label htmlFor="phone"> Số điện thoại</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              id="phone"
            />
          </div>
          <div>
            <label htmlFor="note"> Ghi chú</label>
            <textarea onChange={(e) => setNote(e.target.value)} id="note" />
          </div>
          <button>Đặt hàng!!</button>
        </form>
      ) : (
        <div style={{ color: "green" }}>Đặt hàng thành công!</div>
      )}
    </div>
  );
}

export default Th2;
