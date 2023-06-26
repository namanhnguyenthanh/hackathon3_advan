import "./App.css";
import MD02S01BTBai03 from "./components/BaiTap/MD02S01BTBai03";
import MD02S01BTBai02 from "./components/BaiTap/MD02S01BTBai02";
import MD02S01BTBai01 from "./components/BaiTap/MD02S01BTBai01";
import DemoJSX from "./components/DemoJSX";
import ParentComp from "./components/ParentComp";
import MD02S01BTBai04 from "./components/BaiTap/MD02S01BTBai04";
import MD02S01BTBai05 from "./components/BaiTap/MD02S01BTBai05";

function App() {
  return (
    <div>
      {/* gọi components để sử dụng */}
      {/* <DemoJSX/> */}
      <ParentComp />
      {/* <MD02S01BTBai01/> */}
      {/* <MD02S01BTBai02/> */}
      {/* <MD02S01BTBai03/> */}
      {/* <MD02S01BTBai04/> */}
      {/* <MD02S01BTBai05/> */}
    </div>
  );
}

export default App;
