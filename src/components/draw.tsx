import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardData, CardsContext } from '../context/card-context';
import Cards from './cards';
import styles from '../assets/styles/draw/draw.module.scss';

interface DrawProps {
  question: string;
}

const Draw = ({ question }: DrawProps) => {
  const navigate = useNavigate();

  const { getCards } = useContext(CardsContext);
  const cards: CardData[] = getCards();

  useEffect(() => {
    if (question.trim() === '') {
      navigate('/ask');
    }
  });

  return (
    <div className={styles.draw}>
      <div>
        <div className={styles.question}>{question}</div>
        <Cards cards={cards} />
      </div>
    </div>
  );
};

export default Draw;
