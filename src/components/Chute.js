export default function Chute(props) {
    const {desabilitarJogo} = props;

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input type="text" disabled={desabilitarJogo === true ? true:false}></input>
            <button className={desabilitarJogo === true? "desabilitar":""} disabled={desabilitarJogo === true ? true:false}>Chutar</button>
        </div>
    )
}