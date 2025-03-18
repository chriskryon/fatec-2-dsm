import { useState } from 'react';
import { styles } from './styles.ts';
import { Ball } from './Ball';

const ListaNumeros = ({ numeros }: { numeros: number[] }) => (
  <div style={styles.listaNumeros}>
    {numeros.map((num, index) => (
      <Ball key={`${index}-${num}`} num={num} backgroundColor="#4a90e2" />
    ))}
  </div>
);

const Exercicio1 = () => {
  const [quantidade, setQuantidade] = useState<number | ''>('');
  const [numeros, setNumeros] = useState<number[]>([]);

  const gerarNumeros = (quantidade: number) => {
    const limite = Math.min(quantidade, 12); // Limitar a 12 números
    const numerosGerados = Array.from({ length: limite }, () =>
      Math.floor(Math.random() * 100),
    );
    setNumeros(numerosGerados.sort((a, b) => a - b)); // Ordenar em ordem crescente
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantidade(value);
    gerarNumeros(value);
  };

  return (
    <div style={styles.exercicioContainer}>
      <h1 style={styles.titulo('#4a90e2')}>Exercício 1</h1>
      <input
        type="number"
        value={quantidade}
        onChange={handleChange}
        min="1"
        max="12"
        placeholder="Quantidade de números"
        style={styles.inputQuantidade}
      />
      <ListaNumeros numeros={numeros} />
    </div>
  );
};

export default Exercicio1;
