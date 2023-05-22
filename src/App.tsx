import React, {useState} from 'react';
import './App.css';
import CardDeck from "./lib/CardDeck";
import Card from "./lib/card";
import CardView from "./CardView/CardView";
import PokerHand from "./lib/PokerHand";


function App() {
    const [cards, setCards] = useState<Card[]>([]);
    const [handName, setHandName] = useState('');
    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        console.log(newCards);
        const pokerHand = new PokerHand(newCards);
        const hand = pokerHand.getOutcome();
        setHandName(hand);
        setCards(newCards);
    }

    if (cards.length === 0) {
        return <button className="btn" onClick={getCards}>Раздать карты</button>
    }

    return (
    <div className="App">
        <div className="playingCards faceImages">
            <div className="blok">
                <CardView runk={cards[0].runk} suit={cards[0].suit}/>
                <CardView runk={cards[1].runk} suit={cards[1].suit}/>
                <CardView runk={cards[2].runk} suit={cards[2].suit}/>
                <CardView runk={cards[3].runk} suit={cards[3].suit}/>
                <CardView runk={cards[4].runk} suit={cards[4].suit}/>
            </div>

        </div>
        <div className="HandName">Hand name: {handName}</div>
        <button className="btn" onClick={getCards}>Раздать карты</button>


    </div>
  );
}

export default App;


