import Tela1 from './Tela1';
import Tela2 from './Tela2';
import React from "react";

let deck = []; //gambiarra??

export default function App() {

  const [tela, setTela] = React.useState(true);

  function setDeck(pergResp){
    pergResp.sort(() => Math.random() - 0.5);
    for(let i=0;i<4;i++){ // numero 4
      let card = {
        numPerg: "Pergunta "+(i+1),
        pergunta: pergResp[i][0],
        resposta: pergResp[i][1],
        resultado: ""
      }
      deck.push(card);
    }
  }

  function trocarTela(){
    setTela(!tela);
  }

    return (
      <div className='pagina'>
        {tela ? <Tela1 setDeck={setDeck} trocarTela={trocarTela} /> : <Tela2 deck={deck} />}
      </div>
    );
}