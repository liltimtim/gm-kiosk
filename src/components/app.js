import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for routes

import firebase from "firebase";
import CreateGame from "../routes/creategame/create_game";
import StartGame from "../routes/startgame/start_game";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDpPGnWwWcrNjH3ACkyhG-gsbSuNOrVTiE",
      authDomain: "gamemaster-kiosk.firebaseapp.com",
      databaseURL: "https://gamemaster-kiosk.firebaseio.com",
      projectId: "gamemaster-kiosk",
      storageBucket: "gamemaster-kiosk.appspot.com",
      messagingSenderId: "467848526628"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <StartGame path="/" />
          <CreateGame path="/newgame" />
        </Router>
      </div>
    );
  }
}
