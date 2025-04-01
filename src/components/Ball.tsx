import type { BallProps } from '../types/index.ts';
import { styles } from './styles.ts';

export const Ball = ({ letter }: BallProps) => (
  <div style={styles.numero('#4a90e2')}>{letter}</div>
);
