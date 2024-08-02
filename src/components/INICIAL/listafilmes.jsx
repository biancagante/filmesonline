import "../assets/css/listafilmes.css"
import beijo from "../assets/img/Geral/beijo_barbie.png"
import Cards from "./cards";
import seta from "../assets/img/Geral/seta.png"

export default function Filmes(){
    return(
        <div className="backGaleria">
            <div className="ajustar">
                <div className="txtGaleria">
                    <p className="galeriaP">Galeria de filmes</p>
                    <button className="btnFiltro">Filtrar<img className="setaImg" src={seta} alt=""/></button>
                </div>

                <Cards/>

                <div className="fraseFinal">
                    <p>
                    “All of these women are Barbie, and Barbie is all of these women. She might have started out as just a lady in a bathing suit, but she became so much more.”
                    </p>
                    <img src={beijo} alt="Beijo da Barbie"/>
                </div>  

            </div>
        </div>
    );}


function ListaFilmes(props) {
    return(
        <div>
            <img src={props.poster} alt={props.nome} />
            <p>{props.nome}</p>
            <p>{props.ano}</p>
        </div>
    )
}