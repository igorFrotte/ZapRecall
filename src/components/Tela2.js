import Base from './Base';
import Corpo from './Corpo';

export default function Tela2({deck}) {

  

    return (
      <div className="tela2">
        <div className="logo">
          <img alt="logo" src="assets/img/logo.png" />
          <h2>ZapRecall</h2>
        </div>
        <Corpo deck={deck} />
        <Base deck={deck} /> 
      </div>
    );
}