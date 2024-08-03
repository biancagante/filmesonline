import React, { useState } from 'react';
import Inicial from "./pagInicial";
import Sinopse from "./SINOPSE/sinopse";

// componente que alterna as telas para o App.js renderizar e passa a função alternar ordem para a tela inicial

export default function FilmesOnline() {
    const [paginaAtual, setPaginaAtual] = useState('Inicial');
    const [filmeSelecionado, setFilmeSelecionado] = useState(null);
    const [ordem, setOrdem] = useState('asc');

    const paginaPosterior = (filme) => {
        setFilmeSelecionado(filme);
        setPaginaAtual('Sinopse');
    };
    
    const paginaAnterior = () => {
        setPaginaAtual('Inicial');
    };

    const alternarOrdem = () => {
        setOrdem(ordem === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div>
            {paginaAtual === 'Inicial' ? 
                <Inicial onNavigate={paginaPosterior} ordem={ordem} alternarOrdem={alternarOrdem} /> :
                <Sinopse filme={filmeSelecionado} Voltar={paginaAnterior} />
            }
        </div>
    );
}
