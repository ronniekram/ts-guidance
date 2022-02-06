import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardData, CardsContext } from '../context/card-context';

interface DrawProps {
  question: string;
}

const Draw = ({ question }: DrawProps) => {
  const navigate = useNavigate();

  const { getCards } = useContext(CardsContext);
  const cards: CardData[] = getCards();

  useEffect(() => {
    if (question === '') {
      navigate('/ask');
    }
  });

  return <h1>{question ? question : null}</h1>;
};

export default Draw;
