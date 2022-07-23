import Tela1 from './Tela1';
import Tela2 from './Tela2';
import React from "react";

export default function App() {

  const [tela, setTela] = React.useState(true);
  const [deck, setDeck] = React.useState([]);

  function trocarTela(){
    setTela(!tela);
  }
  
    return (
      <div className='pagina'>
        {tela ? <Tela1 deck={deck} trocarTela={trocarTela} /> : <Tela2 setDeck={setDeck} deck={deck} />}
      </div>
    );
}