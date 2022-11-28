import Letra from "./Letra"
export default function Letras(props) {
    const { palavraSorteada, desabilitarJogo, errouLetra, arrChutes, setArrChutes, atualizarPalavraTela } = props;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <div className="letras">
            {alfabeto.map((l) => {
                return (
                    <Letra
                        key={l}
                        letraAlfabeto={l}
                        palavraSorteada={palavraSorteada}
                        desabilitarJogo={desabilitarJogo}
                        errouLetra={errouLetra}
                        arrChutes={arrChutes}
                        setArrChutes={setArrChutes}
                        atualizarPalavraTela={atualizarPalavraTela}
                    />
                )
            }
            )
            }
        </div>
    )
}

