import Card from './Card';

export default function Corpo({deck}) {

    return (
      <div className="corpo">
        {deck.map((elemento,index) => <Card key={index} card={elemento} />)}
      </div>
    );
}