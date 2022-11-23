export default function Jogo(props) {
    const {palavraSorteada,desabilitarJogo,habilitarJogo,forcaImg} = props;
    return (
        <div className="jogo">
            <header>
                <h1>1 - ESTADO INICIAL DO JOGO</h1>
            </header>
            <div className="forca">
                <img src={forcaImg} alt="Forca" />
                <div>
                    <button onClick={habilitarJogo} className="botao-iniciar">Escolher Palavra</button>
                    <p className={desabilitarJogo === true ? "desabilitar":""}>{esconderPalavra(palavraSorteada)}</p>
                </div>
            </div>
        </div>
    )
}


function esconderPalavra(palavraSorteada){
    const palavraEscondida = [];
    for(let i = 0; i < palavraSorteada.length; i++){
        i === 0? palavraEscondida.push("_"):palavraEscondida.push(" _");
    }
    return palavraEscondida;
}