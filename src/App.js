import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import React from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

const sorteiaPalavra = () => palavras[Math.floor(Math.random() * palavras.length)];
let palavraSorteada = sorteiaPalavra();

function App() {

  const [desabilitarJogo, setDesabilitarJogo] = React.useState(true);
  const [forcaImg, setForcaImg] = React.useState(forca0);
  const [qtdErros, setQtdErros] = React.useState(0);
  const [arrChutes, setArrChutes] = React.useState([]);
  const [palavraTela, setPalavraTela] = React.useState(palavraSorteada);
  const [acabouJogo, setAcabouJogo] = React.useState(false);
  const [valorInput,setValorInput] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  function forcaMudou(qtdErrosAtual) {
    if (qtdErrosAtual >= 6) {
      setForcaImg(forca6);
      setAcabouJogo(true);
      setDesabilitarJogo(true);
      setResultado("perdeu");
      
      atualizarPalavraTela([],qtdErrosAtual);
    } else {
      let imagemForcaAtual;
      if(qtdErrosAtual === 0) imagemForcaAtual = forca0;
      if(qtdErrosAtual === 1) imagemForcaAtual = forca1;
      if(qtdErrosAtual === 2) imagemForcaAtual = forca2;
      if(qtdErrosAtual === 3) imagemForcaAtual = forca3;
      if(qtdErrosAtual === 4) imagemForcaAtual = forca4;
      if(qtdErrosAtual === 5) imagemForcaAtual = forca5;
      setForcaImg(imagemForcaAtual);
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
