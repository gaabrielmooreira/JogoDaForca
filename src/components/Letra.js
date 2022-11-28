export default function Letra(props) {
    const { palavraSorteada, letraAlfabeto, desabilitarJogo, errouLetra, arrChutes, setArrChutes, atualizarPalavraTela} = props;


    function adicionarChute(letra) {
        const arrNovo = [...arrChutes, letra];
        setArrChutes(arrNovo);
        if (palavraSorteada.includes(letra)) {
            atualizarPalavraTela(letra);
        } else {
            errouLetra();
        }
    };

    return (
        <button
            onClick={() => adicionarChute(letraAlfabeto)}
            className={`letra ${desabilitarJogo === true ? "desabilitar" : ""} ${arrChutes.includes(letraAlfabeto) === true ? "desabilitar" : ""}`}
            disabled={(arrChutes.includes(letraAlfabeto) === true ? true : false) || (desabilitarJogo === true ? true : false)}
        >

            {(letraAlfabeto).toUpperCase()}

        </button>
    )
}