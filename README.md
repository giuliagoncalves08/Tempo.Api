Introdução
Este projeto é uma aplicação React criada com Vite. A aplicação permite buscar a previsão do tempo para uma cidade específica e exibe as informações de forma clara.
1. Instalando o Vite
Para criar um novo projeto React usando Vite, primeiro, certifique-se de ter o Node.js instalado. Em seguida, abra o terminal e execute o comando para criar um novo projeto:
npm create vite@latest nome-do-projeto
cd nome-do-projeto
npm install
npm run dev
npm install react-router-dom


Hooks Utilizados
useState: Utilizado para gerenciar o estado local da aplicação, como o nome da cidade digitada e as informações da previsão do tempo.
const [cidade, setCidade] = useState('');
const [previsao, setPrevisao] = useState(null);

useEffect: Utilizado para realizar efeitos colaterais, como buscar a previsão do tempo sempre que o nome da cidade for alterado.
useEffect(() => {
  if (cidade) {
    fetch(`URL_DA_API?city=${cidade}`)
      .then(response => response.json())
      .then(data => setPrevisao(data))
      .catch(error => console.error('Erro ao buscar a previsão:', error));
  }
}, [cidade]);

 Explicação dos Comandos
BrowserRouter as Router: Envolva sua aplicação com o Router para habilitar o roteamento.
Routes: Define um conjunto de rotas.
Route: Define uma rota específica, associando um caminho a um componente.
Link: Cria links de navegação que alteram a URL e atualizam o conteúdo exibido sem recarregar a página.
