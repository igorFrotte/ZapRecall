import logo from "../../assets/img/logo.png";
import "./style.css";
import React from "react";

export default function Tela1({setNumZap, deck, trocarTela}) {

  const [erro,setErro] = React.useState(["","",""]); //num-meta-selec
  const [revela,setRevela] = React.useState(["","",""]);

  const pergTU = [
    ["Quem é o melhor tutor?","Marcio Cunha"],
    ["Quem vai dar Acima das expectativas para esse projeto?","Marcio Cunha"],
    ["Quem vai adorar esse projeto?","Marcio Cunha"],
    ["Quem gostou muito desse projeto?","Marcio Cunha"],
    ["Qual é o melhor bootcamp q existe?","Driven"],
    ["Quem é o melhor aluno?","Igor Frotté"],
    ["Quem criou esse projeto incrível?","Igor Frotté"],
    ["Quem vai tirar Acima das expectativas?","Igor Frotté"]
];

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

  const pergBR = [
    ["Qual município do Brasil tem a maior extensão territorial?","Altamira-PA"],
    ["Qual é a menor capital estadual do Brasil em população?","Palmas-TO"],
    ["Qual o ponto mais extremo no sentido leste de todo território brasileiro?","Ilhas de Martim Vaz-ES"],
    ["Qual a maior ilha brasileira em extensão?","Ilha do Marajó-PA"],
    ["Atualmente, existem quantos fusos horários no território brasileiro?","3"],
    ["Em que ano começou a vigorar o horário de verão no Brasil?","1931"],
    ["Qual a cidade mais velha do Brasil?","São Vicente-SP"],
    ["Qual a categoria toponímia mais comum em nomes dos municípios brasileiros?","Religioso"]
  ];

  const pergAL = [
    ["Anualmente, quantos terremotos sacodem a Terra?","cerca de 1.000.000"],
    ["Um ser humano tem, em média, quantos fios de cabelos?","cerca de 100.000"],
    ["Qual animal é o mais rápido entre o porco, a girafa e o elefante?","A Girafa"],
    ["Que animal, em média, vive mais entre o macaco, o coelho e o rinoceronte?","O rinoceronte"],
    ["Qual o animal mais pesado do mundo?","A Baleia Azul"],
    ["Em quais lugares do mundo, o Homem vive mais que as Mulheres?","No sul da Ásia e no Irã"],
    ["Qual a temperatura necessária para a gasolina congelar?","Nunca congela"],
    ["Em que parte do corpo humano você encontra uma amostra completa do seu DNA?","Nos cabelos"]
  ];

  function criarDeck(pergResp){
    pergResp.sort(() => Math.random() - 0.5);
    for(let i=0;i<revela[0];i++){ // numero de cards
      let card = {
        numPerg: "Pergunta "+(i+1),
        pergunta: pergResp[i][0],
        resposta: pergResp[i][1],
        resultado: ""
      }
      deck.push(card);
    }
  }

    return (
      <div className="inicio">
        <img alt="logo" src={logo}/>
        <h1>ZapRecall</h1>
        <div>
        <input onChange={(e) => {
          revela[0] = e.target.value;
          setRevela([...revela]);
        }} type="text" placeholder="Digite o número de cards..." />
        {erro[0]? <h4>{erro[0]}</h4> : ""}
        </div>
        <div>
        <input onChange={(e) => {
          revela[1] = e.target.value;
          setRevela([...revela]);
        }} type="text" placeholder="Digite sua meta de zaps..." />
        {erro[1]? <h4>{erro[1]}</h4> : ""}
        </div>
        <div>
        <select onChange={(e) => {
          revela[2] = e.target.value;
          setRevela([...revela]);
        }} >
          <option value="">Escolha seu deck</option>
          <option value="tu">Tutor Driven</option>
          <option value="js">React</option>
          <option value="br">Brasil</option>
          <option value="al">Aleatório</option>
        </select>
        {erro[2]? <h4>{erro[2]}</h4> : ""}
        </div>
        <div className={revela[0]!=="" && revela[1]!=="" && revela[2]!==""? "bt" : "btDesabilitado"} onClick={() => {
            if(isNaN(revela[0]) || revela[0] < 4 || revela[0] > 8){
              erro[0] = "Digite um número de 4 a 8.";
            }else{ 
              erro[0] = ""; 
            }
            if(isNaN(revela[1]) || revela[1] < 1 || revela[1] > revela[0]){
              erro[1] = "Digite um número válido!";
            }else{ 
              erro[1] = ""; 
            }
            if(revela[2] === ""){
              erro[2] = "Selecione uma opção válida!";
            }else{ 
              erro[2] = ""; 
            }
            setErro([...erro]);
            if(erro[0] === "" && erro[1] === "" && erro[2] === ""){
              if(revela[2] === "tu"){
                criarDeck(pergTU);
              }
              if(revela[2] === "js"){
                criarDeck(pergJS);
              }
              if(revela[2] === "al"){
                criarDeck(pergAL);
              }
              if(revela[2] === "br"){
                criarDeck(pergBR);
              }
              setNumZap([revela[0],revela[1]]);
              trocarTela(deck);
            }
          }} >Iniciar Recall!</div>
      </div>
    );
}