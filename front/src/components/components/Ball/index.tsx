import { BallContainer } from './styles';

interface BallProps {
  number: number;
}

const Ball: React.FC<BallProps> = ({ number }) => {
  return (
    <BallContainer aria-label={`Bola sorteada: ${number}`}>
      {number}
    </BallContainer>
  );
};

export default Ball;
