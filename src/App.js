import {Routes, Route} from 'react-router-dom'
import './App.css';
import Admin from './screens/Admin';
import Welcome from './screens/Welcome';
import Accueil from './screens/Accueil';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/panneau-de-controle" element={<Admin />} />
        <Route path="/accueil" element={<Accueil />} />

    </Routes>
    </div>
  );
}

export default App;
