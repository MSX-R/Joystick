import {Routes, Route} from 'react-router-dom'
import './App.css';
import Choice from './Public/screens/Choice';
import Welcome from './Public/screens/Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Choice" element={<Choice />} />
    </Routes>
    </div>
  );
}

export default App;
