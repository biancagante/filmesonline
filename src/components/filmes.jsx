export default function Filmes(props) {
    return(
        <div>
            <img src={props.poster} alt={props.nome} />
            <h2>{props.nome}</h2>
            <p>{props.data}</p>
            <p>{props.sinopse}</p>
            <iframe src={props.trailer} frameborder="0" title={props.nome}></iframe>
        </div>
    )
}