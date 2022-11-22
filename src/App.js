function App() {
  return (
    <div className="app">
      <header>
        <h1>1 - ESTADO INICIAL DO JOGO</h1>
      </header>

      <div className="jogo">
        <img src="assets/forca0.png" alt="Forca"/>
        <div>
          <button className="botao-iniciar">Escolher Palavra</button>
          <p>_ _ _ _ _ _ _</p>
        </div>
      </div>

      <div className="letras">
        <button class="letra apagada">A</button>
      </div>

      <div className="chute">
        <p>Já sei a palavra!</p>
        <input type="text"></input>
        <button>Chutar</button>
      </div>
    </div>
  );
}

export default App;
