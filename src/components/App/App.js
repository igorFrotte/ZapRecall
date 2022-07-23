import Tela1 from '../Tela1/Tela1';
import Tela2 from '../Tela2/Tela2';
import React from "react";
import "../../assets/css/reset.css";
import "../../assets/css/style.css";

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