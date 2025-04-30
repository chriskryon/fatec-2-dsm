import axios from 'axios';
import { type Concurso, mockConcurso } from '../types/concurso';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
});

export async function fetchConcursoRecente(): Promise<Concurso> {
  try {
    const response = await api.get<Concurso>('');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar concurso recente:', error);
    return mockConcurso;
  }
}

export async function fetchConcursoEspecifico(
  concurso: string,
): Promise<Concurso> {
  try {
    const response = await api.get<Concurso>(`/${concurso}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar concurso ${concurso}:`, error);
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error(`Concurso ${concurso} não encontrado`);
    }
    return {
      ...mockConcurso,
      concurso: Number.parseInt(concurso) || mockConcurso.concurso,
    };
  }
}
