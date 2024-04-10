import './App.css';
import Correspondence from './Correspondence';
import Blackbox from './Blackbox';
import Home from './Home';
import Research from './Research';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/blackbox" element={<Blackbox />} />
        <Route path="/correspondence" element={<Correspondence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;