import '../assets/css/navbar.css'
import Logo from "../assets/img/Geral/Logo.png"

export default function Navbar(){
    return(
        <div className='backNav'>
            <img className='imglogo' src={Logo} alt="Logo branca da Barbie" />

            <ul className='listNav'>
                <li>Qual a sua Barbie?</li>
                <li>Tour pela Dreamhouse</li>
                <li>Jogos</li>
            </ul>
        </div>
    );
}