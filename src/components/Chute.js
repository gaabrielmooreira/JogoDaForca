export default function Chute(props) {
    const { palavraSorteada, desabilitarJogo, valorInput, setValorInput, forcaMudou, atualizarPalavraTela, qtdErros, setResultado } = props;

    function chutarPalavra() {
        if (valorInput === palavraSorteada) {
            atualizarPalavraTela("", qtdErros, true);
            setResultado("ganhou");
        } else {
            const qtdErrosAtual = 6;
            forcaMudou(qtdErrosAtual);
            setValorInput("");
        }
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input
                data-test="guess-input"
                onChange={(e) => setValorInput(e.target.value)}
                value={valorInput}
                type="text"
                disabled={desabilitarJogo === true ? true : false}
            >
            </input>
            <button
                data-test="guess-button"
                onClick={chutarPalavra}
                className={desabilitarJogo === true ? "desabilitar" : ""}
                disabled={desabilitarJogo === true ? true : false}
            >
                Chutar
            </button>
        </div>
    )
}