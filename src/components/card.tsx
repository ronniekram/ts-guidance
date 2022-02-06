import React from 'react';
import { CardData } from '../context/card-context';
import sword from '../assets/svg/sword.svg';
import styles from '../assets/styles/cards/card.module.scss';

const Card = ({ cardType, name, meaning_up, meaning_rev, desc }: CardData) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{name}</h1>
        <h2>{cardType} Arcana</h2>
      </div>

      <div className={styles.text}>
        <div className={styles.summary}>
          <p>{desc}</p>
        </div>

        <div className={styles.directionContainer}>
          <div className={styles.sheath}>
            <img src={sword} alt="It's a sword." className={styles.sword} />
          </div>

          <div className={styles.directions}>
            <div>
              <h4>Upright:</h4>
              <p>{meaning_up}</p>
            </div>

            <div>
              <h4>Reversed:</h4>
              <p>{meaning_rev}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
