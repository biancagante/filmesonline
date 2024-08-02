import '../assets/css/navbar.css'
import Logo from "../assets/img/Geral/Logo.png"
import game from '../assets/img/Geral/Game_Controller.png'

export default function Navbar(){
    return(
        <div className='backNav'>
            <img className='imglogo' src={Logo} alt="Logo branca da Barbie" />

            <ul className='listNav'>
                <li>Qual a sua Barbie?</li>
                <li>Tour pela Dreamhouse</li>
                <li>Jogos</li>
                <img className='console' src={game} alt="ícone de console de jogo" />
            </ul>
        </div>
    );
}