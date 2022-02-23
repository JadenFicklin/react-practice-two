import "./App.css";
import Stylesheet from "./Stylesheet";
import Inline from "./Inline";

function App() {
  return (
    <div className="App">
      <h1>
        <Stylesheet primary={true} />
        <Inline message="Hello my friend" />
      </h1>
    </div>
  );
}

export default App;
