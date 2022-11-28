import forca0 from "../assets/forca0.png"

export default function Jogo(props) {
    const { palavraSorteada, desabilitarJogo, forcaImg, palavraTela, atualizarPalavraTela, acabouJogo, resultado, setDesabilitarJogo, setResultado, setArrChutes, setQtdErros, setForcaImg, setValorInput } = props;
    function comecarJogo() {
        setDesabilitarJogo(false);
        setForcaImg(forca0);
        const novoArr = [];
        setArrChutes(novoArr);
        setQtdErros(0);
        setResultado("");
        atualizarPalavraTela(novoArr);
        setValorInput("");
    }

    return (
        <div className="jogo">
            <div className="forca">
                <img data-test="game-image" src={forcaImg} alt="Forca" />
                <div>
                    <button data-test="choose-word" onClick={comecarJogo} className="botao-iniciar" disabled={(desabilitarJogo === false || resultado === "perdeu") ? true : false}>Escolher Palavra</button>
                    <p
                        data-test="word"
                        data-answer={palavraSorteada}
                        className={
                            `
                                ${(desabilitarJogo === true && acabouJogo === false) ? "desabilitar" : ""} 
                                ${resultado === "ganhou" ? "ganhou" : ""}
                                ${resultado === "perdeu" ? "perdeu" : ""}
                            `
                        }
                    >
                        {palavraTela}
                    </p>
                </div>
            </div>
        </div>
    )
}


