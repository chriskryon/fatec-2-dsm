import { Ball } from './Ball';
import { styles } from '../styles/styles';
import type { LotteryCardProps } from '../types';

export const LotteryCard = ({ lottery }: LotteryCardProps) => (
  <div style={styles.exercicioContainer}>
    <p style={styles.title}>{lottery.tipoJogo.replace('_', ' ')}</p>
    <p>Concurso: {lottery.numeroDoConcurso}</p>
    <div style={styles.suggestion}>
      {lottery.dezenas.map((dezena, index) => (
        <Ball key={index} number={dezena} />
      ))}
    </div>
    <p>Data: {lottery.dataPorExtenso}</p>
  </div>
);