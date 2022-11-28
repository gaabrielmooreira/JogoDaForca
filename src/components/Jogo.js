export default function Jogo(props) {
    const {desabilitarJogo, forcaImg, palavraTela, atualizarPalavraTela, acabouJogo, resultado, setDesabilitarJogo, setResultado, setArrChutes, setQtdErros, setForcaImg, setValorInput} = props;
    function comecarJogo() {
        setDesabilitarJogo(false);
        setForcaImg(`assets/forca0.png`);
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
                <img src={forcaImg} alt="Forca" />
                <div>
                    <button onClick={comecarJogo} className="botao-iniciar" disabled={desabilitarJogo === true ? false : true}>Escolher Palavra</button>
                    <p 
                        className={
                            `
                                ${(desabilitarJogo === true && acabouJogo === false) ? "desabilitar" : ""} 
                                ${resultado === "ganhou" ? "ganhou":""}
                                ${resultado === "perdeu" ? "perdeu":""}
                                
                            `
                        }   
                    >
                        {palavraTela}</p>
                </div>
            </div>
        </div>
    )
}


