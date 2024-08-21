import React, { useState, useEffect } from 'react';

const PrevisaoDoTempo = () => {
  const [cidade, setCidade] = useState('');
  const [dadosTempo, setDadosTempo] = useState(null);
  const [erro, setErro] = useState('');
  const [busca, setBusca] = useState(false);

  // Função para lidar com a mudança no campo de entrada da cidade
  const lidarMudancaCidade = (e) => {
    setCidade(e.target.value);
  };

  // Função para lidar com o clique do botão de busca
  const lidarBusca = () => {
    if (!cidade) {
      setErro('Por favor, digite o nome de uma cidade');
      return;
    }
    setBusca(true);
  };

  // useEffect para buscar a previsão do tempo sempre que a cidade mudar
  useEffect(() => {
    const buscarPrevisao = async () => {
      try {
        // Fazendo a requisição para a API do Weatherbit
        const resposta = await fetch(`https://api.weatherbit.io/v2.0/current?city=${cidade}&key=2ecd585f07584c53b5d8da23392aa663`);
        // Verifica se a resposta é válida
        if (!resposta.ok) {
          throw new Error('Cidade não encontrada ou chave inválida');
        }
        // Converte a resposta para JSON
        const dados = await resposta.json();
        // Atualiza o estado com os dados da previsão
        setDadosTempo(dados);
        setErro('');
      } catch (err) {
        // Atualiza o estado com a mensagem de erro
        setErro(err.message);
        setDadosTempo(null);
      }
    };

    // Executa a busca se a busca estiver ativada
    if (busca) {
      buscarPrevisao();
      setBusca(false);
    }
  }, [busca, cidade]);

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input
        type="text"
        value={cidade}
        onChange={lidarMudancaCidade}
        placeholder="Digite o nome da cidade"
      />
      <button onClick={lidarBusca}>Buscar</button>
      {erro && <p>{erro}</p>}
      {dadosTempo && (
        <div className="previsao">
          <h2>{dadosTempo.data[0].city_name}</h2>
          <p>Temperatura: {dadosTempo.data[0].temp}°C</p>
          <p>Condições Climáticas: {dadosTempo.data[0].weather.description}</p>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${dadosTempo.data[0].weather.icon}.png`}
            alt={dadosTempo.data[0].weather.description}
          />
        </div>
      )}
    </div>
  );
};

export default PrevisaoDoTempo;
