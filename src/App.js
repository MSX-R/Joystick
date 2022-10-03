import { Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./screens/Admin";
import Intro from "./screens/Intro";
import Connection from "./screens/Connection";
import Reglement from "./screens/Reglement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />}>
          <Route path="" element={""}></Route>
        </Route>

        <Route path="/reglement" element={<Reglement />}/>

        <Route path="/panneau-de-controle" element={<Admin />} />
        <Route path="/connection" element={<Connection />} />
      </Routes>
    </div>
  );
}

export default App;
