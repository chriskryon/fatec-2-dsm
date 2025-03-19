import { useState } from 'react';
import { styles } from './styles';
import { Ball } from './Ball';

const Exercicio2 = () => {
  // Criação os useStates para controle
  const [valor, setValor] = useState<number | ''>('');
  const [numeros, setNumeros] = useState<number[]>([]);

  // Criação do handleChange para controlar a quantidade
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value) && value >= 0) {
      setValor(value);
    } else {
      setValor('');
    }
  };

  // Criação do handleKeyDown para criar os números
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && typeof valor === 'number' && valor >= 0) {
      adicionarNumero(valor);
    }
  };

  // Método para adicionar os números
  const adicionarNumero = (valor: number) => {
    const LIMITE = 12;

    const novosNumeros = [...numeros, valor];

    if (novosNumeros.length > LIMITE) {
      // O shift remove o primeiro elemento do array
      novosNumeros.shift();
    }

    setNumeros(novosNumeros);
  };

  // Método para remover os números
  const removerNumero = (index: number) => {
    // Deixar apenas os números que não são o que foi clicado para remover
    const novosNumeros = numeros.filter(
      // O _ é o valor do elemento atual, o segundo argumento é o índice
      // Está como _ pois não estamos utilizando o valor
      (_, indiceAtual) => indiceAtual !== index,
    );
    setNumeros(novosNumeros);
  };

  return (
    <div style={styles.exercicioContainer}>
      <h1 style={styles.titulo('#e74c3c')}>Exercício 2</h1>
      <input
        type="number"
        value={valor}
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
