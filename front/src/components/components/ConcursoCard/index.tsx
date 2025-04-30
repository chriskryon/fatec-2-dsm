import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Ball from '../Ball';
import {
  CardContainer,
  CardHeader,
  CardTitle,
  CardDate,
  PremioEstimado,
  BallsContainer,
  ResultsGrid,
  ResultCard,
  ResultTitle,
  ResultValue,
  ResultDetail,
} from './styles';
import type { Concurso } from '../../../types/concurso';

interface ConcursoCardProps {
  concurso: Concurso;
}

const formatCurrency = (value: string) => {
  const numValue = Number.parseFloat(value);
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numValue);
};

const ConcursoCard: React.FC<ConcursoCardProps> = ({ concurso }) => {
  const formattedDate = format(
    parseISO(concurso.data_do_sorteio),
    "EEEE, dd 'de' MMMM 'de' yyyy",
    { locale: ptBR },
  );

  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  const balls = [
    concurso.bola1,
    concurso.bola2,
    concurso.bola3,
    concurso.bola4,
    concurso.bola5,
    concurso.bola6,
  ];

  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Concurso {concurso.concurso}</CardTitle>
        <CardDate>{capitalizedDate}</CardDate>

        {concurso.estimativa_premio && (
          <PremioEstimado>
            Prêmio Estimado: {formatCurrency(concurso.estimativa_premio)}
          </PremioEstimado>
        )}
      </CardHeader>

      <BallsContainer>
        {balls.map((ball) => (
          <Ball key={ball} number={ball} />
        ))}
      </BallsContainer>

      <ResultsGrid>
        <ResultCard>
          <ResultTitle>6 Acertos</ResultTitle>
          <ResultValue>
            {concurso.ganhadores_6_acertos === 0
              ? 'Acumulado'
              : `${concurso.ganhadores_6_acertos} Ganhador${concurso.ganhadores_6_acertos > 1 ? 'es' : ''}`}
          </ResultValue>
          <ResultDetail>
            {formatCurrency(concurso.rateio_6_acertos)}
          </ResultDetail>
        </ResultCard>

        <ResultCard>
          <ResultTitle>5 Acertos</ResultTitle>
          <ResultValue>{concurso.ganhadores_5_acertos} Ganhadores</ResultValue>
          <ResultDetail>
            {formatCurrency(concurso.rateio_5_acertos)}
          </ResultDetail>
        </ResultCard>

        <ResultCard>
          <ResultTitle>4 Acertos</ResultTitle>
          <ResultValue>{concurso.ganhadores_4_acertos} Ganhadores</ResultValue>
          <ResultDetail>
            {formatCurrency(concurso.rateio_4_acertos)}
          </ResultDetail>
        </ResultCard>
      </ResultsGrid>
    </CardContainer>
  );
};

export default ConcursoCard;
