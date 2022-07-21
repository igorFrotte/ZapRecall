import Base from './Base';
import Corpo from './Corpo';

export default function Tela12() {
    return (
      <div className="tela2">
        <div className="logo">
          <img alt="logo" src="assets/img/logo.png" />
          <h2>ZapRecall</h2>
        </div>
        <Corpo />
        <Base />
      </div>
    );
}