import Card from '../Card/Card';
import "./style.css";

export default function Corpo({deck,resultados, setResultados}) {

    return (
      <div className="corpo">
        {deck.map((elemento,index) => <Card key={index} resultados={resultados} setResultados={setResultados} card={elemento} />)}
      </div>
    );
}