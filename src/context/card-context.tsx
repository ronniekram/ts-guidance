import { createContext } from 'react';
import { allCards } from './cards';

export interface CardData {
  cardType: string;
  name: string;
  image: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

export interface CardsData {
  cards: CardData[];
}

const getCards = () => {
  const nums = new Set<number>();
  while (nums.size < 3) {
    nums.add(Math.floor(Math.random() * 78) + 1);
  }
  const drawNums = Array.from(nums);
  return [allCards[drawNums[0]], allCards[drawNums[1]], allCards[drawNums[2]]];
};

export const cardContextDefault = {
  cards: allCards,
  getCards: getCards,
};

export const CardsContext = createContext(cardContextDefault);
