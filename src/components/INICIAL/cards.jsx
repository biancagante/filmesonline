import React from 'react';
import Filmes from "../filmes";
import '../assets/css/index.css';
import BarbieRockers from '../assets/img/Posters/BarbieRockers.jpg';
import FundoBarbieRockers from '../assets/img/Fundos/BarbieTheRockers.png';
// componente dos filmes que aparecem na galeria

export default function Cards({ onNavigate, ordem }) {
    const filmes = [
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie a estrela do rock',
            data: '1987',
            genero: 'Animação',
            sinopse: 'Se você não gosta de guerras, arrume sua malinha e embarque nesse foguete junto com a Barbie e sua turma. A aventura vai começar. Neste desenho, nossa estrelinha vai ao espaço fazer um grande show de rock para promover a paz mundial e a amizade entre os povos. Barbie e seus amiguinhos - Ken, Diva, Dee Dee, Dana e Derek - falando, cantando, tocando e dançando em sua banda, como verdadeiros artistas de cinema.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            genero: 'Comédia/Fantasia',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie e As Sensações',
            data: '1987',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
    ];
    
    const filmesOrdenados = filmes.sort((a, b) => ordem === 'asc' ? a.data - b.data : b.data - a.data);
    
    return (
    <div className='cards'>
        <div className="cards-container">
            {filmesOrdenados.map((filme, index) => (
                <div key={index} className="card" onClick={() => onNavigate(filme)}>
                    <Filmes
                        foto={filme.foto}
                        poster={filme.poster}
                        genero={filme.genero}
                        nome={filme.nome}
                        data={filme.data}
                        />
                </div>
            ))}
        </div>
    </div>
    );
}
