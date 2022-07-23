import Card from './Card';

export default function Corpo({deck,resultados, setResultados}) {

    return (
      <div className="corpo">
        {deck.map((elemento,index) => <Card key={index} resultados={resultados} setResultados={setResultados} card={elemento} />)}
      </div>
    );
}