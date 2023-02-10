import "./App.css";
import ColorButton from "./components/Button/ColorButton";
import SignupFormBootstrap from "./components/Register/SignupBootstrap";
import SignupForm from "./components/Register/SignupForm";

function App() {
  return (
    <div className="App">
      {/* <SignupForm /> */}
      <SignupFormBootstrap />
      {/* <ColorButton /> */}
    </div>
  );
}

export default App;
