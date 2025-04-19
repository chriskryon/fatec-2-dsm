import { useContext, useState } from 'react';
import { LotteryContext } from '../contexts/LotteryContext';
import { LotteryCard } from '../components/LotteryCard';
import MegasenaSkeleton from '../components/MegasenaSkeleton';
import { styles } from '../styles/styles';

export default function OutrosConcursos() {
  const { lotteries } = useContext(LotteryContext);
  const [selectedLottery, setSelectedLottery] = useState<string | null>(null);

  if (!lotteries) {
    return (
      <div style={styles.exercicioContainer}>
        <MegasenaSkeleton />
      </div>
    );
  }

  const otherLotteries = Object.entries(lotteries).filter(
    ([key, lottery]) =>
      key !== 'megasena' && lottery.dezenas && lottery.dezenas.length > 0
  );

  return (
    <div style={styles.container}>
      {/* Botões para selecionar o concurso */}
      <div style={styles.buttonContainer}>
        {otherLotteries.map(([key]) => (
          <button
            type="button"
            key={key}
            style={styles.linkButton}
            onClick={() => setSelectedLottery(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Renderiza o card do concurso selecionado */}
      <div style={styles.cardContainer}>
        {selectedLottery ? (
          <LotteryCard lottery={lotteries[selectedLottery]} />
        ) : (
          <div>
            <p style={styles.message}>Selecione um concurso acima</p>
          </div>
        )}
      </div>
    </div>
  );
}