import styled from 'styled-components';
import type { BallProps } from '../types/index.ts';

const BallContainer = styled.div`
  background-color: ${props => props.theme.colors.ball.background};
  color: ${props => props.theme.colors.ball.text};
  padding: 2px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const Ball = ({ number }: BallProps) => (
  <BallContainer>{number}</BallContainer>
);