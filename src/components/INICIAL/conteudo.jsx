import React from 'react';
import { useState } from 'react';
import setinha from '../assets/img/Geral/seta-baixo.png';
import Cards from './cards';
import '../assets/css/index.css';

// componente do título que fica encima da galeria de filmes 

export default function Conteudo({ onNavigate, ordem, alternarOrdem }) {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  const toggleOpcoes = () => {
    setMostrarOpcoes(!mostrarOpcoes);
  };

  const selecionarOpcao = (ordem) => {
    alternarOrdem(ordem);
    setMostrarOpcoes(false);
  };
  
  return (
    <div>
      <div className='title'>
        <h3>Galeria de Filmes</h3>
        <div className="dropdown">
          <button className='btnFiltro' onClick={toggleOpcoes}>Filtrar <img src={setinha} alt="" /></button>
          {mostrarOpcoes && (
            <ul className="dropdown-menu">
              <li onClick={() => selecionarOpcao('asc')}>Mais antigos</li>
              <li onClick={() => selecionarOpcao('desc')}>Mais recentes</li>
            </ul>
          )}
        </div>
      </div>
      <Cards onNavigate={onNavigate} ordem={ordem}/>
    </div>
  );
}