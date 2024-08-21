import React from 'react';
import { Link } from 'react-router-dom';

// Página inicial do aplicativo
const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bem-vindo ao Aplicativo de Previsão do Tempo</h1>
      {/* Link para a página de previsão do tempo */}
      <Link to="/tempo">Ver Previsão do Tempo</Link>
    </div>
  );
};

export default Home;