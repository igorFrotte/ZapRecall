import party from "../../assets/img/party.png";
import sad from "../../assets/img/sad.png";
import "./style.css";

export default function Base({numZap, resultados, trocarTela}) {

  let final = false;
  let img = party;
  let recado = "Você não esqueceu de nenhum flashcard!";
  let recadoPrincipal = "Parabéns!";

  function zapsCertos(){
    let zaps = 0;
    for(let i=0;i<resultados.length;i++){
      if(resultados[i][0] === "verde"){
        zaps++;
      }
    }
    if(zaps >= numZap[1]){ 
      return false;
    }
    return true;
  }

  if(resultados.length + "" === numZap[0]){ 
    final = true;
    if(zapsCertos()){
      img = sad;
      recado = "Ainda faltam alguns... Mas não desanime!";
      recadoPrincipal = "Putz...";
    }
  }

    return (
      <div className="base">
        {final? <div><img alt="recado" src={img} /><strong>{final? recadoPrincipal: ""}</strong></div> : ""}
        {final? <div>{recado}</div> : ""}
        <div>{resultados.length}/{numZap[0]} CONCLUÍDOS</div> 
        <p>
        {resultados.map((e, index) => <ion-icon key={index} id={e[0]} name={e[1]} ></ion-icon>)}
        </p>
        {final?<div onClick={() => trocarTela([]) } className="reiniciar">REINICIAR RECALL</div> : ""}
      </div>
    );
}


