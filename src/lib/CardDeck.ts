import Card from "./card";

class CardDeck {
    private readonly runks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits = ['diams', 'hearts', 'clubs', 'spades'];
    public deck: Card[] = [];
    constructor() {
        this.suits.forEach(suit => {
            this.runks.forEach(runk => {
                const card = new Card(runk, suit);
                this.deck.push(card);
            })
        })
    }

    getCard():Card {
        const rundomCard = Math.floor(Math.random() * this.deck.length);
        const deletedCard = this.deck.splice(rundomCard, 1)
        return deletedCard[0];
    }

    getCards(howMany: number) : Card[] {
        const rundomFiveCard: Card[] = [];

        for (let i = 0; i < howMany; i++) {
            rundomFiveCard.push(this.getCard());
        }
        return rundomFiveCard;
    }
}

export default CardDeck