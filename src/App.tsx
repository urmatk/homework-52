import React from 'react';
import CardView from "./CardView/CardView";
import './cards.css';
import './App.css';
import CardDeck from "./lib/CardDeck";


function App() {
const cardDeck = new CardDeck();
    console.log(cardDeck.deck);


    return (
    <div className="App">
        <div className="playingCards faceImages">
            <CardView rank="K"  suit="diams"/>
        </div>

    </div>
  );
}

export default App;


