import React from 'react';
import hand from '../assets/svg/starHand.svg';
import styles from '../assets/styles/layout/landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <img src={hand} alt='A hand holding stars.' />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <span>Illuminate your path...</span>
    </div>
  );
};

export default Landing;
