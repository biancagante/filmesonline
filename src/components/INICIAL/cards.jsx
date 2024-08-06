import React from 'react';
import Filmes from "../filmes";
import '../assets/css/index.css';
/*posters*/
import BarbieRockers from '../assets/img/Posters/BarbieRockers.jpg';
import BarbieSensations from '../assets/img/Posters/BarbieSensations.jpg';
import QuebraNozes from '../assets/img/Posters/BarbieNutcracker.jpg';
import BarbieRapunzel from '../assets/img/Posters/barbie-rapunzel.jpg';
import LagoCines from '../assets/img/Posters/barbie-of-swan-lake.jpg';
import PrincesaPlebeia from '../assets/img/Posters/barbie-princess-the-pauper.jpg';
import Fairytopia from '../assets/img/Posters/barbie-fairytopia.jpg';
import Aladus from '../assets/img/Posters/-barbie-magic-pegasus.jpg';
import Diario from '../assets/img/Posters/the-barbie-diaries.jpg';
import FairytopiaMermaid from '../assets/img/Posters/barbie-fairytopia-mermaidia.jpg';
import TwelvePrincesses from '../assets/img/Posters/barbie-12-dancing-princesses.jpg';
import FairytopiaRaibow from '../assets/img/Posters/barbie-fairytopia-magic-rainbow.jpg';
import IslandPrincess from '../assets/img/Posters/barbie-island-princess.jpg';
import Butterfly from '../assets/img/Posters/barbie-mariposa.jpg';
import DiamondCastle from '../assets/img/Posters/barbie-diamond-castle.jpg';
import CancaoNatal from '../assets/img/Posters/barbie-christmas-carol.jpg';
import Polegar from '../assets/img/Posters/barbie-presents-thumbelina.jpg';
import Mosqueteiras from '../assets/img/Posters/barbie-and-the-three-musketeers.jpg';
import Sereia from '../assets/img/Posters/barbie-in-a-mermaid-tale.jpg';
import ModaMagia from '../assets/img/Posters/barbie-a-fashion-fairytale.jpg';
import SegredoFadas from '../assets/img/Posters/barbie-a-fairy-secret.jpg';
import EscolaPrincesas from '../assets/img/Posters/barbie-princess-charm-school.jpg';
import NatalPerfeito from '../assets/img/Posters/barbie-a-perfect-christmas.jpg';
import Sereia2 from '../assets/img/Posters/barbie-in-a-mermaid-tale-2.jpg';
import PrincesaPopStar from '../assets/img/Posters/barbie-popstar.jpg';
import Bailarina from '../assets/img/Posters/barbie-pink-shoes-.jpg';
import ButterflyFairy from '../assets/img/Posters/butterfly-princesa-fairy.jpg';
import Cavalos from '../assets/img/Posters/barbie-in-a-pony-tale.jpg';
import SereiaPerolas from '../assets/img/Posters/barbie-the-pearl-princess.jpg';
import PortalSecreto from '../assets/img/Posters/portal-secreto.jpg';
import SuperHeroina from '../assets/img/Posters/barbie-iprincess-power.jpg';
import RainhasRock from '../assets/img/Posters/barbie-in-rock-n-royals.jpg';
import Cachorrinhos from '../assets/img/Posters/barbie-great-puppy-adventure-.jpg';
import Espia from '../assets/img/Posters/barbie-spy-squad.jpg';
import Espacial from '../assets/img/Posters/barbie-star-light-adventure.jpg';
import Cachorrinhos2 from '../assets/img/Posters/barbie-puppy-chase.jpg';
import VideoGame from '../assets/img/Posters/barbie-video-game-hero.jpg';
import Golfinhos from '../assets/img/Posters/barbie-dolphin-magic.jpg';
import Chelsea from '../assets/img/Posters/barbie-chelsea-the-lost-birthday.jpg';
import BigDreams from '../assets/img/Posters/barbie-big-city-big-dreams.jpg';
import RoadTrip from '../assets/img/Posters/barbie-epic-road-trip.jpg';
import Skipper from '../assets/img/Posters/barbie-skipper-babysitting-adventure.jpg';
import Barbie from '../assets/img/Posters/BarbieFIlm$.jpg';
import ToqueMagica from '../assets/img/Posters/toque-magica.jpg';
import Camping from '../assets/img/Posters/barbie-a-camping.jpg';
/*fundo*/
import FundoBarbieRockers from '../assets/img/Fundos/BarbieTheRockers.png';
// componente dos filmes que aparecem na galeria

export default function Cards({ onNavigate, ordem }) {
    const filmes = [
        {
            foto:FundoBarbieRockers,
            poster: BarbieRockers,
            nome: 'Barbie A Estrela do Rock',
            data: '1987',
            genero: 'Animação/Música',
            sinopse: 'Se você não gosta de guerras, arrume sua malinha e embarque nesse foguete junto com a Barbie e sua turma. A aventura vai começar. Neste desenho, nossa estrelinha vai ao espaço fazer um grande show de rock para promover a paz mundial e a amizade entre os povos. Barbie e seus amiguinhos - Ken, Diva, Dee Dee, Dana e Derek - falando, cantando, tocando e dançando em sua banda, como verdadeiros artistas de cinema.',
            trailer: 'https://www.youtube.com/embed/3oUMf4Y-H54?si=8hoBXZnbQXgKarwm'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieSensations,
            nome: 'Barbie e as Sensações',
            data: '1987',
            genero: 'Animação/Aventura/Família/Música',
            sinopse: 'Depois do seu primeiro grande show no espaço pela paz mundial, Barbie e os Roqueiros vão voltar para casa. Durante a viagem de volta para a Terra, algo inesperado acontece e eles vão parar no tempo de 1959* onde teram que encontrar uma maneira de regressar ao seu tempo.',
            trailer: 'https://www.youtube.com/embed/725UC5PcSbw?si=WWwbutlf08k_Gou6'
        },
        {
            foto:FundoBarbieRockers,
            poster: QuebraNozes,
            nome: 'Barbie Em Quebra Nozes ',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Clara ganha um lindo soldadinho de madeira de sua tia favorita. Na mesma noite, o soldado ganha vida para protege-la do Rato Rei, que invade sua sala. Ela acorda e ajuda o Quebra-Nozes, mas o Rato Rei a encolhe com uma terrível magia. Então, os dois se envolvem em uma espetacular aventura pera encontrar a Princesa Caramelo, a única que pode quebrar o diabólico feitiço.',
            trailer: 'https://www.youtube.com/embed/V3CGDRI5D0g?si=EUL0yFEPzF9nipih'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRapunzel,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: LagoCines,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: PrincesaPlebeia,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Fairytopia,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Aladus,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Diario,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: FairytopiaMermaid,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: TwelvePrincesses,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: FairytopiaRaibow,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: IslandPrincess,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Butterfly,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: DiamondCastle,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: CancaoNatal,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Polegar,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Mosqueteiras,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Sereia,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: ModaMagia,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: SegredoFadas,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: EscolaPrincesas,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: NatalPerfeito,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Sereia2,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: PrincesaPopStar,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Bailarina,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: ButterflyFairy,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Camping,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Cavalos,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: SereiaPerolas,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: PortalSecreto,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: SuperHeroina,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: RainhasRock,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Cachorrinhos,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Espia,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Espacial,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Cachorrinhos2,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: VideoGame,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Golfinhos,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Chelsea,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BigDreams,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: RoadTrip,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Skipper,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Barbie,
            nome: 'Barbie Em Quebra Nozes',
            data: '2001',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: ToqueMagica,
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
