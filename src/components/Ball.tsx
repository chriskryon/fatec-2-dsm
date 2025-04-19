import type { BallProps } from '../types/index.ts';
import { styles } from '../styles/styles.ts';

export const Ball = ({ number }: BallProps) => (
  <div style={styles.numero}>{number}</div>
);
