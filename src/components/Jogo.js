export default function Jogo(props) {
    const {palavraSorteada,desabilitarJogo,habilitarJogo,forcaTitulo,forcaImg} = props;
    return (
        <div className="jogo">
            <header>
                <h1>{forcaTitulo}</h1>
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