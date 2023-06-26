import React, { useContext } from "react";
import "./ParentContext.css";
import { themeContext } from "./ParentContext";

function CompC() {
  const theme = useContext(themeContext);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        sunt, voluptas nemo recusandae, magnam illum architecto alias asperiores
        temporibus at numquam? In earum atque velit corporis sint esse delectus
        consequuntur?
      </p>
    </div>
  );
}

export default CompC;
