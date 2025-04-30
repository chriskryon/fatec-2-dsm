'use client';

import type React from 'react';
import { useState } from 'react';
import { useConcurso } from '../../contexts/concurso-context';
import {
  HomeContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  RecentButton,
  LoadingMessage,
} from './styles';
import ErrorMessage from '../../components/components/ErrorMessage';
import ConcursoCard from '../../components/components/ConcursoCard';

const Home: React.FC = () => {
  const {
    concurso,
    concursoNumber,
    error,
    loading,
    setConcursoNumber,
    fetchConcursoData,
    resetToRecente,
  } = useConcurso();

  const [inputValue, setInputValue] = useState('');
  const [showRecentButton, setShowRecentButton] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (concursoNumber === inputValue) {
      return;
    }

    if (inputValue.trim()) {
      setConcursoNumber(inputValue);
      await fetchConcursoData(inputValue);
      setShowRecentButton(true);
    }
  };

  const handleRecentConcurso = async () => {
    setInputValue('');
    await resetToRecente();
    setShowRecentButton(false);
  };

  return (
    <HomeContainer>
      <SearchContainer onSubmit={handleSubmit}>
        <div className="search-controls">
          <SearchInput
            type="number"
            min={1}
            max={9999}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Número do concurso"
            aria-label="Digite o número do concurso"
          />
          <SearchButton type="submit" disabled={loading}>
            {loading ? 'Consultando...' : 'Consultar'}
          </SearchButton>
        </div>
      </SearchContainer>

      {loading ? (
        <LoadingMessage>Carregando dados do concurso...</LoadingMessage>
      ) : error ? (
        <ErrorMessage message={error} />
      ) : concurso ? (
        <ConcursoCard concurso={concurso} />
      ) : null}

      {showRecentButton && (
        <RecentButton onClick={handleRecentConcurso}>
          Voltar ao Concurso Recente
        </RecentButton>
      )}
    </HomeContainer>
  );
};

export default Home;
