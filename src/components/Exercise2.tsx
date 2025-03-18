import { useState } from 'react';
import { styles } from './styles';
import { Ball } from './Ball';

const Exercicio2 = () => {
  // Criação os useStates para controle
  const [quantidade, setQuantidade] = useState<number | ''>('');
  const [numeros, setNumeros] = useState<number[]>([]);

  // Criação do handleChange para controlar a quantidade
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value) && value >= 0) {
      setQuantidade(value);
    } else {
      setQuantidade('');
    }
  };

  // Criação do handleKeyDown para criar os números
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      typeof quantidade === 'number' &&
      quantidade >= 0
    ) {
      adicionarNumero(quantidade);
    }
  };

  // Método para adicionar os números
  const adicionarNumero = (quantidade: number) => {
    const limite = 12;
    const novosNumeros = [...numeros, quantidade];
    if (novosNumeros.length > limite) {
      novosNumeros.shift();
    }
    setNumeros(novosNumeros);
  };

  // Método para remover os números
  const removerNumero = (index: number) => {
    const novosNumeros = numeros.filter((_, i) => i !== index);
    setNumeros(novosNumeros);
  };

  return (
    <div style={styles.exercicioContainer}>
      <h1 style={styles.titulo('#e74c3c')}>Exercício 2</h1>
      <input
        type="number"
        value={quantidade}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        min="0"
        placeholder="Digite um número"
        style={styles.inputQuantidade}
      />
      <div style={styles.listaNumeros}>
        {numeros.map((num, index) => (
          <Ball
            key={`${index}-${num}`}
            num={num}
            onRemove={() => removerNumero(index)}
            backgroundColor="#e74c3c"
          />
        ))}
      </div>
    </div>
  );
};

export default Exercicio2;
