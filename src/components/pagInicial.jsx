import React from 'react';
import Navbar from "./INICIAL/navbar";
import Banner from "./INICIAL/topo";
import Conteudo from "./INICIAL/conteudo";
import Barbie from './INICIAL/barbie';
import Beijo from '../components/assets/img/Geral/beijo_barbie.png'

export default function Inicial({ onNavigate, ordem, alternarOrdem }) {
  return (
    <div className='App'>
      <Navbar />
      <div className="main">
        <Barbie/>
        <Banner />
        <Conteudo onNavigate={onNavigate} ordem={ordem} alternarOrdem={alternarOrdem}/>
        <p className='fraseFinal'>“All of these women are Barbie, and Barbie is all of these women. She might have started out as just a lady in a bathing suit, but she became so much more.”</p>
        <img className='beijoFinal' src={Beijo} alt="Beijo da Barbie" />
      </div>
    </div>
  );
}
