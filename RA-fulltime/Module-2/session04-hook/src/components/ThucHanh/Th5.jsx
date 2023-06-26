import React, { useState } from "react";

function Th5() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Peter", age: 35 },
    { name: "Jane", age: 40 },
  ]);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={handleFilterChange} />
      <ul>
        {filteredData.map((item, i) => (
          <li key={i}>
            {item.name} {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Th5;
