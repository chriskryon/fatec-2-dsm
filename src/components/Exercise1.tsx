import { useState } from 'react';
import { styles } from './styles.ts';
import { Ball } from './Ball.tsx';

const Exercicio1 = () => {
  // Criação dos useStates para controle
  const [quantidade, setQuantidade] = useState<number | ''>('');
  const [numeros, setNumeros] = useState<number[]>([]);

  // Método para gerar os números
  const gerarNumeros = (quantidade: number) => {
    const limite = Math.min(quantidade, 12); // Limitar a 12 números

    const numerosGerados = [];

    // Gerar números aleatórios
    for (let i = 0; i < limite; i++) {
      numerosGerados.push(Math.floor(Math.random() * 100));
    }

    setNumeros(numerosGerados.sort()); // Ordenar em ordem crescente
  };

  // Método para controlar a quantidade
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantidade(value);
  };

  // Método para gerar os números ao pressionar Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && typeof quantidade === 'number' && quantidade > 0) {
      gerarNumeros(quantidade);
    }
  };

  return (
    <div style={styles.exercicioContainer}>
      <h1 style={styles.titulo('#4a90e2')}>Exercício 1</h1>
      <input
        type="number"
        value={quantidade}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        min="1"
        max="12"
        placeholder="Quantidade de números"
        style={styles.inputQuantidade}
      />
      <div style={styles.listaNumeros}>
        {numeros.map((num, index) => (
          <Ball key={`${index}-${num}`} num={num} backgroundColor="#4a90e2" />
        ))}
      </div>
    </div>
  );
};

export default Exercicio1;
