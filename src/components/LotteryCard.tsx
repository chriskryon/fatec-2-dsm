import styled from 'styled-components';
import { Ball } from './Ball';
import type { LotteryCardProps } from '../types';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.card.background};
  padding: 20px;
  border-radius: 15px;
  color: ${props => props.theme.colors.card.text};
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  width: 700px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  max-height: 70vh;
  overflow-y: auto;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0;
`;

const BallsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 10px;
  justify-content: center;
`;

export const LotteryCard = ({ lottery }: LotteryCardProps) => (
  <CardContainer>
    <Title>{lottery.tipoJogo.replace('_', ' ')}</Title>
    <p>Concurso: {lottery.numeroDoConcurso}</p>
    <BallsContainer>
      {lottery.dezenas.map((dezena, index) => (
        <Ball key={index} number={dezena} />
      ))}
    </BallsContainer>
    <p>Data: {lottery.dataPorExtenso}</p>
  </CardContainer>
);