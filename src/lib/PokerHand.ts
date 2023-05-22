import Card from "./card";


class PokerHand {
    private readonly cards: Card[];
    constructor(cards: Card[]) {
        this.cards = cards;
    }
    getOutcome(): string {
        const isFlash = this.cards.every(card => card.suit === this.cards[0].suit);
        if (isFlash) {
            return 'Flash';
        }
        const ranks: {[key: string]: number} = {};
        this.cards.forEach((card) => {
            if (ranks[card.runk]) {
                ranks[card.runk] = ranks[card.runk] + 1;
            } else {
                ranks[card.runk] = 1;
            }
        });
       const values = Object.values(ranks);
       if (values.includes(3)) {
           return 'three of a kind';
       }
       let pairNumber = 0;
       values.forEach(value => {
           if (value === 2) {
               pairNumber = pairNumber + 1;
           }
       });
       if (pairNumber === 1) {
           return 'Pair';
       } else if (pairNumber === 2) {
           return 'Two pairs'
       }
        return 'NON OF COMBINATION';
    }

}

export default PokerHand;