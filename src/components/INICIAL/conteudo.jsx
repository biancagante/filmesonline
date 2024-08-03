import '../assets/css/conteudo.css'
import setinha from '../assets/img/Geral/seta-baixo.png';
import Cards from './cards';

export default function Conteudo(props, {onNavigate}) {

    return(
        <div>
            <div className='title'>
                <h2>Galeria de Filmes</h2>
                <button className='btnFiltro'>Filtrar <img src={setinha} alt=""/></button>
            </div>
            <div div onClick={() => onNavigate()}>
            <Cards/>
            </div>
        </div>
    )
}