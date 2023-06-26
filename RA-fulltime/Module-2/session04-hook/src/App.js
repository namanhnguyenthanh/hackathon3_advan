import logo from "./logo.svg";
import "./App.css";
// import DemouseState from "./components/DemouseState";
// import DemoUseEffect from "./components/DemoUseEffect";
import Th1 from "./components/ThucHanh/Th1";
import Th2 from "./components/ThucHanh/Th2";
import Th3 from "./components/ThucHanh/Th3";
import Th4 from "./components/ThucHanh/Th4";
import Th5 from "./components/ThucHanh/Th5";
import Th6 from "./components/ThucHanh/Th6";
import Th7 from "./components/ThucHanh/Th7";
import Th8 from "./components/ThucHanh/Th8";
import Bt1 from "./components/BaiTap/Bt1";
import Bt2 from "./components/BaiTap/Bt2";
import TodoList from "./components/BaiTapTrenLop/TodoList";
import IndexColor from "./components/LiftingStateUp/IndexColor";
import ParentContext from "./components/DemoUseContext/ParentContext";
import DemouseRef from "./components/DemoUseContext/DemouseRef";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <DemouseState /> */}
      {/* <DemoUseEffect /> */}
      {/* <Th1 /> */}
      {/* <Th2 /> */}
      {/* <Th3 /> */}
      {/* <Th4 /> */}
      {/* <Th5 /> */}
      {/* <Th6 /> */}
      {/* <Th7 /> */}
      {/* <Th8 /> */}
      {/* <Bt1 /> */}
      {/* <Bt2 /> */}
      {/* <TodoList /> */}
      {/* <IndexColor /> */}
      {/* <ParentContext /> */}
      <DemouseRef />
    </div>
  );
}

export default App;
