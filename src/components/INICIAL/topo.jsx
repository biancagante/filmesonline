import '../assets/topo.css'
import BarbieLogo from "../assets/img/Geral/BabieTxt.png"
import BarbieBanner from "../assets/img/Geral/BarbieBanner.png"

export default function Banner(){
    return(
        <div className='backBanner'>
            <div className='txt'>
                <h2 className='ajuste'>
                    Seu mundo fica mais rosa com
                </h2>
                <h2>
                     a <img className='BarbieLogo' src={BarbieLogo} alt="Barbie" />
                </h2>
                <p className='paragrafo'>
                    No fabuloso live-action da boneca mais famosa do mundo, acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear com as amigas e curtir intermináveis festas.
                </p>
            </div>

            <img className='bannerBarbie' src={BarbieBanner} alt="Imagem promocional do filme" />
        </div>
    )
}