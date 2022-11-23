export default function Letra(props){
    const {key, letraAlfabeto, desabilitarJogo} = props;
    return (
        <button className={`letra ${desabilitarJogo === true ? "desabilitar":""}`}>{(letraAlfabeto).toUpperCase()}</button>
    )
}