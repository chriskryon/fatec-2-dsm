import { styles } from './styles.ts';

export interface BallProps {
  num: number;
  onRemove?: () => void; // Função opcional para remover a bola
  backgroundColor?: string; // Cor de fundo opcional
}

// Componente que representa uma "bola" com um número dentro
export const Ball = ({
  num,
  onRemove,
  backgroundColor = '#4a90e2',
}: BallProps) => (
  <div
    style={styles.numero(backgroundColor)} // Aplica os estilos com a cor de fundo
    onContextMenu={(e) => {
      e.preventDefault(); // Previne o menu de contexto padrão do navegador
      onRemove?.(); // Chama a função de remoção, se existir
    }}
  >
    {num} {/* Exibe o número dentro da bola */}
  </div>
);
