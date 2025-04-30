'use client';

import type React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { type Concurso, mockConcurso } from '../types/concurso';
import { fetchConcursoEspecifico, fetchConcursoRecente } from '../services/api';

interface ConcursoContextType {
  concurso: Concurso | null;
  concursoNumber: string;
  error: string | null;
  loading: boolean;
  setConcursoNumber: (number: string) => void;
  fetchConcursoData: (number?: string) => Promise<void>;
  resetToRecente: () => Promise<void>;
}

const ConcursoContext = createContext<ConcursoContextType | undefined>(
  undefined,
);

export const ConcursoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [concurso, setConcurso] = useState<Concurso | null>(null);
  const [concursoNumber, setConcursoNumber] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRecente, setIsRecente] = useState<boolean>(true);

  const fetchConcursoData = async (number?: string) => {
    setLoading(true);
    setError(null);

    try {
      if (number) {
        const data = await fetchConcursoEspecifico(number);
        console.log('Dados do concurso específico:', data);
        setConcurso(data);
        setIsRecente(false);
      } else {
        const data = await fetchConcursoRecente();

        console.log('Dados do concurso recente:', data);

        setConcurso(data);
        setIsRecente(true);
      }
    } catch (err) {
      setError(`Não existem dados do concurso ${number || ''}`);
      console.error('Usando dados mockados devido a erro na API:', err);
      setConcurso(mockConcurso);
    } finally {
      setLoading(false);
    }
  };

  const resetToRecente = async () => {
    setConcursoNumber('');
    await fetchConcursoData();
  };

  useEffect(() => {
    fetchConcursoData();
  }, []);

  return (
    <ConcursoContext.Provider
      value={{
        concurso,
        concursoNumber,
        error,
        loading,
        setConcursoNumber,
        fetchConcursoData,
        resetToRecente,
      }}
    >
      {children}
    </ConcursoContext.Provider>
  );
};

export function useConcurso() {
  const context = useContext(ConcursoContext);
  if (context === undefined) {
    throw new Error('useConcurso must be used within a ConcursoProvider');
  }
  return context;
}
