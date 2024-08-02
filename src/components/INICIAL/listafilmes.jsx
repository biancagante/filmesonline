import "../assets/css/listafilmes.css"
import beijo from "../assets/img/Geral/beijo_barbie.png"
import Cards from "./cards";
import seta from "../assets/img/Geral/seta.png"
import barbie1 from "../assets/img/Geral/pngwing.com.png"
import barbie2 from "../assets/img/Geral/pngwing.com (2).png"
import barbie3 from "../assets/img/Geral/Barbie-removebg-preview.png"

export default function Filmes(){
    return(
        <div className="backGaleria">
            <div className="ajustar">
                <div className="txtGaleria">
                    <p className="galeriaP">Galeria de filmes</p>
                    <button className="btnFiltro">Filtrar<img className="setaImg" src={seta} alt=""/></button>
                </div>

                <img className="Barbie3" src={barbie3} alt="" />

                <Cards/>

                <img className="Barbie2" src={barbie2} alt="" />

                <div className="fraseFinal">
                    <p>
                    “All of these women are Barbie, and Barbie is all of these women. She might have started out as just a lady in a bathing suit, but she became so much more.”
                    </p>
                    <img src={beijo} alt="Beijo da Barbie"/>
                </div>  

                <img className="Barbie1" src={barbie1} alt="" />               
            </div>
        </div>
    );
}