import React from 'react';
import Filmes from "../filmes";
import BarbieRockers from '../assets/img/Posters/BarbieRockers.jpg';
import '../assets/css/cards.css';

export default function Cards({ onNavigate }) {
    const filmes = [
        {
            poster: BarbieRockers,
            nome: 'Barbie and The Rockers',
            data: '1987',
            sinopse: 'Sinopse do filme Barbie and The Rockers',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
    ];
    
    return (
    <div className='cards'>
        <div className="cards-container">
            {filmes.map((filme, index) => (
                <div key={index} className="card" onClick={() => onNavigate(filme)}>
                    <Filmes
                        poster={filme.poster}
                        nome={filme.nome}
                        data={filme.data}
                        />
                </div>
            ))}
        </div>
    </div>
    );
}