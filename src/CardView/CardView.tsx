import React from 'react';

interface ICardViewProps {
    runk: string;
    suit: string;
}

const CardView: React.FC<ICardViewProps> = props => {
    const cardClasses = `card rank-${props.runk.toLowerCase()} ${props.suit}`;

    let symbol = '';

    if (props.suit === 'diams') {
        symbol = '♦'
    } else if (props.suit === 'hearts') {
        symbol = '♥'
    } else if  (props.suit === 'clubs') {
        symbol = '♣'
    } else if (props.suit === 'spades') {
        symbol = '♠'
    }

    return (
        <span className={cardClasses}>
            <span className="rank">{props.runk}</span>
            <span className="suit">{symbol}</span>
        </span>

    );
};
export default CardView;