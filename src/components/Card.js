import React from "react";

let risco = false;
let cor = "";
let icone = "play-outline";

export default function Card({card}) {

  const [mostrou, setMostrou] = React.useState(false);
  const [virou, setVirou] = React.useState(false);

  function mudarResultado(valor){
    card.resultado = valor;
    risco = true;
    cor = "riscado verde";
    icone = "close-circle";
    setMostrou(false);
  }
    return (
      <div className={mostrou? "revelado" : ""}>
        <div className={risco? cor : ""} >{ mostrou? virou? card.resposta : card.pergunta : card.numPerg}</div>
        { mostrou ? 
          virou? 
          <div className="botoes">
            <div onClick={() => mudarResultado("errado")} className="bt nao">Não lembrei</div>
            <div onClick={() => mudarResultado("quase")} className="bt quase">Quase não lembrei</div>
            <div onClick={() => mudarResultado("certo")} className="bt sim">Zap!</div>
          </div> :
          <img onClick={() => setVirou(true)} alt="setinha" src="assets/img/setinha.png" /> :
          <ion-icon className={risco? "sim" : ""} onClick={() => setMostrou(true)} name={icone}></ion-icon> 
        }
      </div>
    );
}