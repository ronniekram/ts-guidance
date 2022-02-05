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

export const cardContextDefault: CardsData = {
  cards: allCards,
};

export const CardsContext = createContext<CardsData>(cardContextDefault);
