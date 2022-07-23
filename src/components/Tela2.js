import Base from './Base';
import Corpo from './Corpo';
import React from "react";

export default function Tela2({deck}) {

  const [resultados, setResultados] = React.useState([]);

    return (
      <div className="tela2">
        <div className="logo">
          <img alt="logo" src="assets/img/logo.png" />
          <h2>ZapRecall</h2>
        </div>
        <Corpo resultados={resultados} setResultados={setResultados} deck={deck} />
        <Base resultados={resultados} deck={deck} /> 
      </div>
    );
}