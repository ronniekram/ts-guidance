import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/landing';
import DrawForm from './components/draw-form';
import Draw from './components/draw';
import styles from './assets/styles/home.module.scss';

const Home = () => {
  const [question, setQuestion] = useState<string>('');

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
            <Route path='/draw' element={<Draw question={question} />} />
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
