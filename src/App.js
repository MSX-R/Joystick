import {Routes, Route} from 'react-router-dom'
import './App.css';
import Choice from './Public/screens/Choice';
import Welcome from './Public/screens/Welcome';
import Visiteurs from "./Public/screens/Visiteurs";
import PanelAdmin from "./Admin/screens/PanelAdmin"
import Marchands from "./Public/screens/Marchands";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/visiteurs" element={<Visiteurs />} />
        <Route path="/marchands" element={<Marchands />} />
        <Route path="/admin" element ={<PanelAdmin />} />
    </Routes>
    </div>
  );
}

export default App;
