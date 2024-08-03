export default function Sinopse(props, {Voltar}) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <button onClick={Voltar}>Voltar</button>
        </div>
    )
}