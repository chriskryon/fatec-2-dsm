import { useState } from 'react';
import { styles } from './styles.ts';
import { Ball } from './Ball';

const ListaNumeros = ({
  numeros,
  onRemove,
}: { numeros: number[]; onRemove: (index: number) => void }) => (
  <div style={styles.listaNumeros}>
    {numeros.map((num, index) => (
      <Ball
        key={`${index}-${num}`}
        num={num}
        onRemove={() => onRemove(index)}
        backgroundColor="#e74c3c"
      />
    ))}
  </div>
);

const Exercicio2 = () => {
  const [quantidade, setQuantidade] = useState<number | ''>('');
  const [numeros, setNumeros] = useState<number[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value) && value >= 0) {
      setQuantidade(value);
      gerarNumeros(value);
    } else {
      setQuantidade('');
    }
  };

  const gerarNumeros = (quantidade: number) => {
    const limite = 12;
    const novosNumeros = [...numeros, quantidade];

    if (novosNumeros.length > limite) {
      novosNumeros.shift();
    }

    setNumeros(novosNumeros);
  };

  const removerNumero = (index: number) => {
    const novosNumeros = [...numeros];

    novosNumeros.splice(index, 1);
    setNumeros(novosNumeros);
  };

  return (
    <div style={styles.exercicioContainer}>
      <h1 style={styles.titulo('#e74c3c')}>Exercício 2</h1>
      <input
        type="number"
        value={quantidade}
        onChange={handleChange}
        min="0"
        placeholder="Digite um número"
        style={styles.inputQuantidade}
      />
      <ListaNumeros numeros={numeros} onRemove={removerNumero} />
    </div>
  );
};

export default Exercicio2;
