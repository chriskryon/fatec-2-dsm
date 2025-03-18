import { styles } from './styles.ts';

interface BallProps {
  num: number;
  onRemove?: () => void;
  backgroundColor: string;
}

export const Ball = ({ num, onRemove, backgroundColor }: BallProps) => (
  <div
    style={styles.numero(backgroundColor)}
    onContextMenu={(e) => {
      e.preventDefault();
      onRemove?.();
    }}
  >
    {num}
  </div>
);
