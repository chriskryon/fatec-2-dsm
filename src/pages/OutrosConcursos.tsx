import { useContext, useState } from 'react';
import { LotteryContext } from '../contexts/LotteryContext';
import { LotteryCard } from '../components/LotteryCard';
import MegasenaSkeleton from '../components/MegasenaSkeleton';
import { styles } from '../styles/styles';

export default function OutrosConcursos() {
  const { lotteries } = useContext(LotteryContext);
  const [selectedLottery, setSelectedLottery] = useState<
    'megasena' | keyof typeof lotteries | null
  >('megasena');

  if (!lotteries) {
    return (
      <div style={styles.exercicioContainer}>
        <MegasenaSkeleton />
      </div>
    );
  }

  const otherLotteries = Object.entries(lotteries).filter(
    ([key, lottery]) =>
      key !== 'megasena' && lottery.dezenas && lottery.dezenas.length > 0,
  );

  function renderSelectedLotteryCard() {
    if (selectedLottery && lotteries?.[selectedLottery]) {
      return <LotteryCard lottery={lotteries[selectedLottery]} />;
    }
    return (
      <div style={styles.exercicioContainer}>
        <p style={styles.message}>Selecione um concurso acima</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        {otherLotteries.map(([key]) => (
          <button
            type="button"
            key={key}
            style={styles.linkButton}
            onClick={() => setSelectedLottery(key as keyof typeof lotteries)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={styles.cardContainer}>
        <div style={styles.cardContainer}>{renderSelectedLotteryCard()}</div>
      </div>
    </div>
  );
}
