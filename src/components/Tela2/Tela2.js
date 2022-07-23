import Base from '../Base/Base';
import Corpo from '../Corpo/Corpo';
import React from "react";
import logo from "../../assets/img/logo.png";
import "./style.css";

export default function Tela2({deck}) {

  const [resultados, setResultados] = React.useState([]);

    return (
      <div className="tela2">
        <div className="logo">
          <img alt="logo" src={logo} />
          <h2>ZapRecall</h2>
        </div>
        <Corpo resultados={resultados} setResultados={setResultados} deck={deck} />
        <Base resultados={resultados} deck={deck} /> 
      </div>
    );
}