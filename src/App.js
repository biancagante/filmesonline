import './App.css';
import Navbar from './components/INICIAL/navbar';
import Banner from './components/INICIAL/topo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <Banner/>
      </div>
    </div>
  );
}

export default App;