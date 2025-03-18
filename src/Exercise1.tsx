import React, { useState } from 'react';
import './Exercise1.css'; // Importa o arquivo de estilos

const ListaNumeros = ({ numeros }: { numeros: number[] }) => (
  <div className="lista-numeros">
    <div className="numeros-container">
      {numeros.map((num, index) => (
        <div key={index} className="numero">
          {num}
        </div>
      ))}
    </div>
  </div>
);

const Exercicio1 = () => {
  const [quantidade, setQuantidade] = useState(0);
  const [numeros, setNumeros] = useState<number[]>([]);

  // Função para gerar números aleatórios
  const gerarNumeros = (quantidade: number) => {
    const limite = Math.min(quantidade, 12); // Garante que o limite máximo seja 12
    const numerosGerados = Array.from(
      { length: limite },
      () => Math.floor(Math.random() * 100), // Gera números aleatórios entre 0 e 99
    );
    setNumeros(numerosGerados.sort((a, b) => a - b)); // Ordena os números em ordem crescente
  };

  // Handler chamado sempre que o valor do input muda
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value); // Converte o valor do input para número
    setQuantidade(value); // Atualiza o estado com o valor digitado
    gerarNumeros(value); // Chama a função para gerar os números
  };

  return (
    <div className="exercicio-container">
      <h1 className="titulo">Exercício 1</h1>
      <label>
        Digite a quantidade de números para gerar (máx 12):
        <input
          type="number"
          value={quantidade}
          onChange={handleChange} // Chama o handler ao alterar o valor do input
          min="1"
          max="12"
          className="input-quantidade"
        />
      </label>
      <ListaNumeros numeros={numeros} /> {/* Renderiza a lista de números */}
    </div>
  );
};

export default Exercicio1;
