import logo from "./logo.svg";
import "./App.css";
import DemoBootstrap from "./components/DemoBootstrap";
import DemoAnt from "./components/DemoAnt";
import DemoMui from "./components/DemoMui";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <DemoBootstrap />
      <DemoAnt /> */}
      <DemoMui />
    </div>
  );
}

export default App;
