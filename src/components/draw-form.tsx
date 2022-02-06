import React, { SetStateAction, Dispatch, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/draw/draw-form.module.scss';

interface FormProps {
  question: string;
  setQuestion: Dispatch<SetStateAction<string>>;
}

const DrawForm = ({ question, setQuestion }: FormProps) => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate('/draw');
  };

  return (
    <div className={styles.form}>
      <div>Illuminate your path...</div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button type='submit'>Ask</button>
      </form>
    </div>
  );
};

export default DrawForm;
