import Card from './Card';

export default function Corpo() {

    const perguntas = [
        "O que é JSX?",
        "O React é...",
        "Componentes devem iniciar com...",
        "Podemos colocar ... dentro do JSX",
        "O ReactDOM nos ajuda...",
        "Usamos o npm para...",
        "Usamos props para...",
        "Usamos estado (state) para..."
    ];
    const respostas = [
        "Uma extensão de linguagem do JavaScript",
        "uma biblioteca JavaScript para construção de interfaces",
        "letra maiúscula",
        "expressões",
        "interagindo com a DOM para colocar componentes React na mesma",
        "gerenciar os pacotes necessários e suas dependências",
        "passar diferentes informações para componentes ",
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    ];

    const cards = [
        {numPergunta:"Pergunta 1"},
        {numPergunta:"Pergunta 2"},
        {numPergunta:"Pergunta 3"},
        {numPergunta:"Pergunta 4"}
    ];

    return (
      <div className="corpo">
        <div className='virado'>
            <div>{perguntas[0]}</div>
            <img alt="setinha" src="assets/img/setinha.png" />
        </div>
        {cards.map((e,index) => <Card key="index" numPergunta={e.numPergunta} />)}
      </div>
    );
}