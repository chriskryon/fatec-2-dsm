export interface Concurso {
  concurso: number;
  data_do_sorteio: string;
  bola1: number;
  bola2: number;
  bola3: number;
  bola4: number;
  bola5: number;
  bola6: number;
  ganhadores_6_acertos: number;
  cidade_uf: string | null;
  rateio_6_acertos: string;
  ganhadores_5_acertos: number;
  rateio_5_acertos: string;
  ganhadores_4_acertos: number;
  rateio_4_acertos: string;
  acumulado_6_acertos: string;
  arrecadacao_total: string;
  estimativa_premio: string;
  acumulado_sorteio_especial_mega_da_virada: string;
  observacao: string | null;
}

export const mockConcurso: Concurso = {
  concurso: 2849,
  data_do_sorteio: '2025-04-05T03:00:00.000Z',
  bola1: 13,
  bola2: 19,
  bola3: 25,
  bola4: 29,
  bola5: 31,
  bola6: 43,
  ganhadores_6_acertos: 1,
  cidade_uf: 'CRUZEIRO/SP',
  rateio_6_acertos: '59714933.41',
  ganhadores_5_acertos: 164,
  rateio_5_acertos: '28753.18',
  ganhadores_4_acertos: 8506,
  rateio_4_acertos: '791.96',
  acumulado_6_acertos: '20807011.62',
  arrecadacao_total: '80966100.00',
  estimativa_premio: '25000000.00',
  acumulado_sorteio_especial_mega_da_virada: '30990475.37',
  observacao: null,
};
