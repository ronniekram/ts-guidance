import React, { useContext } from 'react';
import { CardData, CardsContext } from '../context/card-context';

interface DrawProps {
  question: string;
}

const Draw = () => {
  const { getCards } = useContext(CardsContext);
  const cards: CardData[] = getCards();

  return <h1>Hello World</h1>;
};

export default Draw;
