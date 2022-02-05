import React, { useContext } from 'react';
import { CardsContext, CardData } from './context/card-context';
import styles from './assets/styles/home.module.scss';

const Home = () => {
  const { cards } = useContext(CardsContext);

  return <div>Hello World</div>;
};

export default Home;
