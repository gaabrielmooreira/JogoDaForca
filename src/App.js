import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import React from "react"

function App() {
  const palavraSorteada = sorteiaPalavra();
  const [desabilitarJogo, setDesabilitarJogo] = React.useState(true);
  const [forcaTitulo, setForcaTitulo] = React.useState("1 - ESTADO INICIAL DO JOGO");
  const [forcaImg,setForcaImg] = React.useState("assets/forca0.png");
  const [qtdErros,setQtdErros] = React.useState(0);
  
  function forcaMudaImg (qtdErros){
    if(qtdErros === 1) setForcaImg("assets/forca1.png");
    if(qtdErros === 2) setForcaImg("assets/forca2.png");
    if(qtdErros === 3) setForcaImg("assets/forca3.png");
    if(qtdErros === 4) setForcaImg("assets/forca4.png");
    if(qtdErros === 5) setForcaImg("assets/forca5.png");
    if(qtdErros === 6) setForcaImg("assets/forca6.png");
  }

  function errouLetra(){
    setQtdErros(qtdErros + 1);

    forcaMudaImg(qtdErros);
  }

  function habilitarJogo(){
    setDesabilitarJogo(false);
    setQtdErros(0);
    setForcaTitulo("2 - JOGO INICIADO");
  }

  return (
    <>
      <Jogo 
        palavraSorteada={palavraSorteada} 
        desabilitarJogo={desabilitarJogo}
        habilitarJogo={habilitarJogo} 
        forcaTitulo={forcaTitulo} 
        forcaImg={forcaImg}
      />

      <Letras 
        desabilitarJogo={desabilitarJogo}
        errouLetra={errouLetra}
      />

      <Chute desabilitarJogo={desabilitarJogo}/>
    </>
  );
}

// 
const sorteiaPalavra = () => palavras[Math.floor(Math.random() * palavras.length)];



export default App;
