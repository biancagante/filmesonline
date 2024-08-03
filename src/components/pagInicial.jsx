import './assets/css/conteudo.css';
import Barbie from "./INICIAL/barbie";
import Navbar from "./INICIAL/navbar";
import Banner from "./INICIAL/topo";
import Conteudo from "./INICIAL/conteudo";

export default function Inicial() {
    return (
        <div className='app'>
            <Navbar/>
            <div className="main">
                <Barbie/>
                <Banner/>
                <Conteudo/>
            </div>
        </div>
    )
}