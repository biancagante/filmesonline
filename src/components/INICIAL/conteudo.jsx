import React from 'react';
import setinha from '../assets/img/Geral/seta-baixo.png';
import Cards from './cards';
import '../assets/css/conteudo.css';

export default function Conteudo({ onNavigate }) {
  return (
    <div>
      <div className='title'>
        <h2>Galeria de Filmes</h2>
        <button className='btnFiltro'>Filtrar <img src={setinha} alt="" /></button>
      </div>
      <Cards onNavigate={onNavigate} />
    </div>
  );
}