import "../assets/css/barbie.css"
import barbie1 from "../assets/img/Geral/Barbie-removebg-preview.png"
import barbie2 from "../assets/img/Geral/pngwing.com (2).png"
import barbie3 from "../assets/img/Geral/pngwing.com.png"

export default function Barbie(){
    return(
        <div className="zIndex">
            <img className="barbie1" src={barbie1} alt="" />
            <img className="barbie2" src={barbie2} alt="" />
            <img className="barbie3" src={barbie3} alt="" />
        </div>
    )
}