import React, { useState } from "react";

function Th6() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" onChange={handleEmailChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel   " onChange={handlePhoneChange} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Th6;
