import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import React from "react"

const sorteiaPalavra = () => palavras[Math.floor(Math.random() * palavras.length)];
let palavraSorteada = sorteiaPalavra();

function App() {

  const [desabilitarJogo, setDesabilitarJogo] = React.useState(true);
  const [forcaImg, setForcaImg] = React.useState("assets/forca0.png");
  const [qtdErros, setQtdErros] = React.useState(0);
  const [arrChutes, setArrChutes] = React.useState([]);
  const [palavraTela, setPalavraTela] = React.useState(palavraSorteada);
  const [acabouJogo, setAcabouJogo] = React.useState(false);
  const [valorInput,setValorInput] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  function forcaMudou(qtdErrosAtual) {
    if (qtdErrosAtual >= 6) {
      setForcaImg(`assets/forca6.png`);
      setAcabouJogo(true);
      setDesabilitarJogo(true);
      setResultado("perdeu");
      
      atualizarPalavraTela([],qtdErrosAtual);
    } else {
      setForcaImg(`assets/forca${qtdErrosAtual}.png`);
    }
  }

  function errouLetra() {
    const qtdErrosAtual = qtdErros + 1;
    setQtdErros(qtdErrosAtual);
    forcaMudou(qtdErrosAtual);
  }

  function atualizarPalavraTela(arrChutesAtual,qtdErrosAtual,acertouInput) {
    
    if(qtdErrosAtual >= 6){
      setPalavraTela(palavraSorteada);
      setResultado("perdeu");
      palavraSorteada = sorteiaPalavra();
      return;
    }

    let palavra = [];
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (arrChutesAtual.includes(palavraSorteada[i])) {
        palavra[i] = palavraSorteada[i];
      } else {
        palavra[i] = "_";
      }
    }

    if(palavra.join("") === palavraSorteada || acertouInput){
      setPalavraTela(palavraSorteada);
      setResultado("ganhou");
      setAcabouJogo(true);
      setDesabilitarJogo(true);
      palavraSorteada = sorteiaPalavra();
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
      setForcaImg={setForcaImg}
      palavraTela={palavraTela}
      atualizarPalavraTela={atualizarPalavraTela}
      acabouJogo={acabouJogo}
      resultado={resultado}
      arrChutes={arrChutes}
      setArrChutes={setArrChutes}
      setQtdErros={setQtdErros}
      setResultado={setResultado}
      setValorInput={setValorInput}
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
      forcaMudou={forcaMudou}
      atualizarPalavraTela={atualizarPalavraTela}
      qtdErros={qtdErros}
      setResultado={setResultado}
    />
  </>
);
}





export default App;
