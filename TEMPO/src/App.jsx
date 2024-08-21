import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Componentes/home';
import PrevisaoDoTempo from './Componentes/tempo';

// Componente principal do aplicativo com rotas
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tempo" element={<PrevisaoDoTempo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;