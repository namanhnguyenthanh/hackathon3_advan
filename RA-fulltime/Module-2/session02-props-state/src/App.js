import logo from "./logo.svg";
import "./App.css";
import ParentComp from "./components/ParentComp";
import Event from "./components/Event";
import Th2 from "./components/Th2";
import Th3 from "./components/Th3";
import Th4 from "./components/Th4";
import Th5 from "./components/Th5";
import Th6 from "./components/Th6";
import Th7 from "./components/Th7";
import Clock from "./components/BaiTap1/Clock";

function App() {
  return (
    <div className="App">
      {/* <ParentComp /> */}
      {/* <Event /> */}
      {/* <Th2 text="Click Me" background="red" color="white" /> */}
      {/* <Th3 /> */}
      {/* <Th4 /> */}
      {/* <Th5 /> */}
      {/* <Th6 /> */}
      {/* <Th7 /> */}
      <Clock />
    </div>
  );
}

export default App;
