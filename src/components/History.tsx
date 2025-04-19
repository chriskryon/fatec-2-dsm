import { useContext } from 'react';
import { styles } from '../styles/styles';
import { Ball } from './Ball';
import { LotteryContext } from '../contexts/LotteryContext';
import { useNavigate } from 'react-router';

export default function History() {
  const { attempts, setAttempts } = useContext(LotteryContext);
  const hasAttempts = attempts.length > 0;
  const navigate = useNavigate();

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

  const handleGenerate = () => {
    navigate('/palpite');
  };

  return (
    <div style={styles.exercicioContainer}>
      {hasAttempts && (
        <button type="button" style={styles.clearBtn} onClick={handleClear}>
          Limpar Palpites
        </button>
      )}

      <h2>Palpites</h2>
      <div>
        {hasAttempts ? (
          attempts.map(renderAttempt)
        ) : (
          <div style={styles.appContainer}>
            <p>Nenhum palpite registrado ainda.</p>
            <button
              type="button"
              style={styles.welcomeBtn}
              onClick={handleGenerate}
            >
              Gerar Palpite
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
