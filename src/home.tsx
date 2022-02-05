import React, { useContext } from 'react';
import { CardsContext, CardData } from './context/card-context';

const Home = () => {
  const { cards } = useContext(CardsContext);
  console.log(cards);

  return <div>Hello, world.</div>;
};

export default Home;
