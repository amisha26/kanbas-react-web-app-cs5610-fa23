import "./App.css";
import Labs from "./Labs/a3";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectOptions />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/kanbas/*" element={<Kanbas />} />
      </Routes>
    </div>
  );
}

function SelectOptions() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button className="btn btn-primary">
        <Link to="/Labs" style={{ textDecoration: "none", color: "#fff" }}>
          Labs
        </Link>
      </button>

      <button className="btn btn-primary">
        <Link to="/kanbas" style={{ textDecoration: "none", color: "#fff" }}>
          Kanbas
        </Link>
      </button>
    </div>
  );
}

export default App;
