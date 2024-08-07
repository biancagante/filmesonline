import '../assets/css/index.css'
import Logo from "../assets/img/Geral/Logo.png"
import game from '../assets/img/Geral/Game_Controller.png'

// componente navbar que é usado tanto na página inicial quanto na página de sinopse

export default function Navbar(){
    return(
        <div className='backNav'>
            <img className='imglogo' src={Logo} alt="Logo branca da Barbie" />

            <ul className='listNav'>
                <li><a href="https://gshow.globo.com/tudo-mais/pop/quiz/qual-barbie-voce-seria-faca-o-teste.ghtml" target="_blank" rel="noopener noreferrer">Qual a sua Barbie?</a></li>
                <li><a href="https://barbietrucktour.square.site/" target="_blank" rel="noopener noreferrer">Tour pela Dreamhouse</a></li>
                <li className='game'><a href="https://www.jogos360.com.br/barbie/" target="_blank" rel="noopener noreferrer">Jogos</a>
                <img className='console' src={game} alt="ícone de console de jogo" />
                </li>
            </ul>
        </div>
    );
}