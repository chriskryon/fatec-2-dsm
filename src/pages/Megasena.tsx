import { useContext } from 'react';
import { LotteryContext } from '../contexts/LotteryContext';
import { LotteryCard } from '../components/LotteryCard';
import MegasenaSkeleton from '../components/MegasenaSkeleton';
import { styles } from '../styles/styles';

export default function Megasena() {
  const { lotteries } = useContext(LotteryContext);

  if (!lotteries) {
    return (
      <div style={styles.exercicioContainer}>
        <MegasenaSkeleton />
      </div>
    );
  }

  return (
    <div>
      <LotteryCard lottery={lotteries.megasena} />
    </div>
  );
}