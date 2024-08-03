import React from 'react';
import './assets/css/index.css';

export default function Filmes({ poster, nome, data }) {
  return (
    <div className="filme-card">
      <img src={poster} alt={nome} className='poster'/>
      <h2 className='txtcard'>{nome}</h2>
      <p className='anocard'>{data}</p>
    </div>
  );
}