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
            nome: 'O Quebra Nozes ',
            data: '2001',
            genero: 'Animação/Família',
            sinopse: 'Clara ganha um lindo soldadinho de madeira de sua tia favorita. Na mesma noite, o soldado ganha vida para protege-la do Rato Rei, que invade sua sala. Ela acorda e ajuda o Quebra-Nozes, mas o Rato Rei a encolhe com uma terrível magia. Então, os dois se envolvem em uma espetacular aventura pera encontrar a Princesa Caramelo, a única que pode quebrar o diabólico feitiço.',
            trailer: 'https://www.youtube.com/embed/V3CGDRI5D0g?si=EUL0yFEPzF9nipih'
        },
        {
            foto:FundoBarbieRockers,
            poster: BarbieRapunzel,
            nome: 'Rapunzel',
            data: '2002',
            genero: 'Animação/Família',
            sinopse: 'Nessa versão animada com a boneca Barbie a heroína vive a bela Rapunzel, dona dos mais lindos cabelos que alguém já viu. Mas Rapunzel é uma serviçal e torna-se prisioneira de uma bruxa muito poderosa e ciumenta. Presa numa torre, Rapunzel irá da janela conhecer e se apaixonar pelo Príncipe Stefan, o único que pode salvá-la.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: LagoCines,
            nome: 'Lago dos cisnes',
            data: '2003',
            genero: 'Animação/Família',
            sinopse: 'Barbie ganha vida em seu terceiro filme, Barbie Lagos dos Cisnes. Baseado na música de Tchaikovsky e no adorado conto de fadas, o filme traz Barbie como Odette, a jovem filha do padeiro que segue um unicórnio até a Floresta Encantada. O malvado feiticeiro Rodrigo que pertende derrotar sua prima a Fada e tomar a Floresta, transforma Odette em cisne. A Fada Rainha consegue amenizar o feitiço fazendo com que Odette seja humana à noite e cisne de dia. Odette percebe que, mesmo que sinta ser a pessoa errada para a tarefa, é seu destino salvar a Floresta Encantada. Mas como pode uma garota armada apenas de sua coragem, honestidade e inteligência conseguir isso, tudo enquanto o belo Príncipe Daniel se apaixona por ela? Barbie Lago dos Cisnes combina fantasia, balé e inesquecível música de Tchaikovsky interpretada pela Orquestra Sinfônica de Londres. Peter Martins, o diretor do Balé da Cidade de Nova York, coreografa as maravilhosas cenas de dança de uma maneira nunca antes vista. Barbie Lago dos Cisnes mostra que cada um de nós é mais forte do que pensa.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: PrincesaPlebeia,
            nome: 'Princesa e a plebeia',
            data: '2004',
            genero: 'Animação/Família/Comédia',
            sinopse: 'Barbie vem à vida nesta moderna versão de um conto clássico sobre identidades trocadas e o poder da amizade. Baseado na história de Mark Twain, Barbie em uma surpreendente papel duplo como uma princesa e uma pobre garota de vila - duas garotas que possuem uma semelhança surpreendente! Os caminhos das garotas estão destinados a se cruzar quando a princesa Anneliese é capturada e Érika, a garota de vila, tem que tentar salvá-la. Poderia Érika fingir ser a Princesa e enganar quem a capturou, o maldoso Preminger? E o belo Rei Dominick, que se apaixona por Érika, confundindo-a com Anneliese? Nesta mogica performance musical, duas belas e corajosas garotas ousam seguir seus sonhos e descobrir que o destino está escrito em um lugar muito especial: seu coração!',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Fairytopia,
            nome: 'Fairytopia',
            data: '2005',
            genero: 'Animação/Família',
            sinopse: 'A história se passa em Fairytopia, um mundo mágico, no qual Barbie é a fada Elina, que mora numa flor. Um dia a sua casa-flor adoece, e as outras fadinhas não conseguem mais voar. Munida de coragem e determinação, Barbie sai em busca de Azura, a Fada-Guardiã, que talvez possa ajudá-la. Mas o que ela não sabe é que foi a maligna Laverna que fez a flor ficar doente e as fadas perderem o dom de voar. Tudo é parte de um plano para dominar Fairytopia. A bordo de uma bela borboleta gigante, Elina vive diversas aventuras nos lugares encantados, em busca de uma solução para os problemas.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Aladus,
            nome: 'Magia de Aladus',
            data: '2005',
            genero: 'Animação/Família/Romance',
            sinopse: 'Barbie alça vôo nesse maravilhoso conto de fadas de princesa em Barbie e a Magia de Aladus! A princesa Annika (Barbie) foge das garras de um malvado feiticeiro, explora as maravilhas do Reino das Nuvens e se junta a um magnífico cavalo alado para derrotar o feiticeiro e quebrar o encanto que aprisiona sua família. Espetaculares cenas em 3D adicionam muito mais encanto a esta extraordinária aventura!',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Diario,
            nome: 'Diário da Barbie',
            data: '2006',
            genero: 'Animação/Família',
            sinopse: 'Amigas Fabulosas, Grandes Sonhos e Trepidantes Aventuras! Bem, tu nem vais acreditar nesta história fantástica. Recheada de amizade e magia, música sensacional, roupa elegante e, claro, romance! É um novo ano lectivo, e espero que seja absolutamente mágico! Adoro andar com os meus melhores amigos porque nos divertimos sempre imenso. Sou guitarrista na nossa banda e tocamos à séria (apesar de ainda não termos tocado para ninguém de fora)! Também trabalho na estação de televisão da escola, que é o sonho da minha vida (ainda que tenha que escrever textos patetas para a Raquelle)! Ah, já me ia esquecendo - também tenho uma paixão louca pelo miúdo mais popular lá da escola - ele ainda não reparou em mim, mas vai reparar! Com um diário especial e uma pulseira mágica, estou a ganhar confiança para alcançar todos os meus sonhos. Descobre como a vida pode ser bestial, divertida e excitante no Diário da Barbie.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: FairytopiaMermaid,
            nome: 'Fairytopia Mermaidia',
            data: '2006',
            genero: 'Animação/Família/Aventura/Fantasia',
            sinopse: 'Elina é uma bela fada do campo que vive em Fairytopia, um mundo mágico povoado de fadas e seres encantados. Ela finalmente ganha um par de asas para poder voar e ser como as outras fadas! Porém, para salvar o reino submarino de Mermaidia, Elina terá que abandonar suas adoradas asas para sempre! Esta história de Fada do Campo que se transforma em uma linda sereia e abra mão do que lhe é mais importante para ajudar um reino ameaçado.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: TwelvePrincesses,
            nome: 'As 12 Princesas bailarinas',
            data: '2006',
            genero: 'Animação/Família',
            sinopse: 'Quando a malvada tia Rowena se muda para o castelo, ela proíbe que as princesas dancem ou cantem para sempre, pois ela acredita que não é o tipo de comportamento apropriado para uma princesa. As princesas descobrem um palácio mágico e secreto para onde fogem, mas quando Barbie fica sabendo que a sua tia está tramando para governar o reino, ela precisa voltar para ajudar o seu pai, o rei!',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: FairytopiaRaibow,
            nome: 'Mágia do arco-iris',
            data: '2007',
            genero: 'Animação/Família/Fantasia/Romance',
            sinopse: 'Elina vai para uma escola de fadas no Palácio de Cristal, onde ela precisa aprender a usar os seus poderes encantados para realizar o Vôo da Primavera. Infelizmente, a malvada Laverna está de volta e pretende congelar a primavera! Será que Elina e suas novas amigas fadas conseguirão derrotar Laverna ou será inverno para sempre em Fairytopia? Após salvar duas vezes Fairytopia, Elina se tornou uma celebridade e se sente segura com suas habilidades. Até que Azura visita o Prado Mágico com um novo desafio: ir ao Palácio de Cristal e treinar para ser uma aprendiz de Azura, e aprender o Vôo da Primavera, o ritual anual que traz vida ao Primeiro Arco-Íris da Primavera. Lá,, Elina conhece os outros aprendizes de diferentes lugares, incluindo a Fada Faiscante de temperamento inflamado chamada Sunburst, e a Ninfa da Floresta, Glee. As coisas não vão bem quanto Elina esperava, quando ela acidentalmente cai em uma armadilha ao colocar um feitiço em um sapo, aparentemente inocente. O sapo é na verdade Laverna, o feitiço a liberta de sua prisão e a transforma novamente em sua antiga forma. Laverna coloca todas das Fadas Guardiãs em um sono profundo e planeja contra Fairytopia. Agora, a Enchantress precisa reunir Elina e as outras aprendizes para realizar o Vôo da Primavera no lugar das Guardiãs, e assim evitar que Fairytopia caia num rigoroso inverno de 10 anos.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: IslandPrincess,
            nome: 'Princesa da ilha',
            data: '2007',
            genero: 'Animação/Família',
            sinopse: 'A princesa Rosella, ainda criança, sofre um naufrágio e vai parar em uma ilha. Lá, ela aprende a cantar e falar com uma adorável família de animais, que inclui Sagi, um panda vermelho, Azul, o pavão, e Tika, o bebê elefante. Inesperadamente, Rosella conhece o príncipe para o seu castelo. Em contato com todas as coisas novas da civilização, Rosella e seu amigo Tika descobrem um plano diabólico para dominar o reino! Com um final surpreendente e inesperado, as ações de Rosella mostram que ela é a verdadeira princesa. Barbie em A Princesa da Ilha – Uma Aventura Musical mostra que quando somos guiados pelo amor, milagres podem estar mais próximos do que',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Butterfly,
            nome: 'Butterfly',
            data: '2008',
            genero: 'Animação/Família/Fantasia',
            sinopse: 'Butterfly é uma Fada-Borboleta que ama ler e sonhar sobre o mundo. Flutterfield, sua terra natal, é protegida pelas brilhantes luzes mágicas da Rainha. Mas, quando a Rainha é envenenada pela perversa fada Henna, as luzes especiais começam a sumir. Agora, a solução está nas mãos de Butterfly e seus amigos, que saem numa jornada além das fronteiras seguras de sua cidade atrás de um antídoto que salvará a Rainha.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: DiamondCastle,
            nome: 'Castelo de diamante',
            data: '2008',
            genero: 'Animação/Família',
            sinopse: 'Barbie e Teresa vivem em um chalezinho na floresta. Um dia elas encontram um espelho encantado, que aprisiona uma das 3 musas da músisa dentro do espelho. Juntas, embarcaram em uma grande aventura para salvar a mais nova amiga. Nessa linda história de amizade, encontram o mais belo castelo dos contos de fadas, o "Castelo de Diamante".',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: CancaoNatal,
            nome: 'A canção de natal',
            data: '2008',
            genero: 'Animação/Família',
            sinopse: 'No filme, Barbie é Eden Starling, uma glamurosa cantora de um teatro londrino. Acompanhada de seu gato Chuzzlewit, a personagem planeja fazer com que todos os artistas do local permaneçam e ensaiem para o tão esperado Dia de Natal. Observando tal atitude, Catherine, amiga de infância da diva, conversa sobre o seu mal-humor. Até que, em um momento mágico, três espíritos do Natal levam Eden a uma fantástica viagem que abrirá seu coração para o verdadeiro sentido do Natal.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Polegar,
            nome: 'A pequena polegar',
            data: '2009',
            genero: 'Animação/Família',
            sinopse: 'Conheça a pequenina garota chamada Polegarzinha. Ela vive em harmonia com a natureza no mundo mágico de Twillerbees, um vasto jardim coberto por uma área verde exuberante. Tudo parecia tranqüilo, até que Polegarzinha e sua amiga são surpreendidas por uma gigantesca máquina que as transportam para um lugar muito estranho... um grande apartamento na cidade. Lá elas conhecem Makena, uma menina egoísta que acaba virando amiga das fadinhas. Além disso, descobrem os planos que ameaçam destruir Twillerbees. Aproveitando a magia da natureza, Polegarzinha e suas amigas tentarão salvar o jardim e provar que pequenas pessoas podem fazer uma grande diferença.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Mosqueteiras,
            nome: 'As 3 mosqueteiras',
            data: '2009',
            genero: 'Animação/Família',
            sinopse: 'Em Barbie e As Três Mosqueteiras, a boneca mais famosa do mundo interpreta Corinne, um jovem garota do campo que vai a Paris para realizar um sonho, o de se tornar uma mosqueteira. Lá, ela encontrar três garotas que compartilham secretamente o mesmo desejo.Será que as meninas com ar de princesas conseguirão dançar no baile de máscaras e arrumar o figurino certo e ainda salvar o príncipe - tudo isso sem quebrar o salto do sapato?',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Sereia,
            nome: 'Vida de seria',
            data: '2010',
            genero: 'Animação/Família/Fantasia',
            sinopse: 'Nesta nova aventura, Barbie é Merliah, uma campeã de surf de Malibu. Em um momento ela é uma adolescente e no outro aprende um chocante segredo de família: ela é uma sereia!Merliah e seu amigo golfinho, Zuma, partem para uma aventura no fundo do mar para resgatar sua mãe, a rainha de Oceana. Com ajuda das suas amigas sereias, Merliah salva o reino do mar. No final, ela descobre que o que a faz diferente é o que a torna especial.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: ModaMagia,
            nome: 'Moda e mágia',
            data: '2010',
            genero: 'Animação/Família',
            sinopse: 'Barbie parece ter tudo: grandes amigos, boas notas, um namorado fantástico, uma carreira de sucesso como atriz, beleza, inteligência, riqueza... mas um dia tudo dá errado. Além das pessoas dozerem coisas terríveis sobre a sua atuação, Ken acaba o namoro com ela. Barbie, então, decide visitar sua tia Millie, um designer de moda, em Paris, para esfriar a cabeça. Mas quando Barbie chega a Paris, ela descobre que sua tia está prestes a fechar sua loja de moda, a millicents. Barbie e seus amigos conseguirão fazer um evento de moda e salvar a loja de sua tia ou as sua dúvidas poderão causar um desastre?',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: SegredoFadas,
            nome: 'Segredo das fadas',
            data: '2011',
            genero: 'Animação/Família/Fantasia',
            sinopse: 'Uma aventura fantástica, onde Barbie descobre que há fadas vivendo secretamente à nossa volta!Quando Ken é levado, repentinamente, por um grupo de fadas, as duas amigas estilistas de Barbie revelam que são na realidade fadas e que Ken foi levado para um mundo mágico secreto não muito distante! Barbie e a sua rival, Raquelle, partem com as suas amigas numa viagem recheada de ação para o trazerem de volta. Pelo caminho elas terão de se manter unidas e aprender que a verdadeira magia não está apenas no mundo das fadas, mas no poder da amizade.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: EscolaPrincesas,
            nome: 'Escola de princesas',
            data: '2011',
            genero: 'Animação/Família/Fantasia',
            sinopse: 'Barbie interpreta Blair, uma garota simples e órfã que foi sorteada para estudar na exclusiva Escola de Princesas. A escola é um lugar incrível onde as futuras princesas aprendem dança, etiqueta, artes e outras habilidades indispensáveis a uma princesa. Blair adora suas aulas, suas fadinhas assistentes e suas novas amigas, as Princesas Hadley e Isla.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: NatalPerfeito,
            nome: 'Um natal perfeito',
            data: '2011',
            genero: 'Animação/Família',
            sinopse: 'Barbie e suas irmãs, Skipper, Stacie e Chelsea estavam prestes a ir pra Nova York com suas boas e fabulosas ideias para época do Natal. Quando elas estão prestes a ir para lá, uma enorme tempestade de neve os impede de ir a Nova York! Será que a Barbie e suas irmãs encontrarão uma maneira de ter o seu Natal perfeito?',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Sereia2,
            nome: 'Vida de sereia 2',
            data: '2012',
            genero: 'Animação/Família',
            sinopse: 'Esta nova aventura, Merliah aproveita sua vida de surfista nas ondas da Austrália, enquanto curte o fundo do mar como sereia. Até que uma rival muito competitiva ameaça a segurança do Oceano ao libertar a malvada Eris. Merliah precisará da ajuda de seus amigos e das sereias embaixadoras para tentar salvar o oceano e ganhar a competição de surfe. Será que ela conseguirá?',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: PrincesaPopStar,
            nome: 'Princesa e a popstar',
            data: '2012',
            genero: 'Animação/Família',
            sinopse: '"Nesta aventura super musical, estrelas como Tori (Barbie), a princesa bondosa de Meribella que preferem cantar e dançar do que realizar seus deveres reais. Quando sua pop star favorita Keira visita o reino, as meninas descobrem que têm muito em comum, incluindo um segredo mágico que lhes permite serem parecidas uma com a outra. Em primeiro lugar, trocando de lugar parece uma ótima idéia, até que cada menina percebe que a vida do outro não é tão fácil como parece! Mas Meribella também tem um segredo mágico, e quando ele é roubado, o reino inteiro é colocado em perigo. Será a verdadeira amizade salvar o dia? Recheado de canções fantásticas, modas fabulosas e diversão novos amigos, é uma celebração emocionante musical que mostra a melhor coisa que você pode ser é você mesmo',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Bailarina,
            nome: 'As sapatilhas mágicas',
            data: '2013',
            genero: 'Animação/Família',
            sinopse: 'Dance com Barbie nesta mágica aventura. Barbie é Kristyn, uma bailarina que tem grandes sonhos. Quando ela calça um par de sapatilhas pink brilhante, Kristyn e sua melhor amiga Hailey vão, de uma maneira mágica, para o fantástico mundo do balé. Lá, ela descobre que precisa dançar seguindo seu coração para derrotar a malvada Rainha das Neves. Participe desta aventura maravilhosa dançando os clássicos do balé Giselle e O Lago dos Cisnes, onde seus sonhos se tornam realidade.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: ButterflyFairy,
            nome: 'Butterfly e a princesa fairy',
            data: '2013',
            genero: 'Animação/Família/Fantasia',
            sinopse: 'Butterfly, a Fada Borboleta viaja para Shimmervale um reino mágico alimentado por cristais. Lá, ela descobre o brilho encantador das Cataratas e se torna a melhor amiga de Catania a princesa das fadas. Quando uma fada má tenta roubar todos os cristais em Shimmervale, as duas meninas têm de se unir para salvar o reino e descobrem que a amizade supera qualquer obstáculo.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Camping,
            nome: 'Acampamento da Barbie',
            data: '2013',
            genero: 'Animação',
            sinopse: 'O filminho conta a histórias da Barbie e suas irmãzinhas que, com uma pitada de gosto e fofura, se divertem no acampamento, mesmo acontecendo pequenos incidentes. Incluído nos extras do DVD "Barbie Escola de Princesas".',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Cavalos,
            nome: 'Aventura de cavalos',
            data: '2013',
            genero: 'Animação/Família',
            sinopse: 'Barbie e suas irmãs irão passar as férias nos Alpes e irão fazer novos amigos animais e Barbie terá uma conexão instantânea com o cavalo que ela treina.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: SereiaPerolas,
            nome: 'A sereia das pérolas',
            data: '2014',
            genero: 'Animação/Família',
            sinopse: 'Barbie é Lumina uma linda sereia, que sonha em ser uma princesa. Desde pequena, Lumina tem um poder mágico de fazer as pérolas dançarem e brilharem. Ela e sua melhor amiga Tuca, um cavalo-marinho cor-de-rosa, embarcam em uma aventura ao fantástico reino das sereias. Lá, ela ajuda suas amigas com seus poderes incríveis, criando penteados lindos para o Baile Real. Lumina então descobre que suas pérolas mágicas são a chave para desvendar seu verdadeiro destino e salvar para sempre o reino das sereias',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: PortalSecreto,
            nome: 'O portal secreto',
            data: '2014',
            genero: 'Animação/Família',
            sinopse: 'Em seu novo filme, Barbie estrela como a Alexa, uma linda princesa que descobre um Portal Secreto que leva a uma terra encantada cheia de surpresas e seres mágicos! Ao cruzar o Portal, Alexa conhece a sereia Romy e a fada Nori e elas lhe contam que uma princesa mimada chamada Malúcia está capturando toda a magia do reino só para ela. Para sua surpresa, nesse mundo Alexa ganha poderes mágicos, e suas novas amigas têm certeza de que somente ela pode recuperar a magia do reino. Descubra o que acontece quando a princesa Alexa deixa seus medos de lado e defende suas amigas de Malúcia, e percebe que o poder da amizade é muito mais precioso que qualquer magia.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: SuperHeroina,
            nome: 'Super princesa',
            data: '2015',
            genero: 'Animação',
            sinopse: 'Barbie estrela como Kara, uma princesa moderna com uma vida cotidiana. Um dia, depois de ter sido beijada por uma borboleta mágica, Kara logo descobre que tem super poderes incriveis, permitindo-lhe para se transformar em Super faísca, seu segredo, de combate ao crime combater ao ego. Mas seu primo com ciúmes também pega a borboleta e se transforma em super-herói nemesis de Kara, escuro faísca. Quando descobrem verdadeiro inimigo do reino, eles podem colocar de lado suas diferenças para formar uma equipe de super?',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: RainhasRock,
            nome: 'Rainhas do rock',
            data: '2015',
            genero: 'Animação/Família/Música',
            sinopse: 'Neste otimista musical, estrelas Barbie ™ como a princesa Courtney, uma princesa moderna, cujo mundo está virado de cabeça para baixo quando ela muda de lugar com Erika, um rockstar famoso. Dois mundos diferentes colidem quando um mix-up envia Princesa Courtney a Camp Pop e Erika, a Camp Royalty. Enquanto os líderes dos campos rivais tentar corrigir o mix-up, tanto Courtney e Erika aprender a adaptar-se às diferentes mundos e se divertir enquanto faz novos amigos, inesperados. Quando as meninas aprendem ambos os campos estão em risco de encerrar, eles devem abraçar suas diferenças, encontrar suas verdadeiras vozes, e se reúnem para um épico cantar-off que mostra tudo é possível quando você se atreve a sonhar grande!',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Cachorrinhos,
            nome: 'Uma aventura de cachorrinhos',
            data: '2015',
            genero: 'Animação/Família/Aventura',
            sinopse: 'Barbie, suas irmãs, e seus adoráveis filhotinhos saem em uma caçada para achar um tesouro perdido.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Espia,
            nome: 'Agentes secretas',
            data: '2016',
            genero: 'Animação/Família/Ação',
            sinopse: 'Barbie e suas amigas são ginastas vencedoras de vários campeonatos. Elas acabam sendo recrutadas para serem agentes secretas.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Espacial,
            nome: 'Aventura nas estrelas',
            data: '2016',
            genero: 'Animação/Família/Ficção científica',
            sinopse: 'Barbie e seu bichinho Pipoca levavam uma vida cheia de aventura e diversão voando de hoverboard em um maravilhoso planeta distante. Mas, quando o brilho da sua galáxia enfraquece e as estrelas começam a parar sua dança pelo céu, ela precisa abandonar o seu lar rumo ao Planeta Capital e se une a uma equipe incrível em uma missão para salvar as estrelas.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Cachorrinhos2,
            nome: 'Em busca dos cachorrinhos',
            data: '2016',
            genero: 'Animação/Família',
            sinopse: 'Depois das garotas e seus adoráveis cãezinhos chegarem a uma ilha paradisíaca para a grande competição de dança da Chelsea, elas decidem fazer uma rápida visita ao Festival do Cavalo Dançante. Mas quando seus cachorrinhos somem no evento, sobra para as garotas encontrá-los antes da apresentação de Chelsea. Enquanto os filhotes estão desaparecidos tendo a sua própria aventura, Barbie e suas irmãs devem usar a imaginação e trabalhar juntas para encontrar seus amiguinhos peludos nessa emocionante aventura!',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: VideoGame,
            nome: 'Um mundo de vídeo game',
            data: '2017',
            genero: 'Animação/Família/Ficção científica',
            sinopse: 'O jogo favorito da Barbie está em perigo, ele foi dominado pelo vírus emoji. Então a boneca é convidada por Cutie, o tutorial do jogo, para entrar no videogame e vencer todos os níveis até salvá-lo. Tudo começa ainda no Nível 1, com Barbie e seus novos amigos e jogadores, Bella e Kris.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Golfinhos,
            nome: 'Golfinhos mágicos',
            data: '2017',
            genero: 'Animação/Família/Aventura/Fantasia',
            sinopse: 'Barbie e suas irmãs trabalham em um recife de coral pesquisando golfinhos. Enquanto mergulham e exploram o mar, as irmãs descobrem golfinhos raros, das cores do arco-íris, que só visitam a região uma vez por ano.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Chelsea,
            nome: 'O aniversário perdido',
            data: '2021',
            genero: 'Animação',
            sinopse: 'Sinopse aqui ó',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: BigDreams,
            nome: 'Grande cidades, Grandes sonhos',
            data: '2021',
            genero: 'Animação/Família/Música',
            sinopse: 'A irmã da Barbie, Chelsea, acha que não teve aniversário. Determinada a recuperar a data, ela vai para uma ilha selvagem em busca de uma joia mágica que realiza desejos.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: RoadTrip,
            nome: 'A viagem épica da Barbie',
            data: '2022',
            genero: 'Animação/Família/Comédia',
            sinopse: 'Nesta aventura interativa, Barbie embarca numa viagem pelo país com os amigos e toma decisões importantes sobre o futuro. Qual será o sonho que ela vai seguir?',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Skipper,
            nome: 'A grande aventura de babás',
            data: '2023',
            genero: 'Animação/Família',
            sinopse: 'A mais nova aventura de Skipper, uma das irmãs mais novas da Barbie. Quando o negócio de babá da jovem começa a dar errado, ela consegue um emprego de verão em um parque aquático. Skipper experimenta diferentes empregos, mas a aventura só reforça a fé da garota em seu negócio de babá.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: Barbie,
            nome: 'Barbie',
            data: '2023',
            genero: 'Comédia/Aventura',
            sinopse: 'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            trailer: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        },
        {
            foto:FundoBarbieRockers,
            poster: ToqueMagica,
            nome: 'Um toque de mágica',
            data: '2024',
            genero: 'Animação',
            sinopse: 'Barbie Malibu e Barbie Brooklyn encontram uma misteriosa filhote de cavalo e tentam descobrir de onde ela veio. Enquanto ela começa a realizar desejos incríveis, as Barbies percebem que terão que protegê-la de Glyph.',
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
