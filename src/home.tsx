import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CardsContext, CardData } from './context/card-context';
import Landing from './components/landing';
import DrawForm from './components/draw-form';
import Draw from './components/draw';
import styles from './assets/styles/home.module.scss';

const Home = () => {
  const [question, setQuestion] = useState<string>('');
  const { cards } = useContext(CardsContext);

  return (
    <>
      <div className={styles.home}>
        <Router>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route
              path='/ask'
              element={
                <DrawForm question={question} setQuestion={setQuestion} />
              }
            />
            <Route path='/draw' element={<Draw />} />
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
