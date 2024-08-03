import React from 'react';
import Navbar from "./INICIAL/navbar";
import Banner from "./INICIAL/topo";
import Conteudo from "./INICIAL/conteudo";
import Barbie from './INICIAL/barbie';

export default function Inicial({ onNavigate, ordem, alternarOrdem }) {
  return (
    <div className='App'>
      <Navbar />
      <div className="main">
        <Barbie/>
        <Banner />
        <Conteudo onNavigate={onNavigate} ordem={ordem} alternarOrdem={alternarOrdem}/>
      </div>
    </div>
  );
}
