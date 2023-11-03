import "./App.css";
import Labs from "./Labs";

import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";

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
    <>
      {/* <ul className="nav nav-tabs">
        <li className="nav-item">
        <Link to="" className="nav-link" >
            A3
          </Link>

        </li>
        <li className="nav-item">
          <Link to="" className="nav-link" >
            A4
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/hello" className="nav-link" >
            Hello
          </Link>

        </li>
        <li className="nav-item">
          <Link to="/kanbas" className="nav-link" >
            Kanbas
          </Link>

        </li>
      </ul> */}
      <Nav />
    </>
  );
}

export default App;
