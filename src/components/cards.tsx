import React, { useState } from 'react';
import { CardsData, CardData } from '../context/card-context';
import Card from './card';
import styles from '../assets/styles/cards/cards.module.scss';

const Cards = ({ cards }: CardsData) => {
  const [showCard, setShowCard] = useState<CardData>(cards[0]);

  debugger;

  const handleClick = (card: any) => {
    setShowCard(card);
  };

  const renderCards = () => {
    if (cards) {
      return cards.map((card) => {
        return (
          <div className={styles.card} key={card.name}>
            <img
              src={card.image}
              onClick={() => {
                handleClick(card);
              }}
              alt={card.name}
            />
          </div>
        );
      });
    }
  };

  return (
    <article className={styles.container}>
      <section className={styles.cardInfo}>
        <Card
          name={showCard.name}
          cardType={showCard.cardType}
          desc={showCard.desc}
          meaning_up={showCard.meaning_up}
          meaning_rev={showCard.meaning_rev}
        />
      </section>

      <section className={styles.cards}>{renderCards()}</section>
    </article>
  );
};

export default Cards;
