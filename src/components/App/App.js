import Tela1 from '../Tela1/Tela1';
import Tela2 from '../Tela2/Tela2';
import React from "react";
import "../../assets/css/reset.css";
import "../../assets/css/style.css";

export default function App() {

  const [tela, setTela] = React.useState(true);
  const [deck, setDeck] = React.useState([]);
  const [numZap, setNumZap] = React.useState([]);

  function trocarTela(valor){
    setTela(!tela);
    setDeck(valor);
  }
  
    return (
      <div className='pagina'>
        {tela ? <Tela1 setNumZap={setNumZap} deck={deck} trocarTela={trocarTela} /> : <Tela2 numZap={numZap} trocarTela={trocarTela} deck={deck} />}
      </div>
    );
}