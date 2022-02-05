import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CardsContext, CardData } from './context/card-context';
import Landing from './components/landing';
import styles from './assets/styles/home.module.scss';

const Home = () => {
  const { cards } = useContext(CardsContext);

  return (
    <>
      <div className={styles.home}>
        <Router>
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
        </Router>
        <div className={styles.title}>
          <h1>Seeking Guidance</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
