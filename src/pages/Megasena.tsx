import { useContext } from 'react';
import { styles } from '../styles/styles';
import { LotteryContext } from '../contexts/LotteryContext';
import { Ball } from '../components/Ball';
import MegasenaSkeleton from '../components/MegasenaSkeleton';

export default function Megasena() {
  const { megasena } = useContext(LotteryContext);

  if (!megasena) {
    return (
      <div style={styles.exercicioContainer}>
        <MegasenaSkeleton />
      </div>
    );
  }

  return (
    <div style={styles.exercicioContainer}>
      <p style={styles.title}>Mega-sena</p>
      <p>Concurso: {megasena.numeroDoConcurso}</p>
      <div style={styles.suggestion}>
        {megasena.dezenas.map((dezena, index) => (
          <Ball key={index} number={dezena} />
        ))}
      </div>
      <p>Data: {megasena.dataPorExtenso}</p>
    </div>
  );
}
