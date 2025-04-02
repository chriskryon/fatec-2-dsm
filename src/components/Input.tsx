import { useContext } from 'react';
import { TextContext } from '../contexts/BallContext';
import { styles } from './styles';

export const Input = () => {
  const { setInput } = useContext(TextContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Digite seu nome"
      onChange={handleChange}
      style={styles.inputQuantidade}
    />
  );
};
