import '../assets/css/conteudo.css'
import setinha from '../assets/img/Geral/seta-baixo.png';

export default function Conteudo(props) {
    return(
        <div>
            <div className='title'>
                <h2>Galeria de Filmes</h2>
                <button className='btnFiltro'>Filtrar <img src={setinha} alt=""/></button>
            </div>
        </div>
    )
}