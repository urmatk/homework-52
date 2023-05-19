import React from 'react';

interface ICardViewProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<ICardViewProps> = props => {
    const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`;

    let symbol = '';

    if (props.suit === 'diams') {
        symbol = '♦'
    } if (props.suit === 'hearts') {
        symbol = '♥'
    } if (props.suit === 'clubs') {
        symbol = '♣'
    } else if (props.suit === 'clubs') {
        symbol = '♠'
    }

    return (
        <span className={cardClasses}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{symbol}</span>
        </span>

    );
};
export default CardView;