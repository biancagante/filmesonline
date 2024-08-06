import React from 'react';
import '../assets/css/index.css'
import Navbar from '../INICIAL/navbar';
import footerKiss from '../assets/img/Geral/footerKiss.png'

export default function Sinopse({ filme, Voltar }) {
  return (
    <div className='backSin'>
      <Navbar/>
      <div className="pagBack">
        <div className="ajustePag">
          <img className='fundoFoto' src={filme.foto} alt="" />
          <div className="rosa"></div>
          <div className="AjusteInfo">
            <div className="chegaDeDiv">
              <img className='posterSinopse' src={filme.poster} alt={filme.nome} />
              <div className="conjuntoTxt">
                <h2 className='hs'>{filme.nome} <h6>{filme.data}</h6></h2>
                <h3>{filme.genero}</h3>
              </div>
            </div>
          </div>
          <p className='sinopse'>{filme.sinopse}</p>
          <h3 className="Trailler">Trailer</h3>
          <div className="ajusteWV">
            <iframe src={filme.trailer} frameborder="0" title={filme.nome}></iframe>
          </div>
          <footer className='footer'>
          <img src={footerKiss} alt="" className="FooterKiss" />
          </footer>
          <div>
            <button onClick={Voltar}>Voltar</button>
          </div>
        </div>
      </div>
    </div>
  );
}