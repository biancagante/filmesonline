import React from 'react';
import './assets/css/cards.css';

export default function Filmes({ poster, nome, data }) {
  return (
    <div className="filme-card">
      <img src={poster} alt={nome} className='poster'/>
      <h2>{nome}</h2>
      <p>{data}</p>
    </div>
  );
}