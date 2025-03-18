import { useState } from 'react';
import { styles } from './styles';
import ListaNumeros from './ListaNumeros';

const Exercicio2 = () => {
  const [quantidade, setQuantidade] = useState<number | ''>('');
  const [numeros, setNumeros] = useState<number[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
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
        min="0"
        placeholder="Digite um número"
        style={styles.inputQuantidade}
      />
      <ListaNumeros
        numeros={numeros}
        onRemove={removerNumero}
        backgroundColor="#e74c3c"
      />
    </div>
  );
};

export default Exercicio2;
