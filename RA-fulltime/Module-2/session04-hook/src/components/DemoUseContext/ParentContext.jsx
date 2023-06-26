import React, { createContext, useState } from "react";
import CompB from "./CompB";
export const themeContext = createContext();

function ParentContext() {
  // UseContext là 1 hook cho chúng ta cung cấp context để giúp đơn giản hóa việc chia sẻ dữ
  // liệu trong cây DOM mà không phải truyền từng cấp

  // Trường hợp 1:Truyền props
  // ParentContext => CompB =>CompC
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <div>
      <themeContext.Provider value={theme}>
        <button onClick={handleChangeTheme}>Change theme</button>
        <CompB />
      </themeContext.Provider>
    </div>
  );
}

export default ParentContext;
