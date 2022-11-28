import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import React from "react"

const sorteiaPalavra = () => palavras[Math.floor(Math.random() * palavras.length)];
const palavraSorteada = sorteiaPalavra();

function App() {

  const [desabilitarJogo, setDesabilitarJogo] = React.useState(true);
  const [forcaImg, setForcaImg] = React.useState("assets/forca0.png");
  const [qtdErros, setQtdErros] = React.useState(0);
  const [arrChutes, setArrChutes] = React.useState([]);
  const [palavraTela, setPalavraTela] = React.useState(palavraSorteada);
  const [acabouJogo, setAcabouJogo] = React.useState(false);
  const [valorInput,setValorInput] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  function forcaMudaImg(qtdErrosAtual) {
    if (qtdErrosAtual >= 6) {
      setAcabouJogo(true);
      setDesabilitarJogo(true);
      setForcaImg(`assets/forca6.png`);
      setResultado("perdeu");
      atualizarPalavraTela('',qtdErrosAtual);
    } else {
      setForcaImg(`assets/forca${qtdErrosAtual}.png`);
    }
  }

  function errouLetra() {
    const qtdErrosAtual = qtdErros + 1;
    setQtdErros(qtdErrosAtual);
    forcaMudaImg(qtdErrosAtual);
  }

  function atualizarPalavraTela(letra,qtdErrosAtual,acertouInput) {
    let palavra = [];
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (arrChutes.includes(palavraSorteada[i]) || letra === palavraSorteada[i]) {
        palavra[i] = palavraSorteada[i];
      } else {
        palavra[i] = "_";
      }
    }

    if(palavra.join("") === palavraSorteada || qtdErrosAtual >= 6 || acertouInput){
      setPalavraTela(palavraSorteada);
      return;
    }

    setPalavraTela(palavra.join(" "));
  }



return (
  <>
    <Jogo
      palavraSorteada={palavraSorteada}
      desabilitarJogo={desabilitarJogo}
      setDesabilitarJogo={setDesabilitarJogo}
      forcaImg={forcaImg}
      palavraTela={palavraTela}
      atualizarPalavraTela={atualizarPalavraTela}
      acabouJogo={acabouJogo}
      resultado={resultado}
    />

    <Letras
      palavraSorteada={palavraSorteada}
      desabilitarJogo={desabilitarJogo}
      errouLetra={errouLetra}
      arrChutes={arrChutes}
      setArrChutes={setArrChutes}
      atualizarPalavraTela={atualizarPalavraTela}
    />

    <Chute
      palavraSorteada={palavraSorteada}
      desabilitarJogo={desabilitarJogo}
      valorInput={valorInput}
      setValorInput={setValorInput}
      forcaMudaImg={forcaMudaImg}
      atualizarPalavraTela={atualizarPalavraTela}
      qtdErros={qtdErros}
      setResultado={setResultado}
    />
  </>
);
}





export default App;
