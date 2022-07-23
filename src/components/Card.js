import React from "react";

export default function Card({card}) {

  const [mostrou, setMostrou] = React.useState(false);
  const [virou, setVirou] = React.useState(false);
  const [risco, setRisco] = React.useState(false);
  const [cor, setCor] = React.useState("");
  const [icone, setIcone] = React.useState("play-outline");

  function mudarResultado(valor){
    card.resultado = valor;
    setMostrou(false);
    setRisco(true);
    switch(valor){
      case "errado":
        setCor("vermelho");
        setIcone("close-circle");
        break;
      case "quase":
        setCor("laranja");
        setIcone("help-circle");
        break;
      case "certo":
        setCor("verde");
        setIcone("checkmark-circle");
        break;
      default:
    }
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
          <ion-icon id={risco? cor : ""} onClick={() => {if(cor === ""){setMostrou(true)}}} name={icone}></ion-icon> 
        }
      </div>
    );
}