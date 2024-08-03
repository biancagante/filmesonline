import { useState } from "react";
import Inicial from "./pagInicial";
import Sinopse from "./SINOPSE/sinopse";

export default function FilmesOnline() {
    const [paginaAtual, setPaginaAtual] = useState('Inicial')
    
    const paginaPosterior = () => {
        setPaginaAtual('Sinopse');
    }
    
    const paginaAnterior = () => {
        setPaginaAtual('Inicial');
    }
    
    return(
        <div>
            {
                paginaAtual === 'Inicial' ? 
                (<Inicial onNavigate={paginaPosterior}/>)
                :
                (<Sinopse Voltar={paginaAnterior}/>)
            }
        </div>
    )
}