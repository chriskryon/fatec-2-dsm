import { Ball, BallProps } from './Ball';
import { styles } from './styles';

interface ListaNumerosProps {
  numeros: BallProps['num'][];
  onRemove?: BallProps['onRemove'];
  backgroundColor?: BallProps['backgroundColor'];
}

const ListaNumeros = ({
  numeros,
  onRemove,
  backgroundColor = '#4a90e2',
}: ListaNumerosProps) => (
  <div style={styles.listaNumeros}>
    {numeros.map((num, index) => (
      <Ball
        key={`${index}-${num}`}
        num={num}
        onRemove={onRemove}
        backgroundColor={backgroundColor}
      />
    ))}
  </div>
);

export default ListaNumeros;
