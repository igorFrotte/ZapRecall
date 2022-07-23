export default function Base({resultados, deck}) {

  let final = false;
  let img = "assets/img/party.png";
  let recado = "Você não esqueceu de nenhum flashcard!";
  let recadoPrincipal = "Parabéns!";

  function errouAlguma(){
    let errados = 0;
    for(let i=0;i<resultados.length;i++){
      if(resultados[i][0] === "vermelho"){
        errados++;
      }
    }
    if(errados > 0){ //numer 0
      return true;
    }
    return false;
  }

  if(resultados.length === 4){ //numero 4
    final = true;
    if(errouAlguma()){
      img = "assets/img/sad.png";
      recado = "Ainda faltam alguns... Mas não desanime!";
      recadoPrincipal = "Putz...";
    }
  }

    return (
      <div onClick={()=> console.log(deck)} className="base">
        {final? <div><img alt="recado" src={img} /><strong>{final? recadoPrincipal: ""}</strong></div> : ""}
        {final? <div>{recado}</div> : ""}
        <div>{resultados.length}/4 CONCLUÍDOS</div> 
        <p>
        {resultados.map((e, index) => <ion-icon key={index} id={e[0]} name={e[1]} ></ion-icon>)}
        </p>
      </div>
    );
}


