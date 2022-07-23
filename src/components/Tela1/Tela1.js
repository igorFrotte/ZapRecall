import logo from "../../assets/img/logo.png";
import "./style.css";

export default function Tela1({deck, trocarTela}) {

const pergJS = [
    ["O que é JSX?","Uma extensão de linguagem do JavaScript"],
    ["O React é...","uma biblioteca JavaScript para construção de interfaces"],
    ["Componentes devem iniciar com...","letra maiúscula"],
    ["Podemos colocar ... dentro do JSX","expressões"],
    ["O ReactDOM nos ajuda...","interagindo com a DOM para colocar componentes React na mesma"],
    ["Usamos o npm para...","gerenciar os pacotes necessários e suas dependências"],
    ["Usamos props para...","passar diferentes informações para componentes "],
    ["Usamos estado (state) para...","dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"]
];

function criarDeck(pergResp){
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

criarDeck(pergJS);

    return (
      <div className="inicio">
        <img alt="logo" src={logo}/>
        <h1>ZapRecall</h1>
        <div onClick={() => trocarTela()} >Iniciar Recall!</div>
      </div>
    );
}