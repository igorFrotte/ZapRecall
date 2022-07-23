export default function Tela1({setDeck, trocarTela}) {

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

setDeck(pergJS);

    return (
      <div className="inicio">
        <img alt="logo" src="assets/img/logo.png"/>
        <h1>ZapRecall</h1>
        <div onClick={() => trocarTela()} >Iniciar Recall!</div>
      </div>
    );
}