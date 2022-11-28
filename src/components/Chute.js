export default function Chute(props) {
    const { palavraSorteada, desabilitarJogo, valorInput, setValorInput, forcaMudaImg, atualizarPalavraTela, qtdErros, setResultado } = props;

    function chutarPalavra() {
        if (valorInput === palavraSorteada) {
            atualizarPalavraTela("", qtdErros, true);
            setResultado("ganhou");
        } else {
            const qtdErrosAtual = 6;
            forcaMudaImg(qtdErrosAtual);
            setValorInput("");
        }
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input
                onChange={(e) => setValorInput(e.target.value)}
                value={valorInput}
                type="text"
                disabled={desabilitarJogo === true ? true : false}
            >
            </input>
            <button
                onClick={chutarPalavra}
                className={desabilitarJogo === true ? "desabilitar" : ""}
                disabled={desabilitarJogo === true ? true : false}
            >
                Chutar
            </button>
        </div>
    )
}