import { useContext } from 'react';
import { TextContext } from '../contexts/BallContext';
import { Ball } from './Ball';
import { styles } from './styles';

export const Display = () => {
  const { input } = useContext(TextContext);

  const letters = input ? input.split('') : [];

  const renderBalls = () => {
    if (letters.length === 0) {
      return <p style={styles.noInputText}>Sem entrada</p>;
    }

    return letters.map((letter, index) => (
      <Ball key={`${index}-${letter}`} letter={letter} />
    ));
  };

  return <div style={styles.displayContainer}>{renderBalls()}</div>;
};
