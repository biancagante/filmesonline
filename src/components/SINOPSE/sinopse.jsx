import React from 'react';
import '../assets/css/index.css'

export default function Sinopse({ filme, Voltar }) {
  return (
    <div>
      <h2>{filme.nome}</h2>
      <img src={filme.poster} alt={filme.nome} />
      <p>{filme.sinopse}</p>
      <iframe src={filme.trailer} frameBorder="0" title={filme.nome}></iframe>
      <button onClick={Voltar}>Voltar</button>
    </div>
  );
}