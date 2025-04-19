import { useContext } from 'react';
import { styles } from '../styles/styles';
import { Ball } from './Ball';
import { LotteryContext } from '../contexts/LotteryContext';

export default function History() {
  const { attempts, setAttempts } = useContext(LotteryContext);

  const renderAttempt = (attempt: string, attemptIndex: number) => {
    const numbers = attempt.split(',').map((num) => num.trim());
    return (
      <div key={attemptIndex} style={styles.attemptContainer}>
        {numbers.map((number, index) => (
          <Ball key={index} number={number} />
        ))}
      </div>
    );
  };

  const handleClear = () => {
    setAttempts([]);
  };

  return (
    <div style={styles.exercicioContainer}>
      
      {attempts.length > 0 && (
        <button type='button' style={styles.clearBtn} onClick={handleClear}>
          Limpar Palpites
        </button>
      )}

      <h2>Palpites</h2>
      <div>
        {attempts.length > 0 ? (
          attempts.map(renderAttempt)
        ) : (
          <p>Nenhum palpite registrado ainda.</p>
        )}
      </div>
    </div>
  );
}
