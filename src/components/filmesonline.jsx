import { useState } from "react";
import Inicial from "./pagInicial";
import Sinopse from "./SINOPSE/sinopse";

export default function FilmesOnline() {
  const [paginaAtual, setPaginaAtual] = useState('Inicial');
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  const paginaPosterior = (filme) => {
    setFilmeSelecionado(filme);
    setPaginaAtual('Sinopse');
  };

  const paginaAnterior = () => {
    setPaginaAtual('Inicial');
  };

  return (
    <div>
      {
        paginaAtual === 'Inicial' ? 
        (<Inicial onNavigate={paginaPosterior} />)
        :
        (<Sinopse filme={filmeSelecionado} Voltar={paginaAnterior} />)
      }
    </div>
  );
}