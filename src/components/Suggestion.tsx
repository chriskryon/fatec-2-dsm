import { useState, useEffect, useContext } from 'react';
import { styles } from '../styles/styles';
import { Ball } from './Ball';
import { LotteryContext } from '../contexts/LotteryContext';
import { generateLotteryNumbers } from '../utils/generateSuggestion';

export default function Suggestion() {
  const [suggestion, setSuggestion] = useState<number[]>([]);
  const { setAttempts } = useContext(LotteryContext);

  const generateSuggestion = () => {
    const numbers = generateLotteryNumbers();

    setSuggestion(numbers);
    setAttempts((prev) => [...prev, numbers.join(', ')]);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    generateSuggestion();
  }, []);

  return (
    <div style={styles.exercicioContainer}>
      <h2>Palpite para a Mega-sena</h2>

      <div style={styles.suggestion}>
        {suggestion.map((number, index) => (
          <Ball key={index} number={number.toString()} />
        ))}
      </div>

      <button
        type="button"
        style={styles.welcomeBtn}
        onClick={generateSuggestion}
      >
        Nova Sugestão
      </button>
    </div>
  );
}
