import { h, render, Component } from "preact";
import style from "./style.css";
import QRCodeItem from "../../components/qrcode";
class CreateGame extends Component {
  render() {
    return (
      <div class={style.create_game}>
        <h1>
          Welcome, please point your device at the QR code below to register a
          new game to get started.
        </h1>
        <div class={style.qrcode_container}>
          <QRCodeItem value="https://google.com" size={300} />
        </div>
      </div>
    );
  }
}

export default CreateGame;
