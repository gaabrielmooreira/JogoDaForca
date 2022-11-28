export default function Jogo(props) {
    const {desabilitarJogo, setDesabilitarJogo, forcaImg, palavraTela, atualizarPalavraTela, acabouJogo, resultado} = props;

    function comecarJogo() {
        setDesabilitarJogo(false);
        atualizarPalavraTela();
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


