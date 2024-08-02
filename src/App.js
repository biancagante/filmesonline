import './App.css';
import Conteudo from './components/INICIAL/conteudo';
import Navbar from './components/INICIAL/navbar';
import Banner from './components/INICIAL/topo';
import Filmes from './components/INICIAL/listafilmes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <Banner/>
        <Conteudo/>
        <Filmes/>
      </div>
    </div>
  );
}

export default App;