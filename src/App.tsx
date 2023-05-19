import React from 'react';
import CardView from "./Cards/Cards";
import './cards.css';
import './App.css';


function App() {


  return (
    <div className="App">
      <CardView rank="K"  suit="diams"/>
    </div>
  );
}

export default App;


//if (suit === diams) {
//         diams = '♦'
//     } if (suit === hearts) {
//         hearts = '♥'
//     } if (suit === clubs) {
//         clubs = '♣'
//     } else {
//         spades = '♠'
//     }
